window.requestAnimFrame = (function () {
    return window.requestAnimationFrame ||
        window.requestAnimationFrame ||
        function (callback) {
            window.setTimeout(callback, 1000 / 60);
        };
})();

const c = document.getElementById('canv');
const $ = c.getContext('2d');
//num grids / frame
const _x = 1280; //x width (canvas width)
const _y = 720; //y height (canvas height)
$.clearRect(0, 0, _x, _y);

const gnum = 100;
const w = _x / gnum; //grid sq width
const h = _y / gnum; //grid sq height
let parts; //particles
let frm = 0; //value from
const P1 = 0.0005; //point one
const P2 = 0.01; //point two
const n = 0.98; //n value for later
const n_vel = 0.03; //velocity
let u_ = 0; //color update
let msX = 0; //mouse x
let msY = 0; //mouse y
let msdn = false; //mouse down flag

const Part = function () {
    this.x = 0; //x pos
    this.y = 0; //y pos
    this.vx = 0; //velocity x
    this.vy = 0; //velocity y
    this.ind_x = 0; //index x
    this.ind_y = 0; //index y
};

Part.prototype.frame = function () {

    if (this.ind_x === 0 ||
        this.ind_x === gnum - 1 ||
        this.ind_y === 0 ||
        this.ind_y === gnum - 1) {
        return;
    }

    let ax; //angle x
    let ay; //angle y
    //off_dx, off_dy = offset distance x, y
    const off_dx = this.ind_x * w - this.x;
    const off_dy = this.ind_y * h - this.y;
    ax = P1 * off_dx;
    ay = P1 * off_dy;

    ax -= P2 * (this.x - parts[this.ind_x - 1][this.ind_y].x);
    ay -= P2 * (this.y - parts[this.ind_x - 1][this.ind_y].y);

    ax -= P2 * (this.x - parts[this.ind_x + 1][this.ind_y].x);
    ay -= P2 * (this.y - parts[this.ind_x + 1][this.ind_y].y);

    ax -= P2 * (this.x - parts[this.ind_x][this.ind_y - 1].x);
    ay -= P2 * (this.y - parts[this.ind_x][this.ind_y - 1].y);

    ax -= P2 * (this.x - parts[this.ind_x][this.ind_y + 1].x);
    ay -= P2 * (this.y - parts[this.ind_x][this.ind_y + 1].y);

    this.vx += (ax - this.vx * n_vel);
    this.vy += (ay - this.vy * n_vel);

    this.x += this.vx * n;
    this.y += this.vy * n;
    if (msdn) {
        const dx = this.x - msX;
        const dy = this.y - msY;
        let q_ = Math.sqrt(dx * dx + dy * dy);
        if (q_ < 50) {
            q_ = q_ < 10 ? 10 : q_;
            this.x -= dx / q_ * 5;
            this.y -= dy / q_ * 5;
        }
    }
};

function go() {
    parts = []; //particle array
    for (let i = 0; i < gnum; i++) {
        parts.push([]);
        for (let j = 0; j < gnum; j++) {
            const p = new Part();
            p.ind_x = i;
            p.ind_y = j;
            p.x = i * w;
            p.y = j * h;
            parts[i][j] = p;
        }
    }
}

//move particles function
function mv_part() {

    for (let i = 0; i < gnum; i++) {
        for (let j = 0; j < gnum; j++) {
            const p = parts[i][j];
            p.frame();
        }
    }
}

//draw grid function
function draw() {
    $.strokeStyle = "black";
    $.beginPath();
    u_ -= .5;
    for (let i = 0; i < gnum - 1; i += 1) {
        for (let j = 0; j < gnum - 1; j += 1) {
            const p1 = parts[i][j];
            const p2 = parts[i][j + 1];
            const p3 = parts[i + 1][j + 1];
            const p4 = parts[i + 1][j];
            draw_each(p1, p2, p3, p4);
        }
    }
    $.stroke();

}

//draw each in array
function draw_each(p1, p2, p3, p4) {

    $.moveTo(p1.x, p1.y);
    $.lineTo(p2.x, p2.y);
    $.moveTo(p1.x, p1.y);
    $.lineTo(p4.x, p4.y);

    if (p1.ind_x === gnum - 2) {
        $.moveTo(p3.x, p3.y);
        $.lineTo(p4.x, p4.y);
    }
    if (p1.ind_y === gnum - 2) {
        $.moveTo(p3.x, p3.y);
        $.lineTo(p2.x, p2.y);
    }
}

//call functions to run
function calls() {
    $.clearRect(0, 0, _x, _y);

    mv_part();
    draw();
    frm++;
}

window.requestAnimFrame(go);

function simulateClick(inBetweenMillis) {
    msX = 960;
    msY = 360;
    msdn = true;
    setTimeout(() => {
        msdn = false;
    }, inBetweenMillis);
}

function run() {
    window.requestAnimFrame(calls);
    window.requestAnimFrame(run, 33);
}

run();
