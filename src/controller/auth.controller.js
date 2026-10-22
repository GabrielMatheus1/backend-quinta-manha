import usersRepository from "../repository/users.repository.js";

import bcrypt from 'bcrypt'


const authController = {

    async consultarUsuario(email) {

        let usuario = await usersRepository.consultaEmail(email)

        if (usuario.length > 0) {
            return usuario[0]
        } 
        
        else {
            return null
        }

    },


    async validacaoLogin(req, reply) {

        const { email, senha } = req.body

        let usuario = await this.consultarUsuario(email)

        if ( !usuario ) {
            return "Usuario ou senha incorreta!"
        }

        const verifica = await bcrypt.compare( String(senha), usuario.password)

        if ( !verifica ) {
            return "Usuario ou senha incorreta!"
        }

        return {
            mensagem: "Logado com Sucesso!",
            nome: usuario.name,
            telefone: usuario.phone,
            id: usuario.id,
            email: usuario.mail
        }
    }


}


export default authController
