async function createGameroomHandler(event) {
  event.preventDefault();

  const { v4: uuidv4 } = require("uuid");

  if (response.ok) {
    document.location.replace("/games/");
  } else {
    alert(response.statusText);
  }
}

document
  .querySelector(".new-gameroom")
  .addEventListener("click", createGameroomHandler);
