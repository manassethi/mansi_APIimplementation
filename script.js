
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'b90f20d782msh3b215f1d3561dacp1db102jsn71bbffa18a47',
		'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
	}
};

const getWeather=(city)=>{
    
    cityname.innerHTML=city
    url = 'https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city='+city;

fetch(url,options)
.then(response => response.json())
.then(response => 
    {
        
        
        console.log(response)

        
temp.innerHTML=response.temp
temp2.innerHTML=response.temp
humidity2.innerHTML=response.humidity
wind_speed2.innerHTML=response.wind_speed

cloud_pct.innerHTML= response.cloud_pct
temp.innerHTML= response.temp
feels_like.innerHTML= response.feels_like
humidity.innerHTML= response.humidity
min_temp.innerHTML= response.min_temp
max_temp.innerHTML= response.max_temp
wind_speed.innerHTML= response.wind_speed
wind_degrees.innerHTML= response.wind_degrees
sunrise.innerHTML= response.sunrise
sunset.innerHTML= response.sunset

    
    })
.catch(err => console.error(err));
}

submit.addEventListener("click",(e)=>{
    e.preventDefault()
    getWeather(city.value)
}
)

getWeather("Delhi")
