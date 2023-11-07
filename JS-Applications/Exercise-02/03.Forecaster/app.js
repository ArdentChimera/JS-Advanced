function attachEvents() {
    const locationInput = document.getElementById('location');
    const getBtn = document.getElementById('submit');

    getBtn.addEventListener('click', () => {
        const data = getLocations();
        data.then(response => {
            console.log(response);

            let locationCode = '';

            for (const key in response) {
                if (response[key].name === locationInput.value) {
                    locationCode = response[key].code;

                    const currentForecastContainer = document.getElementById('forecast');
                    currentForecastContainer.style.display = 'block';

                    const currentForecastData = getCurrentForecast(locationCode);
                    currentForecastData.then(response => {
                        console.log(response);

                        const currentForecastContainer = document.getElementById('current');
                        const forcastElement = document.createElement('div');
                        const forecastSymbolSpan = document.createElement('span');
                        const conditionSpan = document.createElement('span');
                        const nameSpan = document.createElement('span');
                        const degreesSpan = document.createElement('span');
                        const forecastStringSpan = document.createElement('span');

                        let degreesSymbol = '&#176';
                        let forecastSymbol = '';
                        switch(response["forecast"].condition) {
                            case 'Sunny':
                                forecastSymbol = '&#x2600';
                            break;
                            case 'Partly sunny':
                                forecastSymbol = '&#x26C5';
                            break;
                            case 'Overcast':
                                forecastSymbol = '&#x2601'
                            break;
                            case 'Rain':
                                forecastSymbol = '&#x2614';
                            break;
                        }

                        forecastSymbolSpan.innerHTML = `${forecastSymbol}`;
                        forecastSymbolSpan.className = 'condition symbol';
                        forcastElement.className = 'forecasts';
                        forcastElement.appendChild(forecastSymbolSpan);
                        currentForecastContainer.appendChild(forcastElement);

                        conditionSpan.className = 'condition';
                        nameSpan.className = 'forecast-data';
                        degreesSpan.className = 'forecast-data';
                        forecastStringSpan.className = 'forecast-data';
                        nameSpan.innerHTML = `${response.name}`;
                        degreesSpan.innerHTML = `${response["forecast"].low}${degreesSymbol}/${response["forecast"].high}${degreesSymbol}`;
                        forecastStringSpan.innerHTML = `${response["forecast"].condition}`;
                        conditionSpan.appendChild(nameSpan);
                        conditionSpan.appendChild(degreesSpan);
                        conditionSpan.appendChild(forecastStringSpan);
                        forcastElement.appendChild(conditionSpan);
                        currentForecastContainer.appendChild(forcastElement);

                    })

                    const upcomingForecastData = getUpcomingForecast(locationCode);
                    upcomingForecastData.then(response => {
                        console.log(response);

                        const upcomingForecastContainer = document.getElementById('upcoming');
                        const upcomingForecastInfoContainer = document.createElement('div');
                        


                        for (const el of response.forecast) {
                            const upcomingSpan = document.createElement('span');
                            const forecastSymbolSpan = document.createElement('span');
                            const forecastStringSpan = document.createElement('span');
                            const degreesSpan = document.createElement('span');

                            let degreesSymbol = '&#176';
                            let forecastSymbol = '';
                            switch(el.condition) {
                                case 'Sunny':
                                    forecastSymbol = '&#x2600';
                                break;
                                case 'Partly sunny':
                                    forecastSymbol = '&#x26C5';
                                break;
                                case 'Overcast':
                                    forecastSymbol = '&#x2601'
                                break;
                                case 'Rain':
                                    forecastSymbol = '&#x2614';
                                break;
                            }

                            forecastSymbolSpan.innerHTML = `${forecastSymbol}`;
                            forecastSymbolSpan.className = 'symbol';
                            degreesSpan.innerHTML = `${el.low}${degreesSymbol}/${el.high}${degreesSymbol}`;
                            degreesSpan.className = 'forecast-data';
                            forecastStringSpan.innerHTML = `${el.condition}`;
                            forecastStringSpan.className = 'forecast-data';

                            upcomingSpan.className = 'upcoming';
                            upcomingSpan.appendChild(forecastSymbolSpan);
                            upcomingSpan.appendChild(degreesSpan);
                            upcomingSpan.appendChild(forecastStringSpan);
                            upcomingForecastInfoContainer.className = 'forecast-info'
                            upcomingForecastInfoContainer.appendChild(upcomingSpan);
                            upcomingForecastContainer.appendChild(upcomingForecastInfoContainer);
                        }
                    })
                }
            }
        })
    });
}

attachEvents();


async function getLocations() {
    try {
        const response = await fetch(`http://localhost:3030/jsonstore/forecaster/locations`)
        const locationData = await response.json();

        return locationData;
    } catch (error) {
        console.log(error);
    }
}

async function getCurrentForecast(code) {
    try {
        const response = await fetch(`http://localhost:3030/jsonstore/forecaster/today/${code}`)
        const data = await response.json();

        return data;   
    } catch (error) {
        console.log(error);
    }
};

async function getUpcomingForecast(code) {
    try {
        const response = await fetch(`http://localhost:3030/jsonstore/forecaster/upcoming/${code}`)
        const data = await response.json();

        return data;   
    } catch (error) {
        console.log(error);
    }
}