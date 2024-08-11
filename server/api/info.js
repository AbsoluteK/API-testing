export default defineEventHandler((event) => {
    event.node.res.statusCode = 100
    return {
      message: 'Informational response (100)'
    }
  })
  