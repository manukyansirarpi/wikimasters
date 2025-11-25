import WikiArticleViewer from "@/components/wiki-article-viewer";
import { getArticleById } from "@/lib/data/articles";
import { stackServerApp } from "@/stack/server";
import { notFound } from "next/navigation";

interface ViewArticlePageProps {
  params: Promise<{
    id: string;
  }>;
}

export default async function ViewArticlePage({
  params,
}: ViewArticlePageProps) {
  await stackServerApp.getUser({ or: "redirect" });
  const { id } = await params;
  const article = await getArticleById(+id);

  if (!article) {
    notFound();
  }

  // Mock permission check - in a real app, this would come from auth/user context
  const canEdit = true; // Set to true for demonstration

  return <WikiArticleViewer article={article} canEdit={canEdit} />;
}
