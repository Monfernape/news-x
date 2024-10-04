export interface NewsArticle {
  title: string;
  description?: string;
  category?: string;
  source?: string;
  publishedAt?: string;
  imageUrl?: string;
}

export interface FilterOptions {
  category?: string;
  source?: string;
  date?: string;
}

export type Data = {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [key: string]: any;
};

export interface Articles {
  newsApiArticles: Data[];
  guardianArticles: Data[];
  nytArticles: Data[];
}
