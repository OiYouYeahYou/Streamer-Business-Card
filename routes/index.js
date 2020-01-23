const request = require('request')
const router = (module.exports = require('express').Router())

const {
	defaultUser,
	endpoint,
	requestOpts,
	links,
	title,
	recheckLimit,
	logo,
} = require('../config.js')
const { cbHandler } = require('../util.js')

const cache = {}

router.get('/', index)

function index(req, res) {
	const user = req.query.user || defaultUser

	myFunc(user, isLive =>
		res.render('index', { user, isLive, links, title, logo })
	)
}

myFunc()

function myFunc(user = defaultUser, cb) {
	const statusCache = cache[user]

	if (!statusCache || statusCache.timeLimit < Date.now())
		requestMaker(user, cb)
	else cbHandler(cb, statusCache.status)
}

function requestMaker(user, cb) {
	const target = `${endpoint}/${user}`

	request(target, requestOpts, (err, res, body) => {
		var data
		try {
			data = JSON.parse(body)
		} catch (e) {
			return cbHandler(cb, false)
		}
		const isLive = data.stream && data.stream.stream_type === 'live'

		cbHandler(cb, isLive)
		cacheUpdater(user, isLive)
	})
}

function cacheUpdater(user, status) {
	const timeLimit = Date.now() + recheckLimit

	cache[user] = { timeLimit, status }
}
