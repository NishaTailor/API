const getWeather = async (cityName) => {
    let req = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=77f1ecee111a5652f3408b2face676d4&units=metric`)
    
    let res =await req.json()
    console.log(res);
    
}
getWeather("mumbai")