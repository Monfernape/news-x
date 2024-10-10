import axios from "axios";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

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
