const r = require("raylib");
const geometry = require("./geometry.js");

function setup() {
  const windowWidth = 800;
  const windowHeight = 500;
  const FPS = 60;

  r.InitWindow(windowWidth, windowHeight, "02_center_rectangle_in_rectangle");
  r.SetTargetFPS(FPS);
}

function update() {

}

function draw() {
  r.BeginDrawing();
  r.ClearBackground(r.BLUE);

  const outerWidth = 500;
  const outerHeight = 100;

  const outerX = 200;
  const outerY = 300;

  const innerWidth = 200;
  const innerHeight = 50;

  const innerX = outerX + geometry.centerCoordinate(outerWidth, innerWidth);
  const innerY = outerY + geometry.centerCoordinate(outerHeight, innerHeight);

  r.DrawRectangle(outerX, outerY, outerWidth, outerHeight, r.WHITE);
  r.DrawRectangle(innerX, innerY, innerWidth, innerHeight, r.RED);

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