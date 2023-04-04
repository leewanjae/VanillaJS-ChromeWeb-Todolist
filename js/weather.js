// 날씨 정보와 도시 정보를 표시할 span 요소를 변수에 할당
const weather = document.querySelector("#weather span:first-child");
const city = document.querySelector("#weather span:last-child");
// OpenWeatherMap API 키를 변수에 할당
const API_KEY = "f6c7615cd02b191f3a0dc6db552e9abf"

// 위치 정보를 성공적으로 가져온 경우 실행될 함수
function onGeoOk(position) {
    // 사용자의 위치 좌표를 변수에 할당
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    // OpenWeatherMap API를 사용하여 현재 날씨 정보를 가져오기 위한 URL 생성
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
    // fetch 함수를 사용하여 URL에서 데이터 가져오기
    fetch(url)
    // JSON 데이터를 가져온 후 실행될 함수
    .then((response) => response.json())
    .then((data) => {
        // 가져온 데이터에서 도시 이름을 추출하여 화면에 출력
        city.innerText = data.name;
        // 가져온 데이터에서 날씨 정보와 온도를 추출하여 화면에 출력
        weather.innerText = `${data.weather[0].main} / ${data.main.temp}`;
    });
}

// 위치 정보를 가져오지 못한 경우 실행될 함수
function onGeoError() {
    // 알림 창을 통해 위치 정보를 찾을 수 없음을 사용자에게 알림
    alert("Can't find you. No weather for you.");
}

// 현재 위치 정보를 가져오기 위한 getCurrentPosition 함수 호출
// 위치 정보를 가져오기 위해서는 두 개의 콜백 함수를 매개 변수로 전달해야 함
// 첫 번째 콜백 함수(onGeoOk)는 위치 정보를 가져오는 데 성공했을 때 실행됨
// 두 번째 콜백 함수(onGeoError)는 위치 정보를 가져오는 데 실패했을 때 실행됨
navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);
