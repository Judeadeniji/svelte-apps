import { error } from "@sveltejs/kit";
import { http } from "$lib/utils.js";

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

async function getSearchResults(query, page) {
  const url = `https://dev.to/api/articles/search?q=${encodeURIComponent(query)}&page=${page}`;
  return await getCachedOrFetch(url);
}

export function load({ url }) {
  try {
    const query = url.searchParams.get('q');
    const page = Number(url.searchParams.get('page') || 1);
    return {
      articles: getSearchResults(query, page),
      query,
      page,
    };
  } catch (e) {
    throw error(404, {
      message: e.message,
    });
  }
}