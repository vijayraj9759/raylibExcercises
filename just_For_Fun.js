const r = require("raylib");

const windowWidth = 1000;
const windowHeight = 1000;

const halfWindowWidth = windowWidth / 2;
const halfWindowHeight = windowHeight / 2;

let faceOuterCircleX = 300;
let faceOuterCircleY = 400;
const faceOuterRadius = 100;

let faceInnerCircleX = faceOuterCircleX;
let faceInnerCircleY = faceOuterCircleY + 10;
const faceInnerRadius = 0.9 * faceOuterRadius;

const eyeRadius = 18;

const bodyWidth = 1.6 * faceInnerRadius;
const bodyX = faceOuterCircleX - bodyWidth / 2;
const bodyY = faceOuterCircleY + faceInnerRadius - 15;


function centerCoordinate(largerSubCoordinate, smallerSubCoordinate) {
    return (largerSubCoordinate - smallerSubCoordinate) / 2;
}

function faceBoundary() {
    r.DrawCircle(faceOuterCircleX, faceOuterCircleY, faceOuterRadius, r.BLUE);
    r.DrawCircle(faceInnerCircleX, faceInnerCircleY, faceInnerRadius, r.WHITE);
}

function mouth() {
    const mouthRadius = faceInnerRadius - 25;
    r.DrawCircle(
        faceInnerCircleX,
        faceInnerCircleY - 10,
        mouthRadius,
        r.BLACK,
    );
    r.DrawCircle(
        faceInnerCircleX,
        faceInnerCircleY - 10 - 2,
        mouthRadius,
        r.WHITE,
    );
}

function leftEye() {
    const leftEyeX = faceOuterCircleX - eyeRadius;
    const leftEyeY = faceOuterCircleY - faceInnerRadius + eyeRadius;

    r.DrawEllipse(leftEyeX, leftEyeY, eyeRadius, 20, r.BLACK);
    r.DrawEllipse(leftEyeX, leftEyeY, eyeRadius - 2, 18, r.WHITE);
    r.DrawEllipse(
        leftEyeX + eyeRadius / 2,
        leftEyeY + eyeRadius / 2,
        4,
        4,
        r.BLACK,
    );
}

function rightEye() {
    const rightEyeX = faceOuterCircleX - eyeRadius + 36;
    const rightEyeY = faceOuterCircleY - faceInnerRadius + eyeRadius;

    r.DrawEllipse(rightEyeX, rightEyeY, eyeRadius, 20, r.BLACK);
    r.DrawEllipse(rightEyeX, rightEyeY, eyeRadius - 2, 18, r.WHITE);
    r.DrawEllipse(
        rightEyeX - eyeRadius / 2,
        rightEyeY + eyeRadius / 2,
        4,
        4,
        r.BLACK,
    );
}

function eyes() {
    leftEye();
    rightEye();
}

function nose() {
    const noseRadius = 10;
    const noseX = faceOuterCircleX;
    const noseY = faceOuterCircleY - 50;

    r.DrawLine(
        noseX,
        noseY,
        faceOuterCircleX,
        faceOuterCircleY + faceInnerRadius - 25,
        r.BLACK,
    );
    r.DrawCircle(noseX, noseY, noseRadius, r.RED);

}

function mustache() {
    leftMustache();
    rightMustache();
}

function leftMustache() {
    const middleMustacheX1 = faceOuterCircleX - faceOuterRadius + 20;
    const middleMustacheY1 = faceOuterCircleY - 10;
    const middleMustacheX2 = faceOuterCircleX - 8;
    const middleMustacheY2 = faceOuterCircleY - 10;

    drawLine(middleMustacheX1, middleMustacheY1, middleMustacheX2, middleMustacheY2);
    drawLine(middleMustacheX1, middleMustacheY1 - 25, middleMustacheX2, middleMustacheY2 - 10);
    drawLine(middleMustacheX1, middleMustacheY1 + 25, middleMustacheX2, middleMustacheY2 + 10);
}

function rightMustache() {
    const middleMustacheX1 = faceOuterCircleX + 8;
    const middleMustacheY1 = faceOuterCircleY - 10;
    const middleMustacheX2 = faceOuterCircleX + faceOuterRadius - 20;
    const middleMustacheY2 = faceOuterCircleY - 10;

    drawLine(middleMustacheX1, middleMustacheY1, middleMustacheX2, middleMustacheY2);
    drawLine(middleMustacheX1, middleMustacheY1 - 10, middleMustacheX2, middleMustacheY2 - 25);
    drawLine(middleMustacheX1, middleMustacheY1 + 10, middleMustacheX2, middleMustacheY2 + 25);
}

function drawLine(x1, y1, x2, y2) {
    r.DrawLine(x1, y1, x2, y2, r.BLACK);
}

function face() {

    faceBoundary();

    mouth();

    eyes();

    nose();

    mustache();

}

function Bell() {
    const length = 10;

    r.DrawRectangle(bodyX, bodyY, bodyWidth, length, r.RED);
}

function draw() {
    r.ClearBackground(r.WHITE);

    face();


    // Body
    let pocketX = faceOuterCircleX;
    let pocketY = faceOuterCircleY + faceOuterRadius + 24;
    let pocketLineX1 = faceOuterCircleX - 48;
    let pocketLineY1 = faceOuterCircleY + faceOuterRadius + 24;
    let pocketLineX2 = faceOuterCircleX + 48;
    let pocketLineY2 = faceOuterCircleY + faceOuterRadius + 24;
    let hiddenRectangleX = faceOuterCircleX - 47;
    let hiddenRectangleY = faceOuterCircleY + faceOuterRadius + 24 - 43;
    const hiddenRectangleWidth = 1.95 * 48;
    const hiddenRectangleLength = 42;

    r.DrawRectangle(bodyX, bodyY, bodyWidth, 1.8 * faceOuterRadius, r.BLUE);
    r.DrawCircle(pocketX, pocketY, 46, r.BLACK);
    r.DrawCircle(pocketX, pocketY, 60, r.WHITE);
    r.DrawCircle(pocketX, pocketY, 45, r.WHITE);
    r.DrawLine(pocketLineX1, pocketLineY1, pocketLineX2, pocketLineY2, r.BLACK)
    r.DrawRectangle(hiddenRectangleX, hiddenRectangleY, hiddenRectangleWidth, hiddenRectangleLength, r.WHITE);
    Bell();



    // Facial Structure
    // r.DrawLine(0, faceOuterCircleY, windowWidth, faceOuterCircleY, r.BLACK);
    // r.DrawLine(faceOuterCircleX, 0, faceOuterCircleX, windowHeight, r.BLACK);
}

function update() {
    faceOuterCircleX++;
    faceOuterCircleY++;
    faceInnerCircleX = faceOuterCircleX;
    faceInnerCircleY = faceOuterCircleY + 10;
    pocketX = faceOuterCircleX;
    pocketY = faceOuterCircleY + faceOuterRadius + 24;
    pocketLineX1 = faceOuterCircleX - 48;
    pocketLineY1 = faceOuterCircleY + faceOuterRadius + 24;
    pocketLineX2 = faceOuterCircleX + 48;
    pocketLineY2 = faceOuterCircleY + faceOuterRadius + 24;
    hiddenRectangleX = faceOuterCircleX - 47;
    hiddenRectangleY = faceOuterCircleY + faceOuterRadius + 24 - 43;
}

function loop() {
    while (!r.WindowShouldClose()) {
        r.BeginDrawing();
        update();
        draw();
        r.EndDrawing();
    }
}

function setup() {
    r.InitWindow(windowWidth, windowHeight, "01_center_rectangle");
    r.SetTargetFPS(60);
}

function main() {
    setup();
    loop();
    r.CloseWindow();
}


main();