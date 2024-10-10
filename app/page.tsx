import { NewsFeed } from "@/app/components/NewsFeed";
import { getGuardianNewsArticles } from "@/lib/api.service";

export default async function Home() {
  const articles = await getGuardianNewsArticles({ searchQuery: "" });
  return <NewsFeed articles={articles} />;
}
