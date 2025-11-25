"use server";

import { stackServerApp } from "@/stack/server";

export type createArticleInput = {
  title: string;
  content: string;
  authorId: string;
  imageUrl: string;
};

export type updateArticleInput = {
  title?: string;
  content?: string;
  imageUrl?: string;
};

export async function createArticle(formData: createArticleInput) {
  const user = await stackServerApp.getUser();

  if (!user) {
    throw new Error("Unauthorized");
  }

  console.log("article create called", formData);

  return {
    success: true,
    message: "Article created",
  };
}

export async function updateArticle(formData: updateArticleInput) {
  const user = await stackServerApp.getUser();

  if (!user) {
    throw new Error("Unauthorized");
  }

  const authorId = user.id;
  console.log("article update called", authorId, formData);

  return {
    success: true,
    message: "Article updated",
  };
}

export async function deleteArticle(id: string) {
  const user = await stackServerApp.getUser();

  if (!user) {
    throw new Error("Unauthorized");
  }

  const authorId = user.id;
  console.log("article delete called", authorId, id);

  return {
    success: true,
    message: "deleted",
  };
}
