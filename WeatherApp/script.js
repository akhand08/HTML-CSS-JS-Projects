

function kelvinToCelcius(kelvinVal) {
    return kelvinVal - 273;
}


let cityName = "Dhaka";


const apiKey = "75818b796ccee91a1a8330e4d36ad6f3";


document.querySelector(".search").addEventListener("submit", event => {
    event.preventDefault();
    cityName = document.querySelector("#searchInput").value;
    document.querySelector("#cityname").innerHTML = cityName;
    getData();
})

let mainTemp = document.querySelector("#temperature");
let feelsTemp = document.querySelector("#feels");
let maxTemp = document.querySelector("#max");
let minTemp = document.querySelector("#min");
let windSpeed = document.querySelector("#wind");
let description = document.querySelector("#description");
let allData;




function fetchData(cityName, apiKey) {
    // const api_url = `api.openweathermap.org/data/2.5/forecast?q=${cityName}&appid=${apiKey}`;
    const api_url = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}`;


    return fetch(api_url).then( response => {
        if(!response.ok) {
            throw new Error("This url is expired")
        }

        return response.json();
    }).catch(error => {
        console.log("Error: ", error);
    })

    
}


function updateUI() {
    feelsTemp.innerHTML = kelvinToCelcius(allData.main["feels_like"]).toFixed(2) + " Degree Celcius";
    maxTemp.innerHTML = kelvinToCelcius(allData.main["temp_max"]).toFixed(2) + " Degree Celcius";
    minTemp.innerHTML = kelvinToCelcius(allData.main["temp_min"]).toFixed(2) + " Degree Celcius";
    windSpeed.innerHTML = allData.wind["speed"].toFixed(2);
    description.innerHTML = allData.weather[0]["description"];
    mainTemp.innerHTML = kelvinToCelcius(allData.main["temp"]).toFixed(2) + " Degree Celcius"


}


async function getData() {
    
    try {
        allData = await fetchData(cityName, apiKey);
        updateUI();
        console.log(allData);
        console.log(allData.main["feels_like"])
        

    } catch (error) {
        console.log("Error: ", error);
    }
}


getData();











