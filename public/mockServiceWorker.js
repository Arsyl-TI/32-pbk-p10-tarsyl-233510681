import { setupWorker, rest } from 'msw'

const worker = setupWorker(
  rest.get('/api/user.json', (req, res, ctx) => {
    return res(
      ctx.json({
        name: "John Doe",
        username: "johndoe123",
        email: "john.doe@example.com",
        description: "Frontend developer and Vue.js enthusiast. Love building interactive web applications.",
        balance: 1250000,
        avatar: "https://via.placeholder.com/150"
      })
    )
  }),
  
  rest.put('/api/user.json', async (req, res, ctx) => {
    const updatedData = await req.json()
    return res(
      ctx.delay(150),
      ctx.json(updatedData)
  })
)

worker.start()