const { validationResult, matchedData } = require('express-validator')
const User = require('../models/user')

module.exports = {

    sigin: async (req, res) => {


    },
    signup: async (req, res) => {
        const erros = validationResult(req);
        if (erros.isEmpty()) {
            res.json({ error: erros.mapped() });
            return;
        }
        const data = matchedData(req)
        console.log(data)
        const user = await User.findOne({
            email: data.email
        });
        if(user) {
            res.json({
                error : {email: {msg: 'E-mail já existe!'}}
            })
            return
        }

        res.json({ tudocerto: true, data })
    }
}