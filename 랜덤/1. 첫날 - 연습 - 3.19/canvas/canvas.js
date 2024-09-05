var canvas = document.querySelector('canvas');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

var c = canvas.getContext('2d');

let x = 100;
let y = 100;
let width = 100;
let height = 100;

c.fillRect(x, y, width, height);
c.fillRect(300, 100, 100, 100);
c.fillRect(500, 100, 100, 100);
c.fillRect(700, 100, 100, 100);

c.fillRect(200, 200, 100, 100);
c.fillRect(400, 200, 100, 100);
c.fillRect(400, 200, 100, 100);
c.fillRect(600, 200, 100, 100);

c.fillRect(100, 300, 100, 100);
c.fillRect(300, 300, 100, 100);
c.fillRect(500, 300, 100, 100);
c.fillRect(700, 300, 100, 100);

c.fillRect(200, 400, 100, 100);
c.fillRect(400, 400, 100, 100);
c.fillRect(400, 400, 100, 100);
c.fillRect(600, 400, 100, 100);

c.fillRect(100, 500, 100, 100);
c.fillRect(300, 500, 100, 100);
c.fillRect(500, 500, 100, 100);
c.fillRect(700, 500, 100, 100);

c.fillRect(200, 600, 100, 100);
c.fillRect(400, 600, 100, 100);
c.fillRect(400, 600, 100, 100);
c.fillRect(600, 600, 100, 100);
console.log(canvas);