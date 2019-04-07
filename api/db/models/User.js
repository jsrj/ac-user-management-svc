const mongoose = require('mongoose')

// Consts
const Schema = mongoose.Schema

const UserSchema = new Schema({

	userID: { type: String },
	username: { type: String },
	displayname: {
		type: String,
		default: 'not-set'
	},
	firstname: {
		type: String,
		default: 'not-set'
	},
	lastname: {
		type: String,
		default: 'not-set'
	},

	contactInfo: {
		email: {
			address: {
				type: String,
				default: 'not-set'
			},
			isVerified: {
				type: Boolean,
				default: false
			}
		},
		phone: { 
			number: {
				type: String,
				default: 'not-set'
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