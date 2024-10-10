export interface FilterOptions {
  category: string;
  source: string;
  date: string;
}

export type NewsData = {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [key: string]: any;
};

// export interface Articles {
//   guardianArticles: NewsData[];
// }

export interface  GuardianArticleSchema {
  id: string;
  type: string;
  sectionId: string;
  sectionName: string;
  webPublicationDate: string;
  webTitle: string;
  webUrl: string;
  apiUrl: string;
  fields: {
      thumbnail: string;
      body: string;
  };
  tags: Record<string, string>[];
  isHosted: boolean;
  pillarId: string;
  pillarName: string;
}

export interface GuardianArticleViewSchema {
  relatedContent?: GuardianArticleSchema[];
  content: GuardianArticleSchema;
}

export type DateRange = {
  from: Date | undefined;
  to?: Date | undefined;
};

export interface GuardianArticles {
  apiUrl: string;
    fields: {
      byLine?:string,
        thumbnail: string;
        
        trailText?:string
    };
    id: string;
    isHosted: boolean;
    pillarId: string;
    pillarName: string;
    sectionId: string;
    sectionName: string;
    type: string;
    webPublicationDate: string;
    webTitle: string;
    webUrl: string;
}
export interface PostArticles {
  id:string,
  webTitle:string,
  sectionName:string,
  fields : {
    thumbnail:string,
    byline?:string,
    trailText?:string
  }
}
