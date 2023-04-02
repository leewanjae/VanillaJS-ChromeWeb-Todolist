// Date Object
// new Date(); // 오늘의 날짜와 시간을 가지고 온다.

// const date = new Date();
// date.getDate(); // 일
// date.getDay(); // 요일
// date.getFullYear(); // 년
// date.getHours(); // 시
// date.getMinutes(); // 분
// date.getSeconds(); // 초

const clock = document.querySelector("h2#clock");

function getClock() {
    const date = new Date();
    //number이기 때문에 String으로 변환해서 padStart()사용해야된다.
    const hours = String(date.getHours()).padStart(2, "0");
    const minutes = String(date.getMinutes()).padStart(2, "0");
    const seconds = String(date.getSeconds()).padStart(2, "0");
    clock.innerText = `${hours}:${minutes}:${seconds}`;
  }
  
  // setInterval은 1000ms후에 시작되니 새로고침 하자마자 시간이 보이도록 함수를 호출!
  getClock(); 
  setInterval(getClock, 1000);

  // padStart() => "1".padStart(2, "0");
  // padStart()를 사용해 padding을 String부분에 추가.
  // String이 가져야 하는 길이를 설정하고 그렇지 않다면 String의 앞쪽에 추가.
  // 길이가 2가 되지 않으면 시작하는 부분에서 부터 0추가
  // 1.padEnd(2, "0"); => 길이가 2가 되지 않으면 뒷부분에 0추가
  
