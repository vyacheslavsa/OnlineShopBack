const userService = require('../../service/user-service')
const {validationResult} = require("express-validator");
const ApiError = require('../../exceptions/api-error')

class UserController {
    async registration(req, res, next) {
        const {login, password} = req.body
        try {
            const errors = validationResult(req)
            if (!errors.isEmpty()) {
                return next(ApiError.BadRequest("Ошибка валидации", errors.array()))
            }
            const userData = await userService.registration(login, password)
            res.cookie('refreshToken', userData.refreshToken, {maxAge: 60 * 60, httpOnly: true})
            return res.json(userData)
        } catch (e) {
            next(e)
        }
    }

    async login(req, res, next) {
        try {
            const {login, password} = req.body
            const userData = await userService.login(login, password)
            res.cookie('refreshToken', userData.refreshToken, {maxAge: 60 * 60, httpOnly: true})
            return res.json(userData)
        } catch (e) {
            next(e)
        }
    }

    async logout(req, res, next){
        try {
            const {refreshToken} = req.cookies
            console.log(refreshToken)
            const token = await userService.logout(refreshToken)
            res.clearCookie('refreshToken')
            return res.json(token)
        } catch (e){
            next(e)
        }
    }

    async refresh(req, res, next){
        try {
            const {refreshToken} = req.cookies
            const token = await userService.refresh(refreshToken)
            res.clearCookie('refreshToken')
            return res.json(token)
        } catch (e){
            next(e)
        }
    }

    async create(req, res, next){
        try {
            return res.status(200).send({message: "заказ создан"})
        } catch (e){
            next(e)
        }
    }
}

module.exports = new UserController()