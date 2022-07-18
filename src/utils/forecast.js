const request = require('request')

const wcode = (latitude, longitude, callback) =>{
    const url ='http://api.weatherstack.com/current?access_key=2a73e349a1e11d5767527bf1dae8b292/' + latitude + ',' + longitude + '&units=f'
    request({ url: url, json:true}, (error, response) => {
        if(error){
            callback('Unable to connect to weather service!',undefined)
        }else if(response.body.error){
            
            callback('Unable to find location',undefined)
        }
        else{
            callback(undefined,
                response.body.daily.data[0].summary+' It is currently ' + response.body.current.weather_descriptions[0]+' and the precip is '+ response.body.current.precip)
        }
       // const data = JSON.parse(response.body)
       // console.log('The degree is '+response.body.current.weather_descriptions[0]+' and the precip is '+ response.body.current.precip)
    })
}

module.exports = wcode

