const toDoForm = document.getElementById("todo-form");
// toDoForm을 찾아놨기 때문에, 그 안에서 input을 찾을 수 있다.
// const toDoInput = toDoForm.querySelector("input");
const toDoInput = document.querySelector("#todo-form input");
const toDoList = document.getElementById("todo-list");

const TODOS_KEY ="todos"

let toDos = [];
//toDos array의 내용을 localStorage에 넣는 기능.
//localStorage에는 String만 들어갈 수 있다.
// JSON.stringify()는 JavaScript object나 array 또는 
// 어떤 JavaScript코드든 String으로 만들어준다.
// 이 String을 JSON.parse안에 넣으면 JS가 실제로 무언가를 할 수 있는 살아있는 배열로 변환 된다.
function saveToDos(){
    localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}
// 입력한 list 삭제하는 기능.
function deleteToDo(event){
    //target은 button이다. 그 button은 부모를 갖고있는데 그 부모인 li에 접근해 li를 삭제
    const li = event.target.parentElement;
    li.remove();
}

function paintToDo(newTodo){
    //html 생성. li와 span
    // span을 li 자식으로 넣음.
    // span안에 넣은 새로운 텍스트는 사용자가 form에서 우리에게 준 newTodo값.
    const li = document.createElement("li");
    const span = document.createElement("span");
    // li에 span이라는 자식을 부여함.
    // button을 li에 추가함.
    // span의 텍스트는 handleToDoSubmit에서 온 newTodo 텍스트가 된다.
    span.innerText = newTodo;
    const button = document.createElement("button");
    button.innerText = "❌";
    button.addEventListener("click", deleteToDo);
    // append는 맨 마지막에 놓여져야 함.
    li.appendChild(span);
    li.appendChild(button);
    toDoList.appendChild(li);
}  


function handleToDoSubmit(event){
    event.preventDefault();
    // input의 현재 value를 새로운 변수에 복사함.
    // newTodo는 input의 value를 비우기 전의 값을 나타내는 String.
    // 그런 다음 그 입력값을 paintToDo에 넣어서 호출한다.
    const newTodo = toDoInput.value;
    // Enter를 누르면 모든 입력값이 사라지게 함. value값에 빈 값("")을 넣는다.
    toDoInput.value = "";
    //newTodo를 toDos array에 push한 후 화면에 그 toDo를 그리려준다.
    toDos.push(newTodo);
    paintToDo(newTodo);
    saveToDos();
}

toDoForm.addEventListener("submit", handleToDoSubmit);

const savedToDos = localStorage.getItem(TODOS_KEY);

if (savedToDos !== null) {
    const parsedToDos = JSON.parse(savedToDos);
    //toDos에 parsedToDos를 넣어서 전에 있던 toDo들을 복원
    toDos = parsedToDos;
    parsedToDos.forEach(paintToDo);
}