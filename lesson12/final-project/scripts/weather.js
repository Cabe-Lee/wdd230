const currentLatLon = "20.435107335126173, -86.93117592973678";
const templateUrl = "https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={API key}";
const apiKey = "appid=88d936f317287eee62e27fd9b0035641";

const currentTemp = document.querySelector("#temp");
const humid = document.querySelector("#humid");
const next = document.querySelector("#next");
const clouds = document.querySelector("#clouds")
const captionDesc = document.querySelector("#description");
const weatherIcon = document.querySelector("#weatherIcon");

const url = `https://api.openweathermap.org/data/2.5/weather?lat=20.435107335126173&lon=-86.93117592973678&units=imperial&appid=88d936f317287eee62e27fd9b0035641`;

async function apiFetch() {
    try {
        const response = await fetch(url);
        if (response.ok) {
            const data = await response.json();
            displayResults(data);
            popUp(data)
        } else {
            throw Error (await response.text());
        }
    } catch (error) {
        console.log(error);
    }
}

apiFetch();



function displayResults(data) {
    currentTemp.innerHTML = `Temperature: ${data.main.temp}&deg;F`;

    humid.innerHTML = `Humidity: ${data.main.humidity}&deg;F`;

    let desc = data.weather[0].description;
    captionDesc.textContent = `Clouds: ${desc.toUpperCase()}`;
    
    const iconsrc = `https://openweathermap.org/img/w/${data.weather[0].icon}.png`;
    weatherIcon.setAttribute("src", iconsrc);
    weatherIcon.setAttribute("alt", "Tier Temp here:");

    const nextDayForcast = data.main.feels_like
    next.innerHTML = `Next Day Forecast: ${nextDayForcast}&deg;F`
}

function popUp(data) {
    alert("Max Temperature: " + data.main.temp_max + "°F");
}
