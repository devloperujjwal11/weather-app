//const url = 'https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=jaipur';
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'f56af13b2fmshf1f02ed46427358p11e3b8jsn5e1633ea1c0c',
		'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
	}
};

const getweather = (city) =>{
	cityname.innerHTML = city
	
	 fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city='+city, options)
      .then(response => response.json())
     .then(response => {console.log(response)
		
		cloud_pct.innerHTML = response.cloud_pct
		feels_like.innerHTML = response.feels_like
		humidity.innerHTML = response.humidity
		humidity1.innerHTML = response.humidity
		max_temp.innerHTML = response.max_temp
		min_temp.innerHTML = response.min_temp
		sunrise.innerHTML = response.sunrise
		sunset.innerHTML = response.sunset
		temp.innerHTML = response.temp
		temp1.innerHTML = response.temp
		//wind_degrees.innerHTML = response.wind_degrees
		wind_speed.innerHTML = response.wind_speed
		wind_speed1.innerHTML = response.wind_speed
		 

	 
	 }
	 )
     .catch(err => console.error(err));
	}
	submit.addEventListener("click", (e)=>{
		e.preventDefault()
		getweather(city.value)
	})

	function downweather(){
		fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=kolkata', options)
		.then(response => response.json())
	   .then(response => {console.log(response)
		  
		  cloud_pct.innerHTML = response.cloud_pct
		  feels_like.innerHTML = response.feels_like
		  humidity.innerHTML = response.humidity
		  humidity1.innerHTML = response.humidity
		  max_temp.innerHTML = response.max_temp
		  min_temp.innerHTML = response.min_temp
		  sunrise.innerHTML = response.sunrise
		  sunset.innerHTML = response.sunset
		  temp.innerHTML = response.temp
		  temp1.innerHTML = response.temp
		  //wind_degrees.innerHTML = response.wind_degrees
		  wind_speed.innerHTML = response.wind_speed
		  wind_speed1.innerHTML = response.wind_speed
		   
	   }
	   
	   )
	
	   .catch(err => console.error(err));
	  }
	document.getElementById("kolkata").downweather();
	
	

 