import { http } from "$lib/utils.js";

let data;

export async function load() {
  if (!data) {
    const [my_articles, others] = await Promise.all([
        getMyArticles(),
        getLatestArticles()
      ]);
    
    return data = {
        my_articles: my_articles.filter(a => a.type_of === 'article'),
        others: others.filter(a => a.type_of === 'article')
    };
  }
  
  return data;
}

async function getMyArticles() {
  try {
    const request = await http.get("https://dev.to/api/articles", {
      params: {
        username: 'oluwaferanmi'
      }
    });
    return await request.json();
  } catch (e) {
    return [];
  }
}

async function getLatestArticles() {
  try {
    const request = await http.get("https://dev.to/api/articles/latest", {
      params: {
        page: 1
      }
    });
    return await request.json();
  } catch (e) {
    return [];
  }
}