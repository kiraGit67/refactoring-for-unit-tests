export function readTodosFromLocalStorage(toDos) {
  const todosFromStorage = localStorage.getItem("todos");
  if (todosFromStorage !== null) {
    //return JSON.parse(todosFromStorage);
    toDos = JSON.parse(todosFromStorage);
    return toDos;
  }
}

export function saveTodosToLocalStorage(toDos) {
  localStorage.setItem("todos", JSON.stringify(toDos));
}

export function isDuplicate(toDo, toDos) {
  toDo = toDo.toLowerCase();

  for (let i = 0; i < toDos.length; i++) {
    const currentTodo = toDos[i];
    if (currentTodo.todo.toLowerCase() === toDo) {
      return true;
    }
  }
  return false;
}

export function getFilterValue(selectorElement) {
  return document.querySelector(selectorElement).value;
}
