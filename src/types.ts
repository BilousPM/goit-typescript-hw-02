interface Urls {
  full: string;
  regular: string;
  small: string;
}

interface User {
  links: { html: string };
  name: string;
}
export interface Photo {
  id: string;
  urls: Urls;
  user: User;
  alt_description?: string;
  likes?: number;
}

export interface Result {
  results: Photo[];
  total: number;
  total_pages: number;
}
