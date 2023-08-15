import { http } from "$lib/utils.js"
import { error } from "@sveltejs/kit"

export async function GET({ url: { searchParams } }) {
  try {
    const query = searchParams.get('q');
    const page = Number(searchParams.get('page') || 1);
    const url = `https://dev.to/api/articles/search?q=${encodeURIComponent(query)}&page=${page}`;
    const response = await http.get(url);
    const data = await response.json();
    
    return new Response(JSON.stringify(data), {
        headers: {
          'Content-Type': 'application/json'
        }
    });
  } catch (e) {
    return new Response(JSON.stringify(e.message), {
        headers: {
          'Content-Type': 'application/json'
        }
    });
  }
}