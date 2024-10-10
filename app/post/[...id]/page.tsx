import { getGuardianNewsArticleById } from "@/lib/api.service";
import { NewsDetail } from "./components/NewsDetail";
interface Props {
  params: { id: string[] };
}
async function NewsDetailPage({ params }: Props) {
  const id = params.id;
  const postId = Array.isArray(id) ? id.join("/") : id;
  const news = await getGuardianNewsArticleById(postId);

  return <NewsDetail news={news} />;
}

export default NewsDetailPage;
