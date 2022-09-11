
const API_KEY = "e13e61a33580133f3f1ab585702084a7";
const weather = document.querySelector("#weather span:first-child");
const city = document.querySelector("#weather span:last-child");

function onGeoOk(position) {
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}`
    fetch(url)
        .then(response => response.json()) /*json은 Network weather파일에서의 모든 array를 나타냄 */
        .then(data => {
            city.innerText = data.name;
            weather.innerText = `${data.weather[0].main} / ${data.main.temp}`;
        });
    /* fetch는 url을 부름 / 검사 Network에서 작동 확인 가능*/
}

function onGeoError() {
    alert("Cant't find you. No weather for you.")
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError)
/* browser에서 위치 좌표를 줌 
성공했을 때와 오류났을 때의 함수가 필요함*/
/* API 다른 서버와 이야기 할 수 있는 방법 */