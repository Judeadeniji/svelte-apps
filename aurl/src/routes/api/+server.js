import { Http } from 'utiliti-js';

const http = new Http();

export async function POST({ url }) {
  const params = url.searchParams.get('url');
  const {url: ytLink} = Object.fromEntries(url.searchParams);
  
  const v_url = new URL(ytLink);
  
  const video_id = v_url.searchParams.get("v");
  
  if(!video_id) {
    return new Response("Not-found")
  }
  
  if (video_id) {
    try {
      const response = await
      http.get("https://you-api-q4fo.onrender.com/media", { params: {
        v: video_id
      } });

      const data = await response.json();
      console.log(data);
      
      return new Response(JSON.stringify(data), {
        headers: {
          'Content-Type': 'application/json'
        }
      });
    } catch (e) {
      return new Response(JSON.stringify(e), {
        headers: {
          'Content-Type': 'application/json'
        }
      });
    }
  }
}
