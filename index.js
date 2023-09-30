window.addEventListener("load", () => {
  function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min); // The maximum is exclusive and the minimum is inclusive
  }

  document.body.style.fontSize = getRandomInt(6,18)+"px";
  document.body.style.lineHeight = getRandomInt(7,16)+"px";

  for (let i = 0; i < window.innerHeight; i++) {
    const marq = document.createElement("marquee");
    for (let j = 0;j<getRandomInt(25, window.innerWidth);j++) marq.innerHTML += Math.random()>0.5 ? "/" : "\\";
    // marq.direction = Math.random()>0.5 ? "left" : Math.random()>0.5 ? "down" : Math.random()>0.5 ? "up" : "right";
    document.body.appendChild(marq);
  }
});