import client from './client';

const itemsBaseUrl = '/api/v1';

export const getProducts = () => {
  const url = `${itemsBaseUrl}/products`;
  return client.get(url);
};

export const getProductFilters = filters => {
  const { name, price, categories, creatorCompany } = filters;

  const params = [];

  if (name) {
    params.push(`name=${encodeURIComponent(name)}`);
  }

  if (price === true) {
    params.push('sort=-price');
  } else if (price === false) {
    params.push('sort=price');
  }

  if (categories && categories.length > 0) {
    const categoriesParam = categories.map(
      category => `categories=${encodeURIComponent(category)}`,
    );
    params.push(...categoriesParam);
  }

  if (creatorCompany) {
    params.push(`creatorCompany=${encodeURIComponent(creatorCompany)}`);
  }

  const filterUrl = params.length > 0 ? `?${params.join('&')}` : '';
  const url = `${itemsBaseUrl}/products${filterUrl}`;
  return client.get(url);
};

export const getCategories = () => {
  const url = `${itemsBaseUrl}/products/categories`;
  return client.get(url);
};
