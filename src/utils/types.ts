export type Source = {
  url: string;
  name: string;
}

export type Article = {
  id?: number;
  source: Source;
  title: string;
  description: string;
  url: string;
  image: string;
  publishedAt: string;
  content: string;
}

export type ResponseServer = {
  totalArticles: number;
  articles: Article[];
}
