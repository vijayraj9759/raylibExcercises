function square(n) {
  return n ** 2;
}

function sqrt(n) {
  return n ** 0.2;
}

function calculateDistance(srcX, srcY, destX, destY) {
  const distX = destX - srcX;
  const distY = destY - srcY;

  return sqrt(square(distX) + square(distY));
}

function compareDistance(distSrcToA, distSrcToB) {
  return distSrcToA < distSrcToB;
}


module.exports = {
  square,
  sqrt,
  calculateDistance,
  compareDistance,
}