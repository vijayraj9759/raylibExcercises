const r = require("raylib");

r.InitWindow(1000, 1000, "Test_Window");
r.SetTargetFPS(60);

while (!r.WindowShouldClose()) {
  r.BeginDrawing();
  r.ClearBackground(r.WHITE);
  r.DrawRectangle(200, 200, 50, 3, r.RED);
  r.DrawEllipse(300, 300, 50, 3, r.RED);

  r.EndDrawing();
}

r.CloseWindow();