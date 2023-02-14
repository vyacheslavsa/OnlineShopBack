const userService = require('../../service/user-service')

class UserController {
    async registration(req, res, next) {
        try {

            const {login, password} = req.body
            const userData = await userService.registration(login, password)
            res.cookie('refreshToken', userData.refreshToken, {maxAge: 60 * 60, httpOnly: true})
            return res.json(userData)
        } catch (e) {
            next(e)
        }
    }
}

module.exports = new UserController()