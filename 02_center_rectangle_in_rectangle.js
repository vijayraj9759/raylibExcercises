const r = require("raylib");

const windowWidth = 800;
const windowHeight = 500;
const FPS = 60;

const blue = r.BLUE;
const white = r.WHITE;
const red = r.RED;

const outerWidth = 500;
const outerHeight = 100;

const outerX = 200;
const outerY = 300;

const innerWidth = 200;
const innerHeight = 50;

const innerX = outerX + centerCoordinate(outerWidth, innerWidth);
const innerY = outerY + centerCoordinate(outerHeight, innerHeight);

function centerCoordinate(largerSubCoordinate, smallerSubCoordinate) {
    return (largerSubCoordinate - smallerSubCoordinate) / 2;
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

main();
