const todos = [];
const EVENT_BUATAN = "event-baru";

function memberikanId() {
  return +new Date();
}

function membuatObjekTodo(id, tugas, waktu, hasil) {
  return {
    id,
    tugas,
    waktu,
    hasil,
  };
}

function membuatElement(objeknya) {
  const title = document.createElement("h2");
  title.innerText = objeknya.tugas;

  const waktu = document.createElement("p");
  waktu.innerText = objeknya.waktu;

  const containerText = document.createElement("div");
  containerText.classList.add("inner");
  containerText.append(title, waktu);

  const container = document.createElement("div");
  container.classList.add("shadow", "item");
  container.append(containerText);
  container.setAttribute("id", `todo-${objeknya.id}`);

  if (objeknya.hasil) {
    const buttonUndo = document.createElement("button");
    buttonUndo.classList.add("undo-button");

    buttonUndo.addEventListener("click", function () {
      undoTaskFromCompleted(objeknya.id);
    });

    const trashButton = document.createElement("button");
    trashButton.classList.add("trash-button");

    trashButton.addEventListener("click", function () {
      removeTaskFromCompleted(objeknya.id);
    });
    container.append(buttonUndo, trashButton);
  } else {
    const buttonCheck = document.createElement("button");
    buttonCheck.classList.add("check-button");
    buttonCheck.addEventListener("click", function () {
      addTaskToCompleted(objeknya.id);
    });

    container.append(buttonCheck);
  }

  return container;
}

function addTaskToCompleted(objekId) {
  const idObjeknya = mencariTodo(objekId);

  if (idObjeknya == null) return;

  idObjeknya.hasil = true;
  document.dispatchEvent(new Event(EVENT_BUATAN));
}

function mencariTodo(objekId) {
  for (const todoItem of todos) {
    if (todoItem.id === objekId) {
      return todoItem;
    }
  }
  return null;
}

function removeTaskFromCompleted(objekId) {
  const todoTarget = mencariIndexTodo(objekId);
  if (todoTarget === -1) return;

  todos.splice(todoTarget, 1);
  document.dispatchEvent(new Event(RENDER_EVENT));
}

function mencariIndexTodo(objekId) {
  for (const a of todos) {
    if (todos[a].id === objekId) {
      return a;
    }
  }
  return -1;
}

function membuatTodo() {
  const titleValue = document.getElementById("title").value;
  const waktuValue = document.getElementById("date").value;

  const memberiId = memberikanId();
  const memberikanValueKeArray = membuatObjekTodo(memberiId, titleValue, waktuValue, false);
  todos.push(memberikanValueKeArray);

  document.dispatchEvent(new Event(EVENT_BUATAN));
}

function undoTaskFromCompleted(todoId) {
  const belomSelesai = mencariTodo(todoId);
  if (belomSelesai.hasil == null) return;

  belomSelesai.hasil = false;
  document.dispatchEvent(new Event(EVENT_BUATAN));
}

document.addEventListener(EVENT_BUATAN, function () {
  console.log(todos);

  const elementTodoSelesai = document.getElementById("todos");
  elementTodoSelesai.innerHTML = "";

  const elementTodoBelumSelesai = document.getElementById("completed-todos");
  elementTodoBelumSelesai.innerHTML = "";

  for (const itemTodo of todos) {
    const masukanElement = membuatElement(itemTodo);
    if (!itemTodo.hasil) {
      elementTodoSelesai.append(masukanElement);
    } else {
      elementTodoBelumSelesai.append(masukanElement);
    }
  }
});

document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("form");
  form.addEventListener("submit", function (e) {
    e.preventDefault();
    membuatTodo();
  });
});
