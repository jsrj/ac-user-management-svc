const mongoose = require('mongoose')

// Create the connection
mongoose.connect(process.env.MONGODB_URI, {
	useNewUrlParser: true
})
.catch((err) => {
	console.log(err)
})

// Store the connection
const db = mongoose.connection

module.exports = db