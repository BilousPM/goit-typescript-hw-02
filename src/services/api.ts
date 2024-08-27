import axios from "axios";

export const fetchPhotots = async (query, page = 1, perPage = 5) => {
  const ACCESS_KEY = "wp4xAFKY3Ftqixlrg2JE9qdFAU2L2JyQZGvTnqlrbu4";

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
};
