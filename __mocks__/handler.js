import { rest } from 'msw';

//#region AUTH HANDLERS

const authHandlers = [
  rest.post('auth/login', (req, res, ctx) => {
    if (req.body.username === 'username' && req.body.password === 'password') {
      return res(
        ctx.json({
          token: 'token',
        })
      );
    }

    return res(ctx.status(401), ctx.json({ code: 'auth/invalid-credentials' }));
  }),

  rest.post('auth/refresh-token', (req, res, ctx) => res(ctx.json({ token: 'refreshed-token' }))),
]

//#endregion

//#region POSTS HANDLERS

const postsHandler = [
  rest.get('posts/:id', (req, res, ctx) => res(ctx.json({
    id: parseInt(req.params.id, 10),
    userId: 1,
    title: 'title',
    body: 'body',
  })))
]

//#endregion

export const handlers = [
  ...authHandlers,
  ...postsHandler,
];
