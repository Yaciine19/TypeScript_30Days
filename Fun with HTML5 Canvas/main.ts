const canvas: HTMLCanvasElement | null = document.querySelector("#draw");
const ctx: CanvasRenderingContext2D | null | undefined =
  canvas?.getContext("2d");

if (canvas) {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
}

if (ctx) {
//   ctx.strokeStyle = "#BADA55";
  ctx.lineJoin = "round";
  ctx.lineCap = "round";
  ctx.lineWidth = 50;
}

let isDrawing: boolean = false;
let lastX: number = 0;
let lastY: number = 0;
let hue: number = 0;

function draw(e: MouseEvent) {
    if(!ctx) return;
    if(!isDrawing) return; // stop the fn from running when they are not moused down
    console.log(e);
    ctx.strokeStyle = `hsl(${hue}, 100%, 50%)`;
    ctx.beginPath();
    ctx.moveTo(lastX, lastY);
    ctx.lineTo(e.offsetX, e.offsetY);
    ctx.stroke();

    [lastX, lastY] = [e.offsetX, e.offsetY];

    hue++;
    if(hue >= 360) {
        hue = 0;
    }
}

canvas?.addEventListener("mousedown", (e) => {
    isDrawing = true;
    [lastX, lastY] = [e.offsetX, e.offsetY];
});

canvas?.addEventListener("mousemove", draw);

canvas?.addEventListener("mouseup", () => isDrawing = false);
canvas?.addEventListener("mouseout", () => isDrawing = false);
