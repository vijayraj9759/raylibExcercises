const r = require("raylib");

function square(n) {
  return n ** 2;
}

function sqrt(n) {
  return n ** 0.5;
}

function calculateDistance(srcX, srcY, destX, destY) {
  const distX = destX - srcX;
  const distY = destY - srcY;

  return sqrt(square(distX) + square(distY));
}

function chooseColor(x1, y1, radius1, x2, y2, radius2) {
  const distAtoB = calculateDistance(x1, y1, x2, y2);

  const totalRadius = radius1 + radius2;

  return distAtoB < totalRadius ? r.RED : r.BLACK;
}

module.exports = {
  square,
  sqrt,
  calculateDistance,
  chooseColor,
}