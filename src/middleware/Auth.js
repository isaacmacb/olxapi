const users = require ('../models/user')


module.exports = {
    private: async (req, res, next) => {

        if(!req.query.token && !req.body.tokem) {
            res.json({notallowed : true})
            return;
        }

        let tokem = '';
        if (req.query.token) {
            token = req.query.token;
        }
        if(req.body.token) {
            token = req.body.token
        }

        if(token == ''){
            res.json({notallowed: true});
            return
        }

        const user = await User.findOne({token})

        if(!user) {
            res.json({notallowed : true}) 
                return;
        }

        next();
    }
}