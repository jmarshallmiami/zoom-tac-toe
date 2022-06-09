
async function createGameroomHandler(event) {
  event.preventDefault();

  GameId
  //creates new game upon click 
  // const response = await fetch('/newGame', {
  //   method: 'POST',
  //   body: JSON.stringify({
  //     gameId
  //   }),

  //   header: {
  //     'Content-Type': 'application/json'
  //   }
  // });

  // if (response.ok) {
  //   console.log(body)
  //   document.location.replace(`/games/${gameId}`);
  // } else {
  //   alert(response.statusText);
  // }
}

//create new game button
document
  .querySelector(".new-gameroom")
  .addEventListener("click", createGameroomHandler);

// clickable previous games
// document
//   .querySelector(".new-gameroom")
//   .addEventListener("click", createGameroomHandler);
