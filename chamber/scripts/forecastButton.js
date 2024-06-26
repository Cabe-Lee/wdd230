
async function displayForecast() {
    const apiKey = '88d936f317287eee62e27fd9b0035641';
    const apiUrl = 'https://api.openweathermap.org/data/2.5/forecast';
    const lat = '33.21488591565309';
    const lon = '-117.25698551472084';

    try {
        const response = await fetch(`${apiUrl}?lat=${lat}&lon=${lon}&units=imperial&cnt=3&appid=${apiKey}`);
        const data = await response.json();

        const forecastContainer = document.getElementById('forecastContent');
        forecastContainer.innerHTML = '';

        data.list.forEach(day => {
            const date = new Date(day.dt * 1000).toLocaleDateString('en-US', { weekday: 'long' });
            const temp = day.main.temp.toFixed(1);
            const condition = day.weather[0].description;

            const dayElement = document.createElement('p');
            dayElement.textContent = `${date}: ${condition}, ${temp}°F`;
            forecastContainer.appendChild(dayElement);
        });

        document.getElementById('forecastCard').style.display = 'block';
        forecastDisplayed = true;
    } catch (error) {
        console.error('Error fetching weather data:', error);
    }
}

function closeForecast() {
document.getElementById('forecastCard').style.display = 'none';
forecastDisplayed = false;
}