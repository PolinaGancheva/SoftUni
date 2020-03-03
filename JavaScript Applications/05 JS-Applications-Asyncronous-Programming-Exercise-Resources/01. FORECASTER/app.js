import {fetchRequest} from './fetch.js';

const elements = {
    submitButton: () => document.getElementById("submit"),
    locationName: () => document.getElementById("location"),
    forecastSection: () => document.getElementById("forecast"),
    currentForecast: () => document.getElementById("current"),
    upcomingForecast: () => document.getElementById("upcoming"),
    content: () => document.getElementById("content")
};

const symbols = {
    'Sunny':'☀',
    'Partly sunny':'⛅',
    'Overcast':'☁',
    'Rain':'☂',
    'degrees':'°'
}

function attachEvents() {
    elements.submitButton().addEventListener('click', getWeatherInfo)

   function getWeatherInfo(){
        const location = elements.locationName().value;
        fetchRequest().locationInfo()
            .then(locations => {
                const {code, name} = locations.find(o => o.name === location);
                return Promise.all([
                    fetchRequest().today(code),
                    fetchRequest().upcoming(code)
                ]);
            })
            .then(([today, upcoming]) => {
                generateWeatherInfo(today, upcoming)
            })
            .catch((e) => {
                const error = createDomElement('h1', [], 'ERROR')
                elements.content().appendChild(error)
            })
   }

   function generateWeatherInfo(today, upcoming){
        elements.forecastSection().style.display = 'block';

        const forecastDiv = createDomElement("div", ["forecasts"]);
        const symbolSpan = createDomElement("span", ["condition","symbol"],symbols[today.forecast.condition]);
        const conditionSpan = createDomElement("span", ["condition"]);
        const townSpan = createDomElement("span", ["forecast-data"], today.name);
        const temperatureSpan = createDomElement("span", ["forecast-data"], `${today.forecast.low}${symbols['degrees']}/${today.forecast.high}${symbols['degrees']}`);
        const weatherNameSpan = createDomElement("span", ["forecast-data"], today.forecast.condition);

        conditionSpan.append(townSpan, temperatureSpan, weatherNameSpan);
        forecastDiv.appendChild(symbolSpan);
        forecastDiv.appendChild(conditionSpan);
        elements.currentForecast().appendChild(forecastDiv);

        generateUpcomingInfo(upcoming)
   }

   function generateUpcomingInfo(upcoming){
        const forecastInfoDiv = createDomElement("div", ["forecast-info"]);
        upcoming.forecast.forEach((o) =>{
            const upcomingnSpan = createDomElement("span", ["upcoming"]);
            const symbolSpan = createDomElement("span", ["condition","symbol"],symbols[o.condition]);
            const temperatureSpan = createDomElement("span", ["forecast-data"], `${o.low}${symbols['degrees']}/${o.high}${symbols['degrees']}`);
            const weatherNameSpan = createDomElement("span", ["forecast-data"], o.condition);
            upcomingnSpan.append(symbolSpan,temperatureSpan, weatherNameSpan);
            forecastInfoDiv.appendChild(upcomingnSpan);
        })
        elements.upcomingForecast().appendChild(forecastInfoDiv);
   }

   function createDomElement(tagName, classNames, text) {
    const element = document.createElement(tagName);
    element.classList.add(...classNames);

    if (text) {
        element.textContent = text;
    }

    return element;
}
}

attachEvents();