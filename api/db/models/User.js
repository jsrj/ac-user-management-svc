const mongoose = require('mongoose')

// Consts
const Schema = mongoose.Schema

/** -- Auth0 User Data Reference --
@param {object} user - The user being created
@param {string} user.id - user id
@param {string} user.tenant - Auth0 tenant name
@param {string} user.username - user name
@param {string} user.email - email
@param {boolean} user.emailVerified - is e-mail verified?
@param {string} user.phoneNumber - phone number
@param {boolean} user.phoneNumberVerified - is phone number verified?
@param {object} user.user_metadata - user metadata
@param {object} user.app_metadata - application metadata
@param {object} context - Auth0 connection and other context info
@param {string} context.requestLanguage - language of the client agent
@param {object} context.connection - information about the Auth0 connection
@param {object} context.connection.id - connection id
@param {object} context.connection.name - connection name
@param {object} context.connection.tenant - connection tenant
@param {object} context.webtask - webtask context
@param {function} cb - function (error, response)
*/

const UserSchema = new Schema({
	userID: { type: String },
	username: { type: String },
	contactInfo: {
		firstname: {
			type: String,
			default: 'anonymous'
		},
		lastName: {
			type: String,
			default: 'anonymous'
		},
		email: {
			address: {
				type: String,
				default: 'unknown'
			},
			isVerified: {
				type: Boolean,
				default: false
			}
		},
		phone: { 
			number: {
				type: String,
				default: '(000) 000-0000'
			},
			isVerified: {
				type: Boolean,
				default: false
			}
		}
	},
})


// Export model
module.exports = mongoose.model('users', UserSchema)