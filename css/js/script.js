
async function getWeatherData(e) {
    e.preventDefault();
    e.stopPropagation();

    const cityNameWeather = $(`input[type="text"]`).val();
    const apiKey = '46bad53cdffa152d015bbe28e8a9a867';
    
    const urlWeather = `https://api.openweathermap.org/data/2.5/weather?q=${cityNameWeather}&units=imperial&appid=${apiKey}`;
    

    //required name it what you want but needed
    const responseWeather = await fetch(urlWeather);
    //required same as above ^
    const dataWeather = await responseWeather.json();

    console.log(dataWeather);

    $('#city').html(dataWeather.name);
    $('#d-scrip').html(dataWeather.weather[0].main);
    $('#temp').html(dataWeather.main.temp);
};


async function getWeeklyForcast(e) {
    e.preventDefault();
    e.stopPropagation();

    const cityNameForcast = $(`input[type="text"]`).val();
    const apiKey = '46bad53cdffa152d015bbe28e8a9a867';
   
    const urlForcast = `http://api.openweathermap.org/data/2.5/forecast?q=${cityNameForcast}&units=imperial&appid=${apiKey}`;
    
    //required name it what you want but needed
    const responseForcast = await fetch(urlForcast);
    //required same as above ^
    const dataForcast = await responseForcast.json();

    console.log(dataForcast);
    
     $('#dayOne').html(dataForcast.list[0].weather[0].description);
     $('#dayTwo').html(dataForcast.list[1].weather[0].description);
     $('#dayThree').html(dataForcast.list[2].weather[0].description);
     $('#dayFour').html(dataForcast.list[3].weather[0].description);
     $('#dayFive').html(dataForcast.list[4].weather[0].description);

}
$('.cityWeather').on('submit', getWeatherData);
$('.cityWeather').on('submit', getWeeklyForcast);
