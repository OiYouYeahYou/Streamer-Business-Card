const yaml = require('js-yaml')
const fs = require('fs')

const config = yaml.safeLoad(fs.readFileSync('./config.yaml'))

const defaultUser = config.user
const title = config.title
const endpoint = `https://api.twitch.tv/kraken/streams`
const requestOpts = {
	headers: {
		'Client-ID': config.key,
	},
}
const links = config.links
const logo = config.logo

const SECOND = 1000
const MINUTES = 60 * SECOND
const recheckLimit = config.limit * MINUTES

module.exports = {
	defaultUser,
	endpoint,
	requestOpts,
	links,
	recheckLimit,
	title,
	logo,
}
