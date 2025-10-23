const BASE_URL = 'https://jsonplaceholder.typicode.com/posts';

export const fetchPosts = async (page = 1, limit = 10) => {
  try {
    const response = await fetch(`${BASE_URL}?_page=${page}&_limit=${limit}`);
    const totalCount = response.headers.get('x-total-count');
    const data = await response.json();
    return { data, totalCount: parseInt(totalCount) };
  } catch (error) {
    throw new Error('Failed to fetch posts');
  }
};

export const searchPosts = async (query) => {
  try {
    const response = await fetch(`${BASE_URL}?q=${query}`);
    const data = await response.json();
    return data;
  } catch (error) {
    throw new Error('Failed to search posts');
  }
};
