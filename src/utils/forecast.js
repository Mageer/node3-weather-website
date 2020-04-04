const request = require('request')

const forecast = (longitude, latitude, callback) => {
    const url ='https://api.darksky.net/forecast/658e42795dac9b64dad84787e2f598ce/' + encodeURIComponent(latitude) + ',' + encodeURIComponent(longitude) + '?units=si'
    
    request({url, json: true}, (error, {body}) => {
        if (error) {
            callback('Unable to connect to weather service!', undefined)
        } else if (body.error){
            callback('Unable to find locaton!', undefined)
        } else {
            callback(undefined, body.daily.data[0].summary 
                + ' It is currently ' + body.currently.temperature + ' degrees out,'
                + ' with real-feel of ' + body.currently.apparentTemperature + ' degrees.' 
                + ' There is a ' + body.currently.precipProbability + '% chance of rain.')
        }
    })
}

module.exports = forecast
