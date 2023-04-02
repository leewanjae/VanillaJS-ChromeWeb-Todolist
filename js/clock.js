// interval이란: 매번 일어나야 하는 무언가. ex)매 2초마다 ... 
// 이런 기능을 제공하는 tool이 setInterval(호출하려는 function, 매 호출 사이 시간)
const clock = document.querySelector("h2#clock");

function sayHello(){
    console.log("hello");
}

setInterval(sayHello, 5000);
// setTimeout(sayHello, 5000);



// setInterval vs setTimeout
// 1. setInterval: 지정된 주기로 특정 코드를 실행 vs setTimeout: 지정된 초가 지난 후 특정 코드를 1회 실행
// 2.중첩 setTimeout은 시간 지연 간격을 보장하지만 setInterval은 시간 지연을 보장하지 않습니다.