import { API_KEYS, API_URLS } from "@/lib/constants";
import { fetchData } from "@/lib/utils";

interface NewsApiResponse {
  articles: {
    title: string;
    description: string;
    publishedAt: string;
    source: { name: string };
  }[];
}

export async function getNewsArticles(params: {
  searchQuery?: string;
  category?: string;
  source?: string;
}) {
  const url = API_URLS.NEWS_API || "";
  const response = await fetchData<NewsApiResponse>(url, {
    q: "apple",
    pageSize: 10,
    language: "en",
    category: params.category || "",
    sources: params.source || "",
    apiKey: API_KEYS.NEWS_API,
  });
  return response.articles;
}

export async function getNewsArticleById(id: string) {
  const url = `${API_URLS.NEWS_API}/${id}`;
  const response = await fetchData<NewsApiResponse>(url, {
    apiKey: API_KEYS.NEWS_API,
  });
  return response.articles;
}
