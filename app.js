const express = require('express')
const path = require('path')
const favicon = require('serve-favicon')
const logger = require('morgan')
const cookieParser = require('cookie-parser')
const bodyParser = require('body-parser')
const exphbs = require('express-handlebars')
const simpleIcons = require('simple-icons')

const routes = require('./routes/index')

const app = (module.exports = express())
app.locals.ENV = process.env.NODE_ENV || 'development'
app.locals.ENV_DEVELOPMENT = app.locals.ENV == 'development'

app.engine(
	'handlebars',
	exphbs({
		defaultLayout: 'main',
		partialsDir: ['views/partials/'],
	})
)
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'handlebars')

// app.use(favicon(__dirname + '/public/img/favicon.ico'));
app.use(logger('dev'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(cookieParser())
app.use(express.static(path.join(__dirname, 'public')))

app.use('/svg/:name.svg', (req, res) => {
	const icon = simpleIcons[req.params.name]

	if (!icon) {
		return res.status(404).send()
	}

	res.status(200)
		.set('Content-Type', 'image/svg+xml')
		.send(icon.svg)
})
app.use('/', routes)
