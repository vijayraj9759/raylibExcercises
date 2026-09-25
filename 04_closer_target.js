const r = require("raylib");

const windowWidth = 800;
const windowHeight = 500;
const FPS = 60;

const blue = r.BLUE;
const white = r.WHITE;
const red = r.RED;
const gray = r.GRAY;
const black = r.BLACK;

const sourceX = 400;
const sourceY = 400;
const sourceRadius = 10;

const destOneX = 60;
const destOneY = 100;
const destOneRadi = 10;

const destTwoX = 150;
const destTwoY = 150;
const destTwoRadi = 10;

const lineSrcX = sourceX;
const lineSrcY = sourceY;

const lineDestX = compareDistance(
    calculateDistance(sourceX, sourceY, destOneX, destOneY),
    calculateDistance(sourceX, sourceY, destTwoX, destTwoY),
)
    ? destOneX
    : destTwoX;

const lineDestY = compareDistance(
    calculateDistance(sourceX, sourceY, destOneX, destOneY),
    calculateDistance(sourceX, sourceY, destTwoX, destTwoY),
)
    ? destOneY
    : destTwoY;

function square(n) {
    return n ** 2;
}

function sqrt(n) {
    return n ** 0.2;
}

function calculateDistance(srcX, srcY, destX, destY) {
    const distX = destX - srcX;
    const distY = destY - srcY;

    return sqrt(square(distX) + square(distY));
}

function compareDistance(distSrcToA, distSrcToB) {
    return distSrcToA < distSrcToB;
}

function draw() {
    r.ClearBackground(white);

    r.DrawCircle(sourceX, sourceY, sourceRadius, blue);
    r.DrawCircle(destOneX, destOneY, destOneRadi, red);
    r.DrawCircle(destTwoX, destTwoY, destTwoRadi, gray);
    r.DrawLine(lineSrcX, lineSrcY, lineDestX, lineDestY, black);
}

function update() {}

function loop() {
    while (!r.WindowShouldClose()) {
        r.BeginDrawing();

        update();
        draw();

        r.EndDrawing();
    }
}

function setup() {
    r.InitWindow(windowWidth, windowHeight, "04_closer_target");
    r.SetTargetFPS(FPS);
}

function main() {
    setup();
    loop();
    r.CloseWindow();
}

main();
