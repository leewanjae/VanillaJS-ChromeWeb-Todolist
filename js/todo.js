const toDoForm = document.getElementById("todo-form");
// toDoForm을 찾아놨기 때문에, 그 안에서 input을 찾을 수 있다.
// const toDoInput = toDoForm.querySelector("input");
const toDoInput = document.querySelector("#todo-form input");
const toDoList = document.getElementById("todo-list");

const TODOS_KEY ="todos"

let toDos = [];
//toDos array의 내용을 localStorage에 넣는 기능.
// 이 String을 JSON.parse안에 넣으면 JS가 실제로 무언가를 할 수 있는 살아있는 배열로 변환 된다.
function saveToDos(){
    localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}
// 입력한 list 삭제하는 기능.
function deleteToDo(event){
    //target은 button이다. 그 button은 부모를 갖고있는데 그 부모인 li에 접근해 li를 삭제
    const li = event.target.parentElement;
    //toDo는 toDos DB에 있는 요소 중 하나이다.
    //그래서 이 함수는 DB에 있는 모든 것과 함께 실행된다.
    // 아래 코드 의미: 우리가 클릭한 li.id와 다른 toDo는 남겨두고 싶어.
    // li.id는 string타입, toDo.id는 number 타입 => 둘이 다르기 때문에 아무것도 지워지지 않는다. => parseint.사용
    li.remove();
    toDos = toDos.filter(toDo => toDo.id !== parseInt(li.id));
    //toDos DB에서 todo를 지운 뒤 saveToDos를 한 번 더 불러야 하는 걸 잊으면 안된다.
    // savedToDos를 불렀기 때문에 항목을 삭제한뒤 toDos를 사용하면 지운건 다 삭제되있다. 남은것만 출력
    saveToDos();
}

function paintToDo(newTodo){
    //html 생성. li와 span
    // span을 li 자식으로 넣음.
    // span안에 넣은 새로운 텍스트는 사용자가 form에서 우리에게 준 newTodo값.
    const li = document.createElement("li");
    li.id = newTodo.id;
    const span = document.createElement("span");
    // li에 span이라는 자식을 부여함.
    // button을 li에 추가함.
    // span의 텍스트는 handleToDoSubmit에서 온 newTodo 텍스트가 된다.
    span.innerText = newTodo.text;
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
    const newTodoObj = {
        text: newTodo,
        id: Date.now(),
    };
    //newTodo를 toDos array에 push한 후 화면에 그 toDo를 그리려준다.
    // 데이터베이스로 매번 사용자가 적어둔 text를 push한다.
    toDos.push(newTodoObj);
    paintToDo(newTodoObj);
    saveToDos();
}

toDoForm.addEventListener("submit", handleToDoSubmit);

const savedToDos = localStorage.getItem(TODOS_KEY);

if (savedToDos !== null) {
    const parsedToDos = JSON.parse(savedToDos);
    //toDos에 parsedToDos를 넣어서 전에 있던 toDo들을 복원
    toDos = parsedToDos;
    //forEach함수는 이 paintToDo를 parsedToDos 배열의 요소마다 실행한다.
    //forEach는 paintToDo를 기본적으로 실행.
    //forEach는 각각의 item을 준다.
    parsedToDos.forEach(paintToDo);
}

//filter함수, 만약 array에서 무엇을 삭제할때 실제로 지우는 것이 아니라 지우고 싶은 item을 빼고 새 array를 만든다.
// 즉, item을 지우는게 아니라 item을 제외하는거다.
// const arr = [1234, 5454, 223, 122, 45, 6775, 334];
// function sexyFunction(potato(아무이름이나 들어가도 된다.)){return potato <= 1000(아무이름적은거)}
// 1000보다 큰 수 모드를 제외한다. (4) [223, 122, 45, 334] 출력
