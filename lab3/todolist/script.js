//Получение всех необходимых элементов
const inputField = document.querySelector(".input-field textarea"),
  todoLists = document.querySelector(".todoLists"),
  pendingNum = document.querySelector(".pending-num"),
  clearButton = document.querySelector(".clear-button");

//мы будем вызывать эту функцию при добавлении, удалении и проверке-снятии галочки с задачи
function allTasks() {
  let tasks = document.querySelectorAll(".pending");

  //если длина задач равна 0, то ожидающее текстовое содержимое num будет равно no, если нет, то ожидающее значение num будет длиной задачи
  pendingNum.textContent = tasks.length === 0 ? "no" : tasks.length;

  let allLists = document.querySelectorAll(".list");
  if (allLists.length > 0) {
    todoLists.style.marginTop = "20px";
    clearButton.style.pointerEvents = "auto";
    return;
  }
  todoLists.style.marginTop = "0px";
  clearButton.style.pointerEvents = "none";
}



//добавка задачи, пока мы вводим значение в текстовое поле и нажимаем enter
inputField.addEventListener("keyup", (e) => {
  let inputVal = inputField.value.trim(); //функция trim удаляет пространство спереди и сзади от введенного значения а то до этого пустота ка цифра кететин еди

  //если нажата кнопка enter и длина входного значения больше 0.
  if (e.key === "Enter" && inputVal.length > 0) {
    let liTag = ` <li class="list pending" onclick="handleStatus(this)">
          <input type="checkbox" />
          <span class="task">${inputVal}</span>
          <i class="uil uil-trash" onclick="deleteTask(this)"></i>
        </li>`;

    todoLists.insertAdjacentHTML("beforeend", liTag); // добавление ушин керек
    inputField.value = ""; //удаление значения из поля ввода
    allTasks();
  }
});

//устанавливаем и снимаем флажок, пока мы нажимаем на задачу
function handleStatus(e) {
  const checkbox = e.querySelector("input"); //getting checkbox
  checkbox.checked = checkbox.checked ? false : true;
  e.classList.toggle("pending");
  allTasks();
}

//удаляем задачу, пока мы нажимаем на значок удаления.
function deleteTask(e) {
  e.parentElement.remove(); //получение родительского элемента и удаление его
  allTasks();
}

//удаляем все задачи, пока мы нажимаем на кнопку Очистить.
clearButton.addEventListener("click", () => {
  todoLists.innerHTML = "";
  allTasks();
});
