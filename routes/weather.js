const express = require('express'); 
const router = express.Router(); 
const fetch = require('node-fetch');
 
//router.use(express.json());
const handleApiRequest = (query) => {
    return fetch(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${query}?unitGroup=us&key=${process.env.WEATHERAPIKEY}&contentType=json`)
      .then(response => { 
        return response.json()
      })
      .then(response =>{
        return response
      })
}

router.get('/request', async function (req, res){
    const apireturn = await handleApiRequest(req.query.queryWeather)
    const daystoreturn = []
    for (let day in apireturn.days){
      daystoreturn.push(
        {
          datetime: apireturn.days[day].datetime,
          temp: apireturn.days[day].temp,
          icon: apireturn.days[day].icon,
          description: apireturn.days[day].description,
          address: apireturn.resolvedAddress,
        }
      )
    }
    //console.log(apireturn)
    res.send(daystoreturn)
})

module.exports = router