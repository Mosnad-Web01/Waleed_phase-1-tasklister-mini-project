document.addEventListener("DOMContentLoaded", () => {
  document
    .getElementById("create-task-form")
    .addEventListener("submit", function (event) {
      event.preventDefault();

      const taskDescription = document.getElementById(
        "new-task-description"
      ).value;

      const li = document.createElement("li");
      li.textContent = taskDescription;

      document.getElementById("tasks").appendChild(li);

      document.getElementById("new-task-description").value = "";
    });
});
