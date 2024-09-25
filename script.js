function abdul() {
  let input = document.querySelector(".input").value;
  if (input.length <= 0) {
    return alert("pls input something valid");
  }
  const headings = document.createElement("li");
  const todos = document.querySelector(".todos");
  headings.style.fontSize = "20px";
  headings.innerHTML = input;
  todos.appendChild(headings);
  document.querySelector(".input").value = "";
}
