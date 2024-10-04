// lib/fetchNews.ts

import { getNewsArticles } from "@/app/api/newsApi/getNews";
import { getGuardianNewsArticles } from "@/app/api/guardianNewsApi/getGuardianNews";
import { getNYTNewsArticles } from "@/app/api/nytNewsApi/getNYTNews";

export async function fetchNewsData(searchQuery: string) {
  try {
    // Fetch data from all sources in parallel
    const [newsApiArticles, guardianArticles, nytArticles] = await Promise.all([
      getNewsArticles({
        searchQuery,
      }),
      getGuardianNewsArticles({
        searchQuery,
      }),
      getNYTNewsArticles({
        searchQuery,
      }),
    ]);

    const combinedArticles = {
      newsApiArticles,
      guardianArticles,
      nytArticles,
    };

    return combinedArticles;
  } catch (error) {
    console.error("Failed to fetch news data", error);
    return { newsApiArticles: [], guardianArticles: [], nytArticles: [] };
  }
}
