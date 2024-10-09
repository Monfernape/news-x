import axios from "axios";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import { Data, GuardianArticleSchema } from "./types";

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

// Truncating long titles
export function addEllipsis(title: string, limit: number) {
  return `${title.slice(0, limit)}${title.length >= limit ? "..." : ""}`;
}

export const getGuardianNewsFormattedData = (data: GuardianArticleSchema[]) => {
  return data.map((article) => {
    return {
      id: article?.id,
      webTitle: article?.webTitle,
      sectionName: article?.sectionName,
      fields: article?.fields,
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
