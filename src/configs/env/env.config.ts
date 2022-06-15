const env = {
  apiBaseUrl: (import.meta.env.API_BASE_URL as string) ?? '',
  development: import.meta.env.MODE === 'development',
};

export default env;
