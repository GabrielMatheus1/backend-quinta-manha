import usersController from "../controller/users.controller.js"



function usersRoutes(fastify) {
 
    fastify.get('/users', async (req, reply) => {
        return usersController.consultarTodos()
    } )


    fastify.get('/user/:id', async (req, reply) => {
        return await usersController.consultarUm(req, reply)
    } )



    fastify.post('/user', async (req, reply) => {
        return usersController.cadastrarNovo(req, reply)
    } )



    fastify.put('/user/:id', async (req, reply) => {
        return usersController.alterarRegistro(req, reply)
    } )
    

    
    fastify.delete('/user/:id', async (req, reply) => {
        return usersController.deletarRegistro(req, reply)
    } )

}

export default usersRoutes