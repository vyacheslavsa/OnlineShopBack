const UserModel = require("../models/User");
const bcrypt = require("bcrypt");
const tokenService = require('./token-service')
const UserDto = require('../dtos/user-dto')
const ApiError = require('../exceptions/api-error')

class UserService {
    async registration(login, password) {
        const candidate = await UserModel.findOne({login})
        if (candidate) {
            throw new ApiError.BadRequest(`Логин ${login} уже существует`)
        }
        const hashPass = await bcrypt.hash(password, 1)
        const user = await UserModel.create({login: login, passHash: hashPass});
        const userDto = new UserDto(user)
        const tokens = tokenService.generateToken({...userDto})
        await tokenService.saveToken(userDto.id, tokens.refreshToken)

        return {
            ...tokens,
            user: userDto
        }
    }
}

module.exports = new UserService()