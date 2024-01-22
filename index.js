console.log("Welcome Rajesh");
console.log(10);

const form = document.getElementById("form");
const latitudeInput = document.getElementById("latitude");
const longitudeInput = document.getElementById("longitude");
const result = document.getElementById("result");
const aqiResult = document.getElementById("aqi");
const coResult = document.getElementById("co");
const no2Result = document.getElementById("no2");
const o3Result = document.getElementById("o3");
const pm2Result = document.getElementById("pm2.5");
const pm10Result = document.getElementById("pm10");
const cityName=document.getElementById("location");

form.addEventListener("submit", Clickhere())


function  Clickhere(event) {
    event.preventDefault();
    const latitude = latitudeInput.value;
    const longitude = longitudeInput.value;
    const url = `https://air-quality.p.rapidapi.com/history/airquality?lon=${longitude}&lat=${latitude}`;
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '692b2821f5mshf5f960cb0cd7962p14a6e0jsn198339bc4c54',
            'X-RapidAPI-Host': 'air-quality.p.rapidapi.com'
        }
    };
    ;
    fetch(url,options)
    .then(response=>response.json())
    .then(matter=>{
    
        let readings=matter.data[0];
        
        
        console.log(readings);
        aqiResult.textContent=readings.aqi;
        coResult.textContent=readings.co;
        no2Result.textContent=readings.n02;
        o3Result.textContent=readings.o3;
        pm2Result.textContent=readings.pm25;
        pm10Result.textContent=readings.pm10;
        cityName.textContent=matter.city_name;
        result.style.display="flex";

    })
};