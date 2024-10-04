"use server";
import { fetchNewsData } from "@/lib/fetchNews";
import { NewsFeed } from "@/components/NewsFeed";

export default async function Home() {
  const articlesList = await fetchNewsData('');

  return <NewsFeed articlesList={articlesList} />;
}
