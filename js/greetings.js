
const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

function onLoginSubmit(event) {
    // 1. event가 원래하는 행동을 멈춰준다. 브라우저의 기본 동작을 막아준다.(페이지 새로고침)
    // 2. form을 다시 숨겨준다.
    // 3. loginInput.value를 username이라는 변수로 저장
    // 4. username값을 username이라는 key와 함께 localStorage에 저장한다.
    // 5. paintGreetings함수를 호출한다.
    event.preventDefault();
    loginForm.classList.add(HIDDEN_CLASSNAME);
    const username = loginInput.value;
    localStorage.setItem(USERNAME_KEY, username)
    paintGreetings(username);
}

function paintGreetings(username){
    // 1. username이라는 인자를 하나 받고 있고 이 함수가 하는 일은 비어있는 hi요소 안에
    // `Hello ${username}`이라는 텍스트를 추가해준다.
    // 2. h1요소로부터 "hidden"이라는 클래스명을 제거한다. => h1에서 class="hidden" 삭제
    greeting.innerText = `Hello ${username}`;
    greeting.classList.remove(HIDDEN_CLASSNAME);
}

const savedUsername = localStorage.getItem(USERNAME_KEY);

if(savedUsername === null){
    // loginForm으로 부터 Hidden_CLASSNAME을 제거 => form에서 class="hidden" 삭제
    // 그러면 form이 표시된다.
    // 그 다음 loginForm에 addEventListener를 더하고, submit을 기다린다.
    // submit event가 발생하면 onLoginSubmit함수가 실행된다.
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    loginForm.addEventListener("submit", onLoginSubmit);
}else{
    paintGreetings(savedUsername);
}

//로그인 이전
// 1. form과 h1은 css에 있는 hidden이라는 class 때문에 숨겨져있다.
// 2. JS가 USERNAME_KEY를 가지고 localStorage를 확인.
// 3. 앱을 처음 실행했을 때, key와 value가 없다. if 조건식 null이 참. savedUsername == null
// => form에서 class ="hidden"삭제  => form이 표시되고 addEventListener가 form이 submit되기를 기다린다.
// => submit이 발생하면 onLoginSubmit 함수를 호출한다. JS가 함수를 호춣면서 인자를 주는데 그 인자에는 event에 관한 정보가 담겨있다.
// 4. onLoginSubmit에서는 hidden을 다시 더해주어 form을 숨기고, input의 값을 가져온다.
// 5. input 값을 username이라는 변수로 저장한 다음 그 변수값을 localStorage에 USERNAME_KEY와 함께 저장.
// 6. 그 다음 paintGreetings함수를 호출하는데 input값을 인자로 넣어준다.
// 7. input값을 받은 paintGreetings 함수는 h1에 "Hello 유저명"이라는 텍스트를 적어준다.
// 8. 그 다음 paintGreetings함수는 h1으로부터 "hidden"을 제거해서 h1을 화면에 띄운다.


// 로그인 이후
// 1. form이랑 h1 둘다 숨겨진 상태에서 시작.
// 2. 앱이 실행되면, localStorage에서 savedUsername을 얻으려한다. 
// => username이라는 key를 가지고 찾게 된다. localStorage에 username 저장
// 3. savedUsername은 != null이다. else 실행되어 paintGreetings실행
// paintGreetings함수가 localStorage에 저장된 값을 인자로 받게된다. 
// => paintGreetings는 화면에 텍스트가 출력되게 하는 것이 전부이다.



