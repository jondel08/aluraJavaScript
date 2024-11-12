const keysList = document.querySelectorAll(".tecla");

function playSound(audioId) {
  document.querySelector(audioId).play();
}

for (let index = 0; index < keysList.length; index++) {
  const key = keysList[index];
  const instrument = key.classList[1];
  const audioId = `#sonido_${instrument}`;

  console.log(audioId);

  key.onclick = function () {
    playSound(audioId);
  };  

  key.onkeydown = function (event) {
    if (event.code === "Space" || event.code === "Enter") {
      key.classList.add("activa");
    }
  };

  key.onkeyup = function (event) {
    if (event.code === "Space" || event.code === "Enter") {
      key.classList.remove("activa");
    }
  };
}
