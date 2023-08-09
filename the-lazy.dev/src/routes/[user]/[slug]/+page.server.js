import { error } from "@sveltejs/kit";
import { http } from "$lib/utils.js";

export async function load ({ params: { user, slug } }) {
  try {
    const response = await http.get(`https://dev.to/api/articles/${user}/${slug}`);
    
    return await response.json();
  } catch (e) {
    throw error(404, {
      message: 'Page Not Found'
    });
  }
}