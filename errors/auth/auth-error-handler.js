const AuthError = require('./AuthError')

const authErrorHandler = (error, request, response, next) => {
	if (error instanceof AuthError) {
		return response.status(error.code).json(error)
	}

	response.status(500).json('something went wrong')
}

module.exports = authErrorHandler
