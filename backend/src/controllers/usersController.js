const connection = require('../database/connetions')

module.exports = {

    async store(req, res) {
        const { username, password, name_user } = req.body

        if (!username || !password || !name_user) {

            return res.json({ error: "Existe campos vazios" })

        }

        const verifyUsername = await connection('users')
            .where('username', username)
            .select('username')
            .first()


        if (verifyUsername) {

            return res.json({ error: 'Username já existe' })

        } else {

            await connection('users').insert({
                name_user,
                username,
                password
            })

            return res.json({ success: `Usuário criado com sucesso, seu username: ${username} e a senha: ${password}` })
        }
    }

}