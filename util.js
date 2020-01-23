const cbHandler = (c, ...p) => typeof c === 'function' && c(...p)

module.exports = {
	cbHandler,
}
