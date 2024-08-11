export default defineEventHandler((event) => {
    event.node.res.statusCode = 200
    return {
      message: 'Success response (200)'
    }
  })
  