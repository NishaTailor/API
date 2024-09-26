const getWeather = async (cityName) => {

        let req = await fetch(`https://api.openweathermap.org/data/2.5/weather?appid=b4c426c91009e3429c4af53c61fd6e9c&q=${cityName}&units=metric`);
        let res = await req.json()
        console.log(res);
        ui(res)
  };

// lat & lon
const getWeatherByLocation = async (lat, lon) => {
    try {
        let req = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=b4c426c91009e3429c4af53c61fd6e9c&units=metric`);
        let res = await req.json();
        console.log(res);
        ui(res);
    } catch (error) {
        console.error("Error fetching the weather data by location:", error);
    }
};


const ui = (data) => {
    const { name, main, weather, wind } = data;
    let temp = `
        <h2>Weather in ${name}</h2>
        <p>Temperature: ${main.temp}°C</p>
        <p>Condition: ${weather[0].description}</p>
        <p>Humidity: ${main.humidity}%</p>
        <p>Wind Speed: ${wind.speed} m/s</p>
        <p>Pressure: ${main.pressure} hPa</p>
    `;
    document.getElementById("container").innerHTML = temp;
};
const handleSubmit = (e) => {
    e.preventDefault();
    let cityName = document.getElementById("city").value;
    if (cityName.trim() === "") {
        alert("Please enter a city name");
    } else {
        getWeather(cityName);
    }
};


document.getElementById("form").addEventListener("submit", handleSubmit);

const getLocation = () => {
    navigator.geolocation.getCurrentPosition(position => {
        let lat = position.coords.latitude;
        let lon = position.coords.longitude;
        getWeatherByLocation(lat, lon);
    });
};
getLocation();
