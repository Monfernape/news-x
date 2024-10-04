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
  category?: string;
  source?: string;
}) {
  const url = API_URLS.GUARDIAN_API || "";
  const response = await fetchData<GuardianNewsApiResponse>(url, {
    q: params.searchQuery || "",
    category: params.category || "",
    sources: params.source || "",
    "api-key": API_KEYS.GUARDIAN_API,
    section: "news",
    "show-fields": "byline,thumbnail,trailText",
  });
  return response.response.results;
}

export async function getGuardianNewsArticleById(id: string) {
  const url = `${API_URLS.GUARDIAN_API}/${id}`;
  const response = await fetchData<GuardianNewsApiResponse>(url, {
    "api-key": API_KEYS.GUARDIAN_API,
    "show-fields": "byline,thumbnail,trailText",
  });

  return response.response.results;
}
