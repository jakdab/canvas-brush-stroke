const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

ctx.strokeStyle = "#BADA55";
ctx.lineJoin = "round";
ctx.lineCap = "round";
ctx.lineWidth = 200;

let isDrawing = false;
let lastX = 0;
let lastY = 0;
let hue = 0;
let directions = true;

function draw(e) {
  if (!isDrawing) return;
  ctx.strokeStyle = `hsl(${hue}, 100%, 50%)`;
  ctx.beginPath();
  ctx.moveTo(lastX, lastY);
  ctx.lineTo(e.offsetX, e.offsetY);
  ctx.stroke();
  [lastX, lastY] = [e.offsetX, e.offsetY];

  hue++;
  if (hue >= 360) {
    hue = 0;
  }
}

function clearCanvas() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
}

canvas.addEventListener("mousemove", (e) => {
  isDrawing = true;
  [lastX, lastY] = [e.offsetX, e.offsetY];
});

canvas.addEventListener("mousemove", draw);
canvas.addEventListener("mousedown", () => {
  isDrawing = false;
  clearCanvas();
});

canvas.addEventListener("mouseout", () => {
  isDrawing = false;
  clearCanvas();
});

// Header Content
const headerContainer = document.getElementById("header");
const headerContent = document.createElement("div");
headerContent.classList.add("col");
headerContent.innerHTML = `
  <p>Post-Modernism</p>
  <h4>1960-2023</h4>
`;
headerContainer.appendChild(headerContent);

// Main Content
const mainContainer = document.getElementById("content");
const mainContent = document.createElement("div");
mainContent.classList.add("col");
mainContent.innerHTML = `
  <div class="content">
    <p>
      In the realm of postmodern art, artists often explore themes of identity, representation, consumerism, globalization, and the fragmented nature of contemporary life. They employ a wide array of techniques, from collage and appropriation to irony and pastiche, to convey their messages in visually striking and intellectually stimulating ways.
      <u>Postmodern artworks</u> can be intricate and layered, inviting viewers to peel back the multiple meanings embedded within.
    </p>
  </div>
  <br />
  <br />
  <div class="content">
    <p><u>Message</u></p>
    <p>
      Join us in celebrating the ever-evolving spirit of postmodernism and the power of art to provoke, challenge, and inspire.
    </p>
  </div>
  <br />
  <br />
  <div>
    <div>
      <p><u>Contact</u></p>
      <p>Youtube</p>
      <p>Instagram</p>
      <p>Wikipedia</p>
      <p>Gmail</p>
    </div>
  </div>
`;
mainContainer.appendChild(mainContent);
