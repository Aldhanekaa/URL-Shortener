const AuthenticationFunctions = require('./authentication')
const inputValidation = require('./inputValidation');
module.exports = {
    inputValidation,
    ...AuthenticationFunctions
}