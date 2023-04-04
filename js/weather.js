const weather = document.querySelector("#weather span:first-child");
const city = document.querySelector("#weather span:last-child");
const API_KEY = "f6c7615cd02b191f3a0dc6db552e9abf"

function onGeoOk(position) {
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    //weather API
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
    fetch(url)
    .then((response) => response.json())
    .then((data) => {
        city.innerText = data.name;
        weather.innerText = `${data.weather[0].main} / ${data.main.temp}`;
    });
}
function onGeoError() {
    alert("Can't find you. No weather for you.");
}

// 브라우저에서 위치 좌표를 준다. wifi. gps...
// 두개의 argument가 필요하다. 한 개는 모든 게 잘 됐을 때 실행 될 함수.
// 또 하나는 에러가 발생했을 때 실행 될 함수.
navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);