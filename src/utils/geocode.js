const request = require('request')

const geocode = (address, callback) => {
    const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/' + address + '.json?access_token=pk.eyJ1IjoiY2hkaW9ycG9pc29uIiwiYSI6ImNsNTd1c3NkbzA1MHMzaW1qY3hoenUwdmYifQ.6MeMp329wTNVw50TlVGFRg'
    
    request({url, json:true},(error, response) =>{
       // console.log(response.body.features[0].center[1])
        if(error){
            callback('Unable to connect to location services!', undefined)
        }else if(typeof response.body.features == "undefined"){
            callback('Unable to find location. Try another search.',undefined)
        }else{
            callback(undefined, {
                latitude: response.body.features[0].center[1],
                longitude: response.body.features[0].center[0],
                location: response.body.features[0].place_name
            })
        }
    })

}

module.exports = geocode