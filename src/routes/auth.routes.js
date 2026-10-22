import authController from "../controller/auth.controller.js"

function authRoutes(fastify) {

    fastify.post('/login', async (req, replay) => {
        return authController.validacaoLogin(req, replay)
    })

}

export default authRoutes