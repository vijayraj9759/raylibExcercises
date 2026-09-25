const r = require("raylib");

const windowWidth = 800;
const windowHeight = 500;

const rectWidth = 200;
const rectHeight = 100;

function centerCoordinate(largerSubCoordinate, smallerSubCoordinate) {
    return (largerSubCoordinate - smallerSubCoordinate) / 2;
}

function draw() {
    r.ClearBackground(r.BLUE);
    r.DrawRectangle(
        centerCoordinate(windowWidth, rectWidth),
        centerCoordinate(windowHeight, rectHeight),
        rectWidth,
        rectHeight,
        r.WHITE,
    );
}

function update() {}

function loop() {
    while (!r.WindowShouldClose()) {
        r.BeginDrawing();

        draw();

        r.EndDrawing();
    }
}

function setup() {
    r.InitWindow(windowWidth, windowHeight, "01_center_rectangle");
    r.SetTargetFPS(60);
}

function main() {
    setup();
    loop();
    r.CloseWindow();
}

main();
