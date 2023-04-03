const toDoForm = document.getElementById("todo-form");
// toDOForm을 찾아놨기 때문에, 그 안에서 input을 찾을 수 있다.
// const toDoInput = toDoForm.querySelector("input");
const toDoInput = document.querySelector("#todo-form input");
const toDoList = document.getElementById("todo-list");

function paintToDo(newTodo){
    //html 생성. li와 span
    // span을 li 자식으로 넣음.
    // span안에 넣은 새로운 텍스트는 사용자가 form에서 우리에게 준 newTodo값.
    const li = document.createElement("li");
    const span = document.createElement("span");
    // li에 span이라는 자식을 부여함.
    li.appendChild(span);
    // span의 텍스트는 handleToDoSubmit에서 온 newTodo 텍스트가 된다.
    span.innerText = newTodo;
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
    console.log(newTodo, toDoInput.value);
    paintToDo(newTodo);
}

toDoForm.addEventListener("submit", handleToDoSubmit);


// 1. submit event를 받고, 기본 동작을 막고, input에서 value를 얻고 paintTodo를 호출
// 2. element를 생성하고 자식 추가하고 text를 바꾼다.
