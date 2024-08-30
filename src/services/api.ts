import axios from "axios";

const ACCESS_KEY: string = "wp4xAFKY3Ftqixlrg2JE9qdFAU2L2JyQZGvTnqlrbu4";

export async function fetchPhotos<T>(
  query: string,
  page: number = 1,
  perPage: number = 5
): Promise<T> {
  const response = await axios.get(
    `https://api.unsplash.com/search/photos?page=1`,
    {
      headers: {
        Authorization: `Client-ID ${ACCESS_KEY}`,
      },
      params: {
        query,
        per_page: perPage,
        page,
      },
    }
  );
  return response.data;
}
