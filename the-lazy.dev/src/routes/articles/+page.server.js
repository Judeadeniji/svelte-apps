import { http } from "$lib/utils.js";

async function getMyArticles(page) {
  if (page != 1) return [];
  try {
    const request = await http.get("https://dev.to/api/articles", {
      params: {
        username: "oluwaferanmi",
        page,
      },
    });
    return await request.json();
  } catch (e) {
    return [];
  }
}

async function getLatestArticles(page) {
  try {
    const request = await http.get("https://dev.to/api/articles/latest", {
      params: { page },
    });
    return await request.json();
  } catch (e) {
    throw e;
  }
}

export function load({ url }) {
  const page = url.searchParams.get("page") || 1;
  const articles = () => Promise.all([getMyArticles(page), getLatestArticles(page)]);
  return {
    page: Number(page),
    articles: articles(),
  };
}
