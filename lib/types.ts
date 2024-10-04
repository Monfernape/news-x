export interface NewsArticle {
    title: string;
    description: string;
    category?: string;
    source: string;
    publishedAt: string;
    imageUrl?: string;
  }
  
  export interface FilterOptions {
    category?: string;
    source?: string;
    date?: string;
  }