const r = require("raylib");
const geometry = require("./geometry.js");

function setup() {

  const windowWidth = 800;
  const windowHeight = 500;
  const FPS = 60;

  r.InitWindow(windowWidth, windowHeight, "04_closer_target");
  r.SetTargetFPS(FPS);
}

function update() {

}

function draw() {
  r.BeginDrawing();
  r.ClearBackground(r.WHITE);

  const sourceX = 400;
  const sourceY = 400;
  const sourceRadi = 10;

  const destOneX = 60;
  const destOneY = 100;
  const destOneRadi = 10;

  const destTwoX = 150;
  const destTwoY = 150;
  const destTwoRadi = 10;

  const lineSrcX = sourceX;
  const lineSrcY = sourceY;

  const lineDestX = geometry.compareDistance(
    geometry.calculateDistance(sourceX, sourceY, destOneX, destOneY),
    geometry.calculateDistance(sourceX, sourceY, destTwoX, destTwoY),
  )
    ? destOneX
    : destTwoX;

  const lineDestY = geometry.compareDistance(
    geometry.calculateDistance(sourceX, sourceY, destOneX, destOneY),
    geometry.calculateDistance(sourceX, sourceY, destTwoX, destTwoY),
  )
    ? destOneY
    : destTwoY;

  r.DrawCircle(sourceX, sourceY, sourceRadi, r.BLUE);
  r.DrawCircle(destOneX, destOneY, destOneRadi, r.RED);
  r.DrawCircle(destTwoX, destTwoY, destTwoRadi, r.GRAY);
  r.DrawLine(lineSrcX, lineSrcY, lineDestX, lineDestY, r.BLACK);

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