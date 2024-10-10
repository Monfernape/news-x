import { GUARDIAN_API_KEY, GUARDIAN_BASE_URL } from "@/lib/constants";
import { GuardianArticles, GuardianArticleViewSchema, NewsData } from "@/lib/types";
import { fetchData } from "@/lib/utils";

interface GuardianNewsApiResponse {
  response: {
    results: GuardianArticles[];
  };
}

export async function getGuardianNewsArticles(params: {
  searchQuery?: string;
  fromDate?: string;
  toDate?: string;
  section?: string;
  orderBy?: string;
}) {
  const url = `${GUARDIAN_BASE_URL}/search`;
  const response = await fetchData<GuardianNewsApiResponse>(url, {
    q: params.searchQuery || "",
    "from-date": params.fromDate,
    "to-date": params.toDate,
    section: params.section,
    "api-key": GUARDIAN_API_KEY,
    "show-fields": "thumbnail",
    "order-by": params.orderBy,
  });
  return response.response.results;
}

export async function getGuardianNewsArticleById(id: string): Promise<GuardianArticleViewSchema> {
  const url = `${GUARDIAN_BASE_URL}/${id}`;
  const response = await fetchData<NewsData>(url, {
    "api-key": GUARDIAN_API_KEY,
    "show-fields": "thumbnail,body,headline",
    "show-related": "true",
    "show-blocks": "body",
    "show-tags": 'all'
  });

  return {
    content: response.response.content,
    relatedContent: response.response.relatedContent,
  };
}
