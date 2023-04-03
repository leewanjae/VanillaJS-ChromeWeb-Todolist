const images = ["0.jpg", "1.jpg", "2.jpg"]

const chosenImage = images[Math.floor(Math.random() * images.length)];

//JS에서 html element를 생성
const bgImage = document.createElement("img");

// html에서 <img src="img/0.jpg"/>하는 것과 같은 작업이다.
bgImage.src = `img/${chosenImage}`;

//body를 사용하기위해 body를 불러온다.
//appenChild()는 body에 html을 추가할 것이다.
//append는 가장 뒤에, prepend는 가장 위에 오게 한다.
document.body.appendChild(bgImage)