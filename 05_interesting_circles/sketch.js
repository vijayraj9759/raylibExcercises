const r = require("raylib");
const geometry = require("./geometry.js");

function setup() {
  const windowWidth = 800;
  const windowHeight = 500;
  const FPS = 60;

  r.InitWindow(windowWidth, windowHeight, "Interesting_Circles");
  r.SetTargetFPS(FPS);

}

function update() {

}

function draw() {
  r.BeginDrawing();
  r.ClearBackground(r.WHITE);

  const x1 = 10;
  const y1 = 10;
  const radius1 = 5;

  const x2 = 50;
  const y2 = 10;
  const radius2 = 5;

  const color = geometry.chooseColor(x1, y1, radius1, x2, y2, radius2);

  r.DrawCircle(x1, y1, radius1, color);
  r.DrawCircle(x2, y2, radius2, color);

  r.EndDrawing();
}

function running() {
  return !r.WindowShouldClose();
}

function teardown() {
  r.CloseWindow();
}

module.exports = {
  setup,
  update,
  draw,
  running,
  teardown,
};