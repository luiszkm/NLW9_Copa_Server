import Fastify from "fastify";


async function bootstrap() {
  const fastify = Fastify({
    logger: true,
  })

  fastify.get('/pools/count', () => {
    console.log("aaaaaa");
    
    return { count: 0 }
  })

  await fastify.listen({ port: 3333 })
}
bootstrap();