export default defineEventHandler((event) => {
    event.node.res.statusCode = 500
    return {
      message: 'Server error response (500)'
    }
  })
  