function attachEvents() {
    const btn = document.getElementById('submit');
    btn.addEventListener("click", getWeather)
    const usrlocation = document.getElementById('location');
    const forecast = document.getElementById("forecast");
    const current = document.getElementById("current");
    const upcoming = document.getElementById("upcoming");

    const url = 'http://localhost:3030/jsonstore/forecaster/locations';
    const todayUrl = 'http://localhost:3030/jsonstore/forecaster/today/';
    const upcomingUrl = 'http://localhost:3030/jsonstore/forecaster/upcoming/';

    async function getWeather(event) {
        try {
            const usrInput = usrlocation.value;
            forecast.style.display = 'block';
            const locationResponse = await fetch(url);
            const locationData = await locationResponse.json();
            const curLocationData = locationData.find(x => x.name === usrInput);
            await fillTodayData(curLocationData.code);
            await fillUpcomingData(curLocationData.code);
        } catch (error) {
            forecast.textContent = 'Error';
        }

    }

    async function fillTodayData(code) {
        const response = await fetch(todayUrl + code);
        const data = await response.json();
        debugger
        const todayInfo = createForecastToday(data);

        current.appendChild(todayInfo);
    }

    async function fillUpcomingData(code) {
        const response = await fetch(upcomingUrl + code);
        const data = await response.json();

        const upcomingInfo = createForecastUpcoming(data);
        upcoming.appendChild(upcomingInfo);

    }

    function createForecastUpcoming(data) {
        const container = document.createElement('div');
        container.classList.add('forecast-info');

        const upcoming1 = generateSpan('upcoming', 'symbol', data.name, data.forecast[0]);
        const upcoming2 = generateSpan('upcoming', 'symbol', data.name, data.forecast[1]);
        const upcoming3 = generateSpan('upcoming', 'symbol', data.name, data.forecast[2]);

        container.appendChild(upcoming1);
        container.appendChild(upcoming2);
        container.appendChild(upcoming3);

        return container;
    }

    function generateSpan(classContainer, classSpan, name, data) {
        const spanContainer = document.createElement('span');
        spanContainer.classList.add(classContainer);

        const spanName = document.createElement('span');
        spanName.classList.add(classSpan);
        classSpan === 'symbol' ? spanName.innerHTML = findSymbol(data.condition) : spanName.textContent = name;

        
        const degree = document.createElement('span');
        degree.classList.add("forecast-data");
        degree.innerHTML = `${data.low + findSymbol("Degrees")}/${data.high + findSymbol("Degrees")}`;

        const condition = document.createElement('span');
        condition.classList.add("forecast-data");
        condition.textContent = data.condition;

        spanContainer.appendChild(spanName);
        spanContainer.appendChild(degree);
        spanContainer.appendChild(condition);

        return spanContainer;
    }

    function createForecastToday(data) {
        const container = document.createElement("div");
        container.classList.add('forecasts');
        const conditionSpan = document.createElement('span');
        conditionSpan.classList.add('condition');
        conditionSpan.classList.add('symbol');
        conditionSpan.innerHTML = findSymbol(data.forecast.condition);

        container.appendChild(conditionSpan);
        const spanContainer = generateSpan('condition', 'forecast-data', data.name, data.forecast);



        container.appendChild(spanContainer);

        return container;
    }

    function findSymbol(condition) {
        switch (condition) {
            case "Sunny": return '&#x2600';
            case "Partly sunny": return '&#x26C5';
            case "Overcast": return '&#x2601';
            case "Rain": return '&#x2614';
            case "Degrees": return '&#176';
            default: return condition;
        }
    }
}

attachEvents();