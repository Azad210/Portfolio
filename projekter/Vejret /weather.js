fetch('weather.json')
    .then(getWeatherData)
    .then(displayWeatherDropdown)
    .catch(error => console.error);

function getWeatherData(response) {
    if (!response.ok) {
        throw new Error;
    }
    return response.json();
}

function displayWeatherDropdown(weatherData) {
    const dropdownContainer = document.getElementById('weather-dropdown-container');

    
    const selectElement = document.createElement('select');
    selectElement.id = 'weather-select';
    selectElement.addEventListener('change', function() {
        displayWeatherInfo(weatherData, this.value);
    });

    
    const defaultOption = document.createElement('option');
    defaultOption.text = 'Vælg en dato';
    defaultOption.value = '';
    selectElement.appendChild(defaultOption);

    weatherData.forEach((day, index) => {
        const option = document.createElement('option');
        option.text = day.date;
        option.value = index; 
        selectElement.appendChild(option);
    });

    dropdownContainer.appendChild(selectElement);
}

function displayWeatherInfo(weatherData, selectedIndex) {
    const weatherInfoDiv = document.getElementById('weather-info');

    
    if (selectedIndex === '') {
        weatherInfoDiv.innerHTML = '';
        return;
    }

    const selectedDay = weatherData[selectedIndex];
    weatherInfoDiv.innerHTML = `
        <p>
            Dato: ${selectedDay.date}<br>
            Høj: ${selectedDay.temperature.high}°C<br>
            Lav: ${selectedDay.temperature.low}°C<br>
            Forhold: ${selectedDay.conditions}<br>
            Nedbør: ${selectedDay.precipitation}
        </p>
    `;
}
