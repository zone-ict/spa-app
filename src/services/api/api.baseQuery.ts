import { BaseQueryApi } from '@reduxjs/toolkit/dist/query/baseQueryTypes';
import { EndpointBuilder } from '@reduxjs/toolkit/dist/query/endpointDefinitions';
import {
  BaseQueryFn,
  FetchArgs,
  fetchBaseQuery,
  FetchBaseQueryError,
  MutationDefinition,
  QueryDefinition,
} from '@reduxjs/toolkit/query';
import { Mutex } from 'async-mutex';
import { RootState } from '../../app/store/store.app';
import env from '../../configs/env/env.config';
import { sessionAction } from '../../stores/session/session.store';

export type ApiServicePath = 'api';
export const apiServicePath: ApiServicePath = 'api';

export type BaseQuery = BaseQueryFn<string | FetchArgs, unknown, FetchBaseQueryError>;
export type QD<Response, Params> = QueryDefinition<
  Params,
  BaseQuery,
  string,
  Response,
  ApiServicePath
>;
export type MD<Response, Params> = MutationDefinition<
  Params,
  BaseQuery,
  string,
  Response,
  ApiServicePath
>;
export type Builder = EndpointBuilder<BaseQuery, string, ApiServicePath>;

export const prepareHeaders = (
  headers: Headers,
  api: Pick<BaseQueryApi, 'getState' | 'extra' | 'endpoint' | 'type' | 'forced'>,
): Headers => {
  const { token } = (api.getState() as RootState).session;
  if (token) headers.set('authorization', `Bearer ${token}`);
  return headers;
};

export const base = fetchBaseQuery({
  baseUrl: env.apiBaseUrl,
  prepareHeaders,
});

const mutex = new Mutex();
const apiBaseQuery: BaseQuery = async (args, api, extraOptions) => {
  let result = await base(args, api, extraOptions);
  if (result.error && result.error.status === 401) {
    if (mutex.isLocked()) {
      await mutex.waitForUnlock();
      result = await base(args, api, extraOptions);
    } else {
      const release = await mutex.acquire();
      try {
        // TODO: Replace with actual async function to get new token
        const req = await fetch(`${env.apiBaseUrl}auth/refresh-token`, { method: 'post' });
        const { token } = (await req.json()) as { token: string };

        if (token) {
          api.dispatch(sessionAction.changeToken({ token }));
          result = await base(args, api, extraOptions);
        } else {
          api.dispatch(sessionAction.logout());
        }
      } finally {
        release();
      }
    }
  }

  return result;
};

export default apiBaseQuery;
