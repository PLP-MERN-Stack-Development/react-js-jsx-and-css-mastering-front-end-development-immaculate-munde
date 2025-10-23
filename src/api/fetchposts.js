const BASE_URL = 'https://jsonplaceholder.typicode.com/posts';

export const fetchPosts = async (page = 1, limit = 10) => {
  try {
    const response = await fetch(`${BASE_URL}?_page=${page}&_limit=${limit}`);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const totalCount = response.headers.get('x-total-count');
    const data = await response.json();
    return { data, totalCount: parseInt(totalCount) };
  } catch (error) {
    console.error('Fetch error:', error);
    throw new Error('Failed to fetch posts. Please try again later.');
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

// Add setup validation
export const validateSetup = async () => {
  try {
    const response = await fetch(BASE_URL);
    return response.ok;
  } catch {
    return false;
  }
};
