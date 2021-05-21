canvas = document.getElementById('myCanvas');
ctx = canvas.getContext("2d");
car_1_x = 10;
car_1_y = 10;
car_2_x = 10;
car_2_y = 50;
car_1_width = 100;
car_1_height = 90;
car_2_width = 100;
car_2_height = 90;
car_1_image = 'car_1.png';
car_2_image = 'car_2.png';
background_image = "background.jpg";
function add(){
    console.log("came");
    background_imgTag = new Image();
    background_imgTag.onload = uploadBackground();
    background_imgTag.src = background_image;

    car_1_imgTag = new Image();
    car_1_imgTag.onload = uploadcars();
    car_1_imgTag.src = car_1_image;

    car_2_imgTag = new Image();
    car_2_imgTag.onload = uploadcars();
    car_2_imgTag.src = car_2_image;
}
function uploadBackground(){
    ctx.drawImage(background_imgTag, 0, 0, canvas.width, canvas.height);
}
function uploadcars(){
    ctx.drawImage(car_1_imgTag, car_1_x, car_1_y, car_1_width, car_1_height);
    ctx.drawImage(car_2_imgTag, car_2_x, car_2_y, car_2_width, car_2_height);
}
window.addEventListener("keydown", my_keydown);
function my_keydown(e){
    keyPressed = e.keyCode;
    console.log(keyPressed);
    if(keyPressed == '37'){
        left();
        console.log("left");
    }
    if(keyPressed == '38'){
        up();
        console.log("up");
    }
    if(keyPressed == '39'){
        right();
        console.log("right");
    }
    if(keyPressed == '40'){
        down();
        console.log("down");
    }
}