import { error } from "@sveltejs/kit";
import { http } from "$lib/utils.js";

/**
 * Trust me, we know what we are doing in this file
 */

let cache = new Map();

setInterval(function() {
   cache = new Map();
}, 25 * 60 * 60);

async function getCachedOrFetch(url) {
  if (cache.has(url)) {
    return cache.get(url);
  } else {
    const response = await http.get(url);
    const jsonResponse = await response.json();
    cache.set(url, jsonResponse);
    return jsonResponse;
  }
}

async function getArticle(user, slug) {
  const url = `https://dev.to/api/articles/${user}/${slug}`;
  return await getCachedOrFetch(url);
}

async function getRelatedArticles(tags) {
  const url = `https://dev.to/api/articles/search?q=${tags}`;
  return await getCachedOrFetch(url);
}

export async function load({ params: { user, slug } }) {
  try {
    const article = await getArticle(user, slug);
    return {
      article,
      related: await getRelatedArticles(article.tags),
    };
  } catch (e) {
    throw error(404, {
      message: e.message,
    });
  }
}
