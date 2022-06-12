import urlcat from 'urlcat';
import { Post } from '../../../../models/Post.model';
import { Builder, QD } from '../../api.baseQuery';

// #region ACTION DEFINITION

/* Get Post by ID */
type GetPostByIdParams = { id: number };
type GetPostByIdResponse = { post: Post };

// #endregion

// #region ENDPOINT DEFINITION

type PostsEndpoint = {
  getPostById: QD<GetPostByIdResponse, GetPostByIdParams>;
};

// #endregion

const postsEndpoints = (builder: Builder): PostsEndpoint => ({
  getPostById: builder.query({
    query: (params) => urlcat('posts/:id', params),
  }),
});

export default postsEndpoints;
