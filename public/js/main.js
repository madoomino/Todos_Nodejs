const input = document.getElementById("todoDescription"),
  addNewTodoText = document.getElementById("add-todo"),
  todoForm = document.getElementById("todoForm"),
  editBtns = document.querySelectorAll(".editButton"),
  cancelBtns = document.querySelectorAll(".cancelButton"),
  todoEditForm = document.querySelectorAll(".edit-form");

todoForm.addEventListener("submit", (e) => {
  if (input.value === "") {
    e.preventDefault();
    addNewTodoText.textContent = "Todo name should be provided";
    addNewTodoText.classList.add("red-color");
  }
});

editBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    const editDiv = btn.parentNode.parentNode.querySelector(".editDiv"),
      editSpan = btn.parentNode.parentNode.querySelector("span"),
      deleteInput = btn.parentNode.querySelector(".delete");

    editDiv.classList.remove("hidden");
    editDiv.classList.add("edit-div");
    editSpan.classList.add("hidden");
    btn.classList.add("hidden");
    deleteInput.classList.add("hidden");
  });
});

cancelBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    const editSpan = btn.parentNode.parentNode.querySelector("span"),
      deleteButton = btn.parentNode.parentNode.querySelector(".delete"),
      editButton = btn.parentNode.parentNode.querySelector(".editButton"),
      errMsg = btn.parentNode.parentNode.querySelector(".errMsg");

    btn.parentElement.classList.add("hidden");
    btn.parentElement.classList.remove("edit-div");
    editSpan.classList.remove("hidden");
    btn.classList.remove("hidden");
    deleteButton.classList.remove("hidden");
    editButton.classList.remove("hidden");
    errMsg.textContent = "";
  });
});
todoEditForm.forEach((el) => {
  el.addEventListener("submit", (e) => {
    const todoInput = el.parentNode.querySelector(".todo-input"),
      errMsg = el.parentNode.querySelector(".errMsg");
    if (todoInput.value === "") {
      e.preventDefault();
      errMsg.textContent = "New name should be provided";
    }
  });
});
