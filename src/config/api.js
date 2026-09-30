// One source of truth for all backend collection routes.
export const API_PATHS = {
  products: '/products_ernis_costumes',
  analytics: '/analytics_ernis_costumes',
};

export const productPath = (id = '') => `${API_PATHS.products}${id ? `/${id}` : ''}`;
export const productImagesPath = (id) => `${productPath(id)}/images`;
