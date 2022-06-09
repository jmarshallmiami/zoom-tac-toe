async function createRoomHandler(event) {
  event.preventDefault();

  const gameroomName = document.querySelector("#create-game").value.trim();

  if (gameroomName) {
    const response = await fetch("/api/gameroom/", {
      method: "post",
      body: JSON.stringify({
        gameroomName,
      }),
      headers: { "Content-Type": "application/json" },
    });

    if (response.ok) {
      document.location.replace(`/games/${gameroomName}`);
    } else {
      alert(response.statusText);
    }
  }
}

document
  .querySelector(".create-game")
  .addEventListener("submit", createRoomHandler);
