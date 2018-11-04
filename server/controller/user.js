const express = require('express')
const model = require('../db/db.js')
const router = express.Router()
const moment = require('moment')
const objectIdToTimestamp = require('objectid-to-timestamp')
const createToken = require('../middleware/createToken.js')
const sha1 = require('sha1')
const checkToken = require('../middleware/checkToken.js')

const Register = (req, res) => {
	let userRegister = new model.User({
		email: req.body.email,
		password: sha1(req.body.password),
		recheck: req.body.recheck,
		token: createToken(this.email)
	})

	// objectid
	userRegister.create_time = moment(objectIdToTimestamp(userRegister._id))
		.format('YYYY-MM-DD HH:mm:ss');

	model.User.findOne({
		email: (userRegister.email)
			.toLowerCase()
	}, (err, doc) => {
		if(err) console.log(err)
		if(doc) {
			res.json({
				success: false
			})
		} else {
			userRegister.save(err => {
				if(err) console.log(err)
				console.log('register success')
				res.json({
					success: true
				})
			})
		}
	})
}

const Login = (req, res) => {
	let userLogin = new model.User({
		email: req.body.email,
		password: sha1(req.body.password),
		token: createToken(this.email)
	})
	model.User.findOne({ email: userLogin.email }, (err, doc) => {
		if(err) console.log(err)
		if(!doc) {
			res.json({
				info: false
			})
		} else if(userLogin.password === doc.password) {
			var name = req.body.email;
			res.json({
				success: true,
				email: doc.email,
				time: moment(objectIdToTimestamp(doc._id))
					.format('YYYY-MM-DD HH:mm:ss'),
				token: createToken(name)
			})
		} else {
			res.json({
				success: false
			})
		}
	})
}

// User
const User = (req, res) => {
	model.User.find({}, (err, doc) => {
		if(err) console.log(err)
		res.send(doc)
	})
}

// Delete User
const delUser = (req, res) => {
	model.User.findOneAndRemove({ _id: req.body.id }, err => {
		if(err) console.log(err)
		res.json({
			success: true
		})
	})
}

module.exports = (router) => {
	router.post('/register', Register),
		router.post('/login', Login),
		router.get('/user', checkToken, User),
		router.post('/delUser', checkToken, delUser)
}
