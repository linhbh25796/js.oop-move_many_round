function Hero(image, top, left, size, speed) {
    this.image = image;
    this.top = top;
    this.left = left;
    this.size = size;
    this.speed = speed;

    this.getHeroElement = function () {
        return '<img width="' + this.size + '" ' +
            ' height="' + this.size + '" ' +
            'src="' + this.image + '"' +
            'style="top: ' + this.top + 'px;left: ' + this.left + 'px ;position: absolute" />';
    };

    this.moveRight = function () {
        this.left += this.speed;
        console.log('Right: ' + this.left);
    };
    this.moveDown = function () {
        this.top += this.speed;
        console.log('Down: ' + this.top);
    };
    this.moveUp = function () {
        this.top -= this.speed;
        console.log("Up: " + this.top)
    };
    this.moveLeft = function () {
        this.left -= this.speed;
        console.log("Left: " + this.left);
    }
}

var hero = new Hero('linh.jpg', 20, 30, 400, 200);

function isAtTopLeft(object) {
    if (object.left == 30 && object.top == 20) {
        return true;
    }
}

function isAtTopRight(object) {
    if (object.left == 2030 && object.top == 20) {
        return true;
    }
}

function isAtBotRight(object) {
    if (object.left == 2030 && object.top == 1020) {
        return true;
    }
}

function isAtBotLeft(object) {
    if (object.left == 30 && object.top == 1020) {
        return true;
    }
}

let status = "topleft";

function start() {

    if(isAtTopRight(hero)){
        status="topright";
    }
    if(isAtTopLeft(hero)){
        status="topleft";
    }
    if(isAtBotRight(hero)){
        status="botright";
    }
    if(isAtBotLeft(hero)){
        status="botleft";
    }

    if (status == "topleft"){
        hero.moveRight()
    }
    if (status == "topright"){
        hero.moveDown();
    }
    if(status=="botright"){
        hero.moveLeft();
    }
    if(status=="botleft"){
        hero.moveUp();
    }

    document.getElementById("game").innerHTML = hero.getHeroElement();
    setTimeout(start, 500)
}

start();