interface Todo {
  text: string;
  completed: boolean;
}

const input = document.getElementById("todo-input") as HTMLInputElement;
const form = document.querySelector("form") as HTMLFormElement;
const list = document.getElementById("todo-list") as HTMLUListElement;

const todos: Todo[] = JSON.parse(localStorage.getItem("todos") || "[]");

document.addEventListener("DOMContentLoaded", LoadData);
form.addEventListener("submit", handleSubmit);

function handleSubmit(e: SubmitEvent) {
  e.preventDefault();

  const newTodo: Todo = {
    text: input.value,
    completed: false,
  };

  todos.push(newTodo);

  localStorage.setItem("todos", JSON.stringify(todos));

  creatTodo(newTodo);

  input.value = "";
}

function creatTodo(todo: Todo) {
  const newLI = document.createElement("li");
  const checkbox = document.createElement("input");
  checkbox.setAttribute("type", "checkbox");

  checkbox.addEventListener("change", function () {
    todo.completed = !todo.completed;
    if (todo.completed) {
      newLI.style.textDecoration = "line-through";
      newLI.style.opacity = "0.6";
    } else {
      newLI.style.textDecoration = "none";
      newLI.style.opacity = "1";
    }
    localStorage.setItem("todos", JSON.stringify(todos));
  });

  if (todo.completed) {
    checkbox.checked = todo.completed;
    newLI.style.textDecoration = "line-through";
    newLI.style.opacity = "0.6";
  }

  newLI.append(checkbox);
  newLI.append(todo.text);
  list.append(newLI);
}

function LoadData() {
  if (todos.length > 0) {
    todos.forEach((todo) => {
      creatTodo(todo);
    });
  }
}
