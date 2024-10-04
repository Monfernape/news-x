import { API_KEYS, API_URLS } from "@/lib/constants";
import { fetchData } from "@/lib/utils";

interface NYTNewsApiResponse {
  response: {
    docs: {
      headline: {
        main: string;
      };
      snippet: string;
      pub_date: string;
      source: string;
    }[];
  };
}

export async function getNYTNewsArticles(params: {
  searchQuery?: string;
  category?: string;
  source?: string;
}) {
  const url = API_URLS.NYT_API || "";
  const response = await fetchData<NYTNewsApiResponse>(
    `${url}/articlesearch.json`,
    {
      q: params.searchQuery || "",
      category: params.category || "",
      sources: params.source || "",
      begin_date: "20240801",
      end_date: "20240802",
      "api-key": API_KEYS.NYT_API,
      pageSize: 10,
    }
  );
  return response.response.docs;
}

export async function getNYTNewsArticleById(id: string) {
  const url = `${API_URLS.NYT_API}/${id}`;
  const response = await fetchData<NYTNewsApiResponse>(url, {
    "api-key": API_KEYS.NYT_API,
  });
  return response.response.docs;
}
