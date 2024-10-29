let apikey = "aff21841344490e5c6282ad8239b87ec";
let apiURL = "https://api.openweathermap.org/data/2.5/weather?";
let city;
let userCity = document.getElementById("userText");
let temperature = document.getElementById("temp");
let ct = document.getElementById("city");
let humidity = document.getElementById("humditiy-info");
let windInfo = document.getElementById("wind-info");
let weatherImage = document.querySelector(".weather_img")

async function getWeatherData(){
    if (userCity.value==""){
        alert("Enter City Name")
    }
    else{
        city = userCity.value;
        let response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apikey}`);
        let data = await response.json();
        ct.innerHTML = data.name;
        temperature.innerHTML = Math.round(data.main.temp - 273.15)+"°C";
        humidity.innerHTML = data.main.humidity + "%";
        windInfo.innerHTML = data.wind.speed + "km/h";
        userCity.value="";

        if(data.weather[0].main=="Clear"){
            weatherImage.src = "/assets/clear.png";
        }
        else if(data.weather[0].main=="Snow"){
            weatherImage.src = "/assets/snow.png";
        }
        else if(data.weather[0].main=="Cloud"){
            weatherImage.src = "/assets/cloud.png";
        }
        else if(data.weather[0].main=="Drizzle"){
            weatherImage.src = "/assets/drizzle.jpg";
        }
        else if(data.weather[0].main=="Mist"){
            weatherImage.src = "/assets/mist.png";
        }
        else if(data.weather[0].main=="Rain"){
            weatherImage.src = "/assets/rain.png";
        }
        console.log(data)
    }
}
