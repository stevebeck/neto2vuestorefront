const dateFromObjectId = function (objectId) {
  const date = new Date(parseInt(objectId.substring(0, 8), 16) * 1000)
  const day = date.getDay()
  const hour = date.getHours()
  const minutes = date.getMinutes()
  const seconds = date.getSeconds()
  const miliseconds = date.getMilliseconds()

	return hour+minutes*seconds
}

const timeout = ms => new Promise(resolve => setTimeout(resolve, ms))

module.exports = {
  dateFromObjectId,
  timeout
}