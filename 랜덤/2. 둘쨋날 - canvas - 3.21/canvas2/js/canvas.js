var canvas = document.querySelector('canvas');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

var c = canvas.getContext('2d');


// Rect

// c.fillStyle = 'rgba(255, 0, 0, 0.5)';
// c.fillRect(100, 100, 200, 200)
// c.fillStyle = 'rgba(0, 0, 255, 0.5)';
// c.fillRect(600, 100, 200, 200)
// c.fillStyle = 'rgba(0, 255, 0, 0.5)';
// c.fillRect(400, 400, 200, 200)


// Line

// c.beginPath();
// c.moveTo(50, 300);
// c.lineTo(300, 100);
// c.lineTo(400, 300);
// c.strokeStyle = "#fa34a3";
// c.stroke();


// Arc / Circle

// c.arc(x: Int, y: Int, r: Int, 
//     startAngle: Float, endAngle: Float, 
//     drawCounterClockwise: Bool (false))

// c.beginPath();
// c.arc(300, 300, 30, 0, Math.PI * 2, false)
// c.strokeStyle = 'yellow';
// c.stroke();

// for (var i = 0; i < 100; i++) {
//     var x = Math.random() * window.innerWidth;
//     var y = Math.random() * window.innerHeight;
//     c.beginPath();
//     c.arc(x, y, 30, 0, Math.PI * 2, false)
//     c.strokeStyle = 'yellow';
//     c.stroke();
// }
var mouse = {
    x: undefined,
    y: undefined
}

var maxR = 40;
var minR = 5;

var colorArray = [
    '#BFA473',
    '#D9C3A9',
    '#8C6849',
    '#593825',
    '#260101'
];

window.addEventListener('mousemove',
    function(event) {
        mouse.x = event.x;
        mouse.y = event.y;
        console.log(mouse);
    }
)

window.addEventListener('resize', function (){
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    init();
});

function Circle(x, y, dx, dy, r) {
    this.x = x;
    this.y = y;
    this.dx = dx;
    this.dy = dy;
    this.r = r;
    this.minR = r;
    this.color = colorArray[Math.floor(Math.random() * colorArray.length)];


    this.draw = function() {
        c.beginPath();
        c.arc(this.x, this.y, this.r, 0, Math.PI * 2, false);
        c.fillStyle = this.color
        c.fill();
    }

    this.update = function() {
        if (this.x > innerWidth - this.r || this.x - this.r < 0) {
            this.dx = -this.dx;
        }   else if (this.y > innerHeight - this.r || this.y - this.r < 0){
            this.dy = -this.dy;
        }
    
        this.x += this.dx;
        this.y += this.dy;

        // interactivity
        if (mouse.x - this.x < 50 && mouse.x - this.x > -50
            && mouse.y - this.y < 50 && mouse.y - this.y > -50) {
                if (this.r < maxR) {
                    this.r += 1;
                }
        } else if (this.r > this.minR) {
            this.r -= 1;
        }



        this.draw();
    }
}

var circleArray = [];

function init() {
    circleArray = [];

    for (var i = 0; i < 200; i++) {
        var r = Math.random() * 9 + 1;
        var x = Math.random() * (innerWidth - r * 2) + r;
        var y = Math.random() * (innerHeight - r * 2) + r;
        var dx = (Math.random() - 0.5) * 2;
        var dy = (Math.random() - 0.5) * 2;
        
        circleArray.push(new Circle(x, y, dx, dy, r));
    }
}


function animate() {
    requestAnimationFrame(animate);
    c.clearRect(0, 0, innerWidth, innerHeight);

    for (var i = 0; i < circleArray.length; i++) {
        circleArray[i].update();
    }
}

init();
animate();