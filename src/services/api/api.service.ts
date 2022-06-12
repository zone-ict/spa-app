import { createApi } from '@reduxjs/toolkit/dist/query';
import apiBaseQuery, { apiServicePath } from './api.baseQuery';
import authEndpoints from './endpoints/auth/auth.endpoint';
import postsEndpoints from './endpoints/posts/posts.endpoint';

const apiService = createApi({
  reducerPath: apiServicePath,
  baseQuery: apiBaseQuery,
  endpoints: (builder) => ({
    ...authEndpoints(builder),
    ...postsEndpoints(builder),
  }),
});

export default apiService;
