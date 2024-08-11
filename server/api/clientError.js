export default defineEventHandler((event) => {
    event.node.res.statusCode = 404
    return {
      message: 'Client error response (404)'
    }
  })
  