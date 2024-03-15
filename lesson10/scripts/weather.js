const currentLatLon = "33.21488591565309, -117.25698551472084";
const templateUrl = "https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={API key}";
const teirGermanyLatLon = "lat=49.74857868287353&lon=6.63675375527681"
const apiKey = "appid=88d936f317287eee62e27fd9b0035641";

const currentTemp = document.querySelector("#current-temp");
const weatherIcon = document.querySelector("#weather-icon");
const captionDesc = document.querySelector("figcaption");

const url = `https://api.openweathermap.org/data/2.5/weather?lat=49.74857868287353&lon=6.63675375527681&units=imperial&appid=88d936f317287eee62e27fd9b0035641`;

async function apiFetch() {
    try {
        const response = await fetch(url);
        if (response.ok) {
            const data = await response.json();
            displayResults(data);
        } else {
            throw Error (await response.text());
        }
    } catch (error) {
        console.log(error);
    }
}



function displayResults(data) {
    currentTemp.innerHTML = `${data.main.temp}&deg;F`;
    const iconsrc = `https://openweathermap.org/img/w/${data.weather[0].icon}.png`;
    let desc = data.weather[0].description;
    weatherIcon.setAttribute("src", iconsrc);
    weatherIcon.setAttribute("alt", "Tier Temp here:");
    captionDesc.textContent = `${desc.toUpperCase()}`;
}



apiFetch();