import usersRepository from "../repository/users.repository.js"

import bcrypt from 'bcrypt'



const usersController = {

    async consultarTodos() {
        return await usersRepository.consultarTodo()
    },


    async consultarUm(req, reply) {
        const { id } = req.params   
        return await usersRepository.consultarUm(id)
    },


    async cadastrarNovo(req, reply) {

        const { name, phone, mail, password } = req.body

        const saltrounds = 10
        const passcript = await bcrypt.hash(password, saltrounds)

        return usersRepository.cadastrarNovo(name, phone, mail, passcript)

    },


    async alterarRegistro(req, reply) {

        const { id } = req.params
        const { name, phone, mail, password } = req.body

        const saltrounds = 10
        const passcript = await bcrypt.hash(password, saltrounds)

        let usuario = await usersRepository.consultarUm(id)
        return await usersRepository.alterarRegistro(id, name, phone, mail, passcript, usuario.name)
    },


    async deletarRegistro(req, reply) {

        const { id } = req.params

        return await usersRepository.deletarRegistro(id)
    }

}


export default usersController