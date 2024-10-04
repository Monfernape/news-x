import axios from "axios";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import { Data, FilterOptions, NewsArticle } from "./types";

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

// Truncating long titles
export function addEllipsis(title: string, limit: number) {
  return `${title.slice(0, limit)}${title.length >= limit ? "..." : ""}`;
}
export const getNewsApiFormattedData = (data: Data[]) => {
  return data.map((article) => {
    return {
      id: article.id,
      title: article.title,
      description: article.description,
      category: article?.source?.name,
      source: article?.source?.name,
      publishedAt: new Date(article.publishedAt).toDateString(),
      imageUrl: article?.urlToImage,
    };
  });
};

export const getGuardianNewsFormattedData = (data: Data[]) => {
  return data.map((article) => {
    return {
      id: article?.id,
      title: article?.webTitle,
      description: article?.description,
      category: article?.sectionName,
      source: article?.pillarName,
      publishedAt: new Date(article?.webPublicationDate).toDateString(),
      imageURL: article?.fields?.thumbnail,
    };
  });
};

export const getNYTNewsFormattedData = (data: Data[]) => {
  return data.map((article) => {
    return {
      title: article.headline.print_headline,
      description: article.description,
      category: article?.section_name,
      source: article?.source,
      publishedAt: new Date(article?.pub_date).toDateString(),
      imageURL: article?.multimedia?.[0]?.url,
    };
  });
};

// eslint-disable-next-line @typescript-eslint/no-unsafe-function-type
export const debounceFn = (fn: Function, delay: number) => {
  let timeoutId: ReturnType<typeof setTimeout>;
  return function (...args: Data[]) {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => {
      fn(...args);
    }, delay);
  };
};
