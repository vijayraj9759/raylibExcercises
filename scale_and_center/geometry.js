function centerCoordinate(largerSubCoordinate, smallerSubCoordinate) {
  return (largerSubCoordinate - smallerSubCoordinate) / 2;
}

function scaleCoordinate(coordinate, scalingFactor) {
  return scalingFactor * coordinate;
}

module.exports = {
  centerCoordinate,
  scaleCoordinate,
}