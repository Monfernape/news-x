import { API_KEYS, API_URLS } from "@/lib/constants";
import { fetchData } from "@/lib/utils";

interface GuardianNewsApiResponse {
  response: {
    results: {
      webTitle: string;
      fields: {
        byline: string;
        thumbnail: string;
        trailText: string;
      };
    }[];
  };
}

export async function getGuardianNewsArticles(params: {
  searchQuery?: string;
}) {
  const url = `${API_URLS.GUARDIAN_API}/search` || "";
  const response = await fetchData<GuardianNewsApiResponse>(url, {
    q: params.searchQuery || "",
    "api-key": API_KEYS.GUARDIAN_API,
    "show-fields": "thumbnail",
  });
  return response.response.results;
}

export async function getGuardianNewsArticleById(id: string) {
  const url = `${API_URLS.GUARDIAN_API}/${id}`;
  const response = await fetchData<any>(url, {
    "api-key": API_KEYS.GUARDIAN_API,
    "show-fields": "thumbnail",
    "show-related": "true",
  });

  return {
    content: response.response.content,
    relatedContent: response.response.relatedContent,
  };
}
