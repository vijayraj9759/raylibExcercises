const r = require("raylib");

function centerCoordinate(largerSubCoordinate, smallerSubCoordinate) {
    return (largerSubCoordinate - smallerSubCoordinate) / 2;
}

function scaleCoordinate(coordinate, scalingFactor) {
    return scalingFactor * coordinate;
}

function draw() {
    r.ClearBackground(blue);

    r.DrawRectangle(outerX, outerY, outerWidth, outerHeight, white);
    r.DrawRectangle(innerX, innerY, innerWidth, innerHeight, red);
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
    r.InitWindow(windowWidth, windowHeight, "02_center_rectangle_in_rectangle");
    r.SetTargetFPS(FPS);
}

function main() {
    setup();
    loop();
    r.CloseWindow();
}

const windowWidth = 800;
const windowHeight = 500;
const FPS = 60;

const blue = r.BLUE;
const white = r.WHITE;
const red = r.RED;

const outerWidth = 400;
const outerHeight = 300;

const innerWidthScale = 0.5;
const innerHeightScale = 0.2;

const outerX = centerCoordinate(windowWidth, outerWidth);
const outerY = centerCoordinate(windowHeight, outerHeight);

const innerWidth = scaleCoordinate(outerWidth, innerWidthScale);
const innerHeight = scaleCoordinate(outerHeight, innerHeightScale);

const innerX = centerCoordinate(windowWidth, innerWidth);
const innerY = centerCoordinate(windowHeight, innerHeight);

main();
