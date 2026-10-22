// instanciando o fastify
import Fastify from 'fastify'
import 'dotenv/config'

import usersRoutes from './routes/users.routes.js'
import authRoutes from './routes/auth.routes.js'


const fastify = Fastify({
    logger: true
})


// declarção de rota
fastify.get('/', (req, reply) => {
    return 'Servidor funcionando na porta 3000'
})


await fastify.register( usersRoutes )
await fastify.register( authRoutes )


// Run the server!
fastify.listen({ port: process.env.PORT }, function (err, address) {
    if (err) {
        fastify.log.error(err)
        process.exit(1)
    }
    // Server is now listening on ${address}
})