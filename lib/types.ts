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
  guardianArticles: Data[];
}

export interface GuardianArticleSchema {
  id?: string;
  webTitle: string;
  sectionName?: string;
  webPublicationDate?: string;
  fields?: {
    thumbnail: string;
    body?: string;
  };
  tags?: []
}

export interface GuardianArticleViewSchema {
  relatedContent?: GuardianArticleSchema[];
  content: GuardianArticleSchema;
}

export type DateRange = {
  from: Date | undefined;
  to?: Date | undefined;
};
