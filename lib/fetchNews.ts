// lib/fetchNews.ts

import { getGuardianNewsArticles } from "@/app/api/guardianNewsApi/getGuardianNews";
import { GuardianArticleSchema } from "./types";

export async function fetchNewsData(
  searchQuery: string,
  fromDate?: string,
  toDate?: string,
  section?: string
) {
  try {
    const guardianArticles = await getGuardianNewsArticles({
      searchQuery,
      fromDate,
      toDate,
      section,
    });

    return guardianArticles as GuardianArticleSchema[];
  } catch (error) {
    console.error("Failed to fetch news data", error);
    return [];
  }
}
