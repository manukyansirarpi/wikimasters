import WikiEditor from "@/components/wiki-editor";
import { getArticleById } from "@/lib/data/articles";
import { stackServerApp } from "@/stack/server";
import { notFound } from "next/navigation";

interface EditArticlePageProps {
  params: Promise<{
    id: string;
  }>;
}

export default async function EditArticlePage({
  params,
}: EditArticlePageProps) {
  await stackServerApp.getUser({ or: "redirect" });
  const { id } = await params;

  const article = await getArticleById(+id);

  if (!article) {
    notFound();
  }

  return (
    <WikiEditor
      initialTitle={article.title}
      initialContent={article.content}
      isEditing={true}
      articleId={id}
    />
  );
}
