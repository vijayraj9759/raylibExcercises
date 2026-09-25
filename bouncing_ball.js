const r = require("raylib");

const windowWidth = 800;
const windowHeight = 500;

const halfWindowWidth = windowWidth / 2;
const halfWindowHeight = windowHeight / 2;

r.InitWindow(windowWidth, windowHeight, "01_center_rectangle");
r.SetTargetFPS(60);

while (!r.WindowShouldClose()) {
    r.BeginDrawing();
    r.ClearBackground(r.WHITE);

    r.DrawCircle(50, halfWindowHeight, 50, r.RED);

    r.EndDrawing();
}

r.CloseWindow();
