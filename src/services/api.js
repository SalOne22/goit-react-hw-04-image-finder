import axios from 'axios';

const API_KEY = '36557566-6ba75e1a2acc62b457c544e60';
const BASE_URL = 'https://pixabay.com/api/';

export const fetchImages = async ({ query, page, per_page }) => {
  const response = await axios.get(BASE_URL, {
    params: {
      q: query,
      page: page,
      per_page: per_page,
      key: API_KEY,
      image_type: 'photo',
      orientation: 'horizontal',
    },
  });

  return response.data.hits;
};
