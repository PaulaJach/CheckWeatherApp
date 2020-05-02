const searchWeatherButton = document.querySelector('#searchWeatcher');

searchWeatherButton.addEventListener('click', (e) => {
    const searchCity = document.querySelector('#city');
    const cityName = searchCity.value;
    e.preventDefault();
    const searchWeather = () => {
        let weatherBox = document.querySelector('#weather');
        let countryName = document.querySelector('#country');
        let weatherDetails = document.querySelector('#weatherDescription');
        let temperature = document.querySelector('#weatherTemperature');
        const apiKey = '7060ee9b041b9b36a67d9bc06873b71b';
        const url = `http://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=metric&appid=${apiKey}`;
    
        if (cityName.length === 0) {
            return alert('Please enter a City Name!');
        };
    
        fetch(url, {
            method: 'GET',
            headers: {
                "Accept": "application.json"
            }
        })
        .then(response => response.json())
        .then(data => {
            if(data.length !== 0) {
                searchedCity = cityName;
                countryName = data.sys.country;
                weatherDetails = data.weather[0].description.toUpperCase();
                temperature = data.main.temp;
                updateWeather(weatherBox);
            }
            else {
                alert('Something went wrong');
            } 
        });
        
        const updateWeather = () => {
            weatherBox.classList.remove('hide');
            weatherCity.innerHTML = cityName;
            country.innerHTML = `Country: ${countryName}`;
            weatherDescription.innerHTML = `Current weather: ${weatherDetails}`;
            weatherTemperature.innerHTML = `Temperature: ${temperature} \xB0C`;
            
            const convertBtn = document.querySelector('#convertTemp');

            convertBtn.addEventListener('click', (e) => {
                e.preventDefault();
                const convertTemperature = () => {
                    let convertTempToFahrenheit = (temperature * 9 / 5 + 32).toFixed(2);
                    let showConvertedTemp = document.querySelector('#converted');
                    showConvertedTemp.innerHTML = `Temperature: ${convertTempToFahrenheit} \xB0F`;  
                }
                convertTemperature();   
            });  
        }; 
    };
    searchWeather();
});

