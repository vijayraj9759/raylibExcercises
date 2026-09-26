const r = require("raylib");
const geometry = require("./geometry.js");

const windowWidth = 800;
const windowHeight = 500;
const FPS = 60;

function setup() {
  r.InitWindow(windowWidth, windowHeight, "01_center_rectangle");
  r.SetTargetFPS(FPS);
}

function update() {
}

function draw() {
  r.BeginDrawing();
  r.ClearBackground(r.BLUE);

  const rectWidth = 400;
  const rectHeight = 200;

  r.DrawRectangle(
    geometry.centerCoordinate(windowWidth, rectWidth),
    geometry.centerCoordinate(windowHeight, rectHeight),
    rectWidth,
    rectHeight,
    r.WHITE,
  );

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