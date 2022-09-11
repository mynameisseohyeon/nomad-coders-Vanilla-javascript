/* const loginForm = document.querySelector("#login-form"); */
const loginInput = document.querySelector("#login-form input");
const loginForm = document.querySelector("#login-form");
/* const loginButton = document.querySelector("#login-form button"); */
const link = document.querySelector("a");
const greeting = document.querySelector("#greeting");

const HIIDDEN_CLASSNAME = "hidden";
/* string만 포함된 변수는 대문자로 표기, string을 저장하고 싶을 떄 사용 */
const USERNAME_KEY = "username";
/* 실수를 방지하고 싶다면 반복되는 string을 대문자 변수로 저장 */

function onLoginSubmit(event) {
    /* const username = logInput.value; */
/*     if (username === "") {
        alert ("Please write your name.");
    }else if (username.length > 15) {
        alert ("Your name is too long!");
    } */
    event.preventDefault();   
    loginForm.classList.add(HIIDDEN_CLASSNAME);
    const username = loginInput.value;
    localStorage.setItem(USERNAME_KEY,username);
/*     greeting.innerText = "Hello " + username; 아래와 동일 ``사용 변수는 ${}안에 넣어준다*/
    paintGreeting(username);
}
/*form을 submit하면 브라우저는 기본적으로 페이지를 새로고침 하도록 되어있다.
preventDefault() 함수를 추가함으로써 브라우저의 기본 동작을 막을 수 있다!!*/

/* function handleLinkClick(event) {
    event.preventDefault();
    console.log(event);
    alert("click!!!");
} */

/* loginButton.addEventListener("click", handleLoginButtonClick); */
/* link.addEventListener("click",handleLinkClick); */

function paintGreeting(username) {
    greeting.innerText = `Hello ${username}`;
    greeting.classList.remove(HIIDDEN_CLASSNAME); /* hidden 제거 / 글자가 나타남 */
}

const savedUsername = localStorage.getItem(USERNAME_KEY);
/* localStorage 정보를 저장하고 삭제하고 불러오는 브라우저가 가지는 작은 DB 같은 API */

if (savedUsername === null) {
    loginForm.classList.remove(HIIDDEN_CLASSNAME);//show the form
    loginForm.addEventListener("submit", onLoginSubmit);
}else {
    paintGreeting(savedUsername);//show the gretting
}