const canvas = document.getElementById('my canvas');
const ctx = canvas.getContext ("2d");

const bgImg = new Image();
bgImg.src = "../images/Court.jpg";

const playerImg = new Image();
playerImg.src = "..images/player.jfif";

const player = {
img: playerImg, 
x: 50%,
y: canvas.height,
size: 8, 
jump: true,
};


window.addEventListener("keyup", (event) => {
    if (event.code === "Space") {
        player.jump = true;
    }
});

window.addEventListener("key")