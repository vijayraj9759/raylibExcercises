const r = require("raylib");
const geometry = require("./geometry.js");

const windowWidth = 800;
const windowHeight = 500;
const FPS = 60;

function setup() {
  r.InitWindow(windowWidth, windowHeight, "02_center_rectangle_in_rectangle");
  r.SetTargetFPS(FPS);
}

function update() {

}

function draw() {
  r.BeginDrawing();
  r.ClearBackground(r.BLUE);

  const outerWidth = 400;
  const outerHeight = 300;

  const innerWidthScale = 0.5;
  const innerHeightScale = 0.2;

  const outerX = geometry.centerCoordinate(windowWidth, outerWidth);
  const outerY = geometry.centerCoordinate(windowHeight, outerHeight);

  const innerWidth = geometry.scaleCoordinate(outerWidth, innerWidthScale);
  const innerHeight = geometry.scaleCoordinate(outerHeight, innerHeightScale);

  const innerX = geometry.centerCoordinate(windowWidth, innerWidth);
  const innerY = geometry.centerCoordinate(windowHeight, innerHeight);

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