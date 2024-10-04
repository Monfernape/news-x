export interface NewsArticle {
    title: string;
    description: string;
    category?: string;
    source: string;
    publishedAt: string;
  }
  
  export interface FilterOptions {
    category?: string;
    source?: string;
    date?: string;
  }