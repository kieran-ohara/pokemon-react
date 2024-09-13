import { rest } from 'msw'

export const handlers = [
  rest.get('http://api.com/bigboof', (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json({
        id: '1',
        name: 'Big Boof',
        description: 'A very big boof indeed',
        size: 'extra large',
        fluffiness: 10
      })
    )
  }),
]
