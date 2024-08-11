export default defineEventHandler((event) => {
    event.node.res.statusCode = 301
    event.node.res.setHeader('Location', '/')
    return {
      message: 'Redirection response (301)'
    }
  })
  