
async function getWeatherData(e) {
    e.preventDefault();

    const cityName = $(`input[type="text"]`).val();
    const apiKey = '46bad53cdffa152d015bbe28e8a9a867';
    
    const url = `http://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=imperial&appid=${apiKey}`;
    

    //required name it what you want but needed
    const response = await fetch(url);
    //required same as above ^
    const data = await response.json();

    console.log(data);

    $('#city').html(data.name);
    $('#d-scrip').html(data.weather[0].main);
    $('#temp').html(data.main.temp);
};

$('form').on('submit', getWeatherData);

async function weeklyForcast(e) {
    e.preventDefault();

    const cityName = $(`input[type="text"]`).val();

    const apiKey = '46bad53cdffa152d015bbe28e8a9a867';
   
    const url = `http://api.openweathermap.org/data/2.5/forecast?q=${cityName}&units=imperial&appid=${apiKey}`;
    
    //required name it what you want but needed
    const response = await fetch(url);
    //required same as above ^
    const data = await response.json();

    console.log(data);

    // $('#dayOne').html();
    // $('#dayTwo').html();
    // $('#dayThree').html();
    // $('#dayFour').html();
    // $('#dayFive').html();
}

weeklyForcast();
