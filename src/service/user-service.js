const UserModel = require("../models/User");
const bcrypt = require("bcrypt");
const tokenService = require('./token-service')
const UserDto = require('../dtos/user-dto')
const ApiError = require('../exceptions/api-error')

class UserService {
    async registration(login, password) {
        const candidate = await UserModel.findOne({login})
        if (candidate) {
            throw ApiError.BadRequest(`Логин ${login} уже существует`)
        }
        const hashPass = await bcrypt.hash(password, 1)
        const user = await UserModel.create({login: login, passHash: hashPass});
        const userDto = new UserDto(user)
        const tokens = tokenService.generateToken({...userDto})
        await tokenService.saveToken(userDto.id, tokens.refreshToken)
        return {...tokens, user: userDto}
    }

    async login(login, password){

        const user = await UserModel.findOne({login})
        if(!user) {
            throw ApiError.BadRequest('Пользователь с таким логином не найден')
        }
        const isPasswordEquals = await bcrypt.compare(password, user.passHash)
        if(!isPasswordEquals){
            throw ApiError.BadRequest('Неверный пароль')
        }
        const userDto = new UserDto(user);
        const tokens = tokenService.generateToken({...userDto})
        await tokenService.saveToken(userDto.id, tokens.refreshToken)
        return {...tokens, user: userDto}
    }
    async logout (refreshToken){
        const token = await tokenService.removeToken(refreshToken)
        return token;
    }
    async refresh (refreshToken){
        if(!refreshToken){
            throw ApiError.UnauthorizedError();
        }
        const userData = await tokenService.validateRefreshToken(refreshToken);
        const tokenFromDB = await tokenService.findToken(refreshToken);
        console.log(tokenFromDB, 'tokenFromDB')
        if (!userData || !tokenFromDB){
            throw ApiError.UnauthorizedError();
        }

        const user = await UserModel.findById(userData.id)
        const userDto = new UserDto(user);
        const tokens = tokenService.generateToken({...userDto})
        await tokenService.saveToken(userDto.id, tokens.refreshToken)
        return {...tokens, user: userDto}
    }
}

module.exports = new UserService()