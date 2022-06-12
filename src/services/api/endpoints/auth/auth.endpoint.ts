import { Builder, MD } from '../../api.baseQuery';

// #region ACTION DEFINITION

/* Login */
type LoginParams = { username: string; password: string };
type LoginResponse = { token: string };

// #endregion

// #region ENDPOINT DEFINITION

export type AuthEndpoint = {
  login: MD<LoginResponse, LoginParams>;
};

// #endregion

const authEndpoints = (builder: Builder): AuthEndpoint => ({
  login: builder.mutation({
    query: (params) => ({
      url: 'auth/login',
      method: 'post',
      body: params,
    }),
  }),
});

export default authEndpoints;
