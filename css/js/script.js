//async function named getWeatherData
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

    // console.log(dataWeather);

    $('#city').html(dataWeather.name);
    $('#d-scrip').html(dataWeather.weather[0].main);
    $('#temp').html(dataWeather.main.temp);
};

$('.cityWeather').on('submit', getWeatherData);

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
     $('#tempOne').html(dataForcast.list[0].main.temp);
     $('#dateOne').html(dataForcast.list[0].dt_txt);

     $('#dayTwo').html(dataForcast.list[8].weather[0].description);
     $('#tempTwo').html(dataForcast.list[8].main.temp);
     $('#dateTwo').html(dataForcast.list[8].dt_txt);

     $('#dayThree').html(dataForcast.list[16].weather[0].description);
     $('#tempThree').html(dataForcast.list[16].main.temp);
     $('#dateThree').html(dataForcast.list[16].dt_txt);
     
     $('#dayFour').html(dataForcast.list[24].weather[0].description);
     $('#tempFour').html(dataForcast.list[24].main.temp);
     $('#dateFour').html(dataForcast.list[24].dt_txt);

     $('#dayFive').html(dataForcast.list[32].weather[0].description);
     $('#tempFive').html(dataForcast.list[32].main.temp);
     $('#dateFive').html(dataForcast.list[32].dt_txt);

};

$('.cityWeather').on('submit', getWeeklyForcast);

const map = new ol.Map({
    target: 'map',
    layers: [
      new ol.layer.Tile({
        source: new ol.source.OSM()
      }),
    ],
    view: new ol.View({
      center: ol.proj.fromLonLat([-96.09, 38.71]),
      zoom: 3.7
    })
});

if ($('input').val() !== '') {
    map.center = ol.proj.fromLonLat([-96.09, 38.71])
}






