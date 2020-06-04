const connection = require('../database/connetions')

module.exports = {

    async access(req, res) {
        const { username, password } = req.body

        const verifyUser = await connection('users')
            .select('id_user', 'username', 'name_user')
            .where({ 'username': username, 'password': password })
            .first()

        return !verifyUser
            ? res.status(401).json({ error: 'Usuário ou senha inválidos' })
            : res.json(verifyUser)
    }

}