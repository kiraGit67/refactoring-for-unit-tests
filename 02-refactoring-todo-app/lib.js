export function readTodosFromLocalStorage(toDos) {
  const todosFromStorage = localStorage.getItem("todos");
  if (todosFromStorage !== null) {
    //return JSON.parse(todosFromStorage);
    toDos = JSON.parse(todosFromStorage);
    return toDos;
  } else {
    return [];
  }
}

export function saveTodosToLocalStorage(toDos) {
  localStorage.setItem("todos", JSON.stringify(toDos));
}

export function isDuplicate(toDoInput, toDos) {
  toDoInput = toDoInput.toLowerCase();
  console.log(toDos);
  return toDos
    .map((currentToDo) => currentToDo.todo.toLowerCase())
    .includes(toDoInput);
  /*
  for (let i = 0; i < toDos.length; i++) {
    const currentTodo = toDos[i];
    if (currentTodo.todo.toLowerCase() === toDo) {
      return true;
    }
  }
  return false;
*/
}

export function getFilterValue(selectorElement) {
  return document.querySelector(selectorElement).value;
}
