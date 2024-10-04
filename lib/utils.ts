import axios from "axios";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import { FilterOptions, NewsArticle } from "./types";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export async function fetchData<T>(
  url: string,
  params: Record<string, unknown>
): Promise<T> {
  const response = await axios.get<T>(url, { params });
  return response.data;
}

// Filtering news articles based on category, source, and date
export function filterData(
  newsData: NewsArticle[],
  filterOptions: FilterOptions
): NewsArticle[] {
  return newsData.filter((article) => {
    const matchesCategory = filterOptions.category
      ? article.category === filterOptions.category
      : true;
    const matchesSource = filterOptions.source
      ? article.source === filterOptions.source
      : true;
    const matchesDate = filterOptions.date
      ? new Date(article.publishedAt) >= new Date(filterOptions.date)
      : true;
    return matchesCategory && matchesSource && matchesDate;
  });
}

// Searching news articles by keyword
export function searchNews(
  newsData: NewsArticle[],
  searchQuery: string
): NewsArticle[] {
  return newsData.filter((article) =>
    article.title.toLowerCase().includes(searchQuery.toLowerCase())
  );
}
