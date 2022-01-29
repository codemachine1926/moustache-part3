x_coord = 0;
y_coord = 0;
function preload() {
    img = loadImage("https://i.postimg.cc/3x3QzSGq/m.png");
}
function setup() {
    webcam1 = createCanvas(360,300);
    webcam1.position(450,200);
    cam = createCapture(VIDEO);
    cam.size(360, 300);
    cam.hide();

    model_1 = ml5.poseNet(cam,modelloaded);
    model_1.on('pose',poses);
}
function draw() {
    image(cam,0,0,360,300);
    image(img,x_coord,y_coord,40,20);
}
function take_snapshot() {
    save("filter_image.png");
}

function modelloaded() {
    console.log("posenet model is loaded");
}

function poses(findings) {
    if(findings.length > 0) {
        console.log(findings);
        x_coord = findings[0].pose.nose.x - 20;
        y_coord = findings[0].pose.nose.y + 3;
        console.log("x = " + x_coord + " y = " + y_coord);
    }
}
