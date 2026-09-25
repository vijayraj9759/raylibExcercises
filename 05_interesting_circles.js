const r = require("raylib");

const windowWidth = 800;
const windowHeight = 500;
const FPS = 60;

const x1 = 10;
const y1 = 10;
const radius1 = 5;

const x2 = 50;
const y2 = 10;
const radius2 = 5;

function square(n) {
    return n ** 2;
}

function sqrt(n) {
    return n ** 0.5;
}

function calculateDistance(srcX, srcY, destX, destY) {
    const distX = destX - srcX;
    const distY = destY - srcY;

    return sqrt(square(distX) + square(distY));
}

function chooseColor(x1, y1, radius1, x2, y2, radius2) {
    const distAtoB = calculateDistance(x1, y1, x2, y2);

    const totalRadius = radius1 + radius2;

    return distAtoB < totalRadius ? r.RED : r.BLACK;
}

function draw() {

    r.BeginDrawing();
    r.ClearBackground(r.WHITE);

    const color = chooseColor(x1, y1, radius1, x2, y2, radius2);

    r.DrawCircle(x1, y1, radius1, color);
    r.DrawCircle(x2, y2, radius2, color);

    r.EndDrawing();
}

function update() { }

function loop() {
    while (!r.WindowShouldClose()) {
        update();
        draw();
    }
}

function setup() {
    r.InitWindow(windowWidth, windowHeight, "Interesting_Circles");
    r.SetTargetFPS(FPS);
}

function main() {
    setup();
    loop();
    r.CloseWindow();
}

main();
