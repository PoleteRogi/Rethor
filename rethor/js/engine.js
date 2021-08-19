var canvas = document.getElementById('screen');
var ctx = canvas.getContext('2d', {alpha: false});

ctx.imageSmoothingEnabled = false;
let characterAnimation = 1;

let effect = "none";

var img = document.getElementById('img');
var backgroundTile = document.getElementById('bg')

let mapX = 0;
let mapY = 0;

let upArrowPressed = false;
let downArrowPressed = false;
let rightArrowPressed = false;
let leftArrowPressed = false;
let interactPressed = false;

let backgroundColor = "#fff6d3";
let backgroundTiling = false;

let isInDialogue = false;
let dialogueEntity = "Game";
let dialogueText = "Hello world";

let isInMenu = false;
let menuIndex = -1;
let hasMenuBackground = false;
let menuBackground = "menubg.gif";
let menuBGImage = new Image();
let menuNormalColor = "white";
let menuHoverColor = "black";

let objectsX = [];
let objectsY = [];
let objectSprites = [];

document.addEventListener('keydown', function(e) {
    switch (e.keyCode) {
        case 38:
            upArrowPressed = true;
            fengari.load('upArrowPressed = ' + upArrowPressed)();
            if(isInMenu) {
                menuIndex--;
                if(menuIndex == -1) {
                    menuIndex = 1;
                }
                if(menuIndex == -2) {
                    menuIndex = -1;
                }
            }
            break;
        case 40:
            downArrowPressed = true;
            fengari.load('downArrowPressed = ' + downArrowPressed)();
            if(isInMenu) {
                menuIndex++;
                if(menuIndex == 2) {
                    menuIndex = 0;
                }
            }
            break;
        case 39:
            rightArrowPressed = true;
            fengari.load('rightArrowPressed = ' + rightArrowPressed)();
            break;
        case 37:
            leftArrowPressed = true;
            fengari.load('leftArrowPressed = ' + leftArrowPressed)();
            break;
        case 32:
            interactPressed = true;
            fengari.load('interactPressed = ' + interactPressed)();
            break;
        case 13:
            //Load game
            if(isInMenu == true && menuIndex == 0) {
                fengari.load('isInMenu = false')();
            }

            //Exit
            if(isInMenu && menuIndex == 1) {
                window.close();
            }
            break;
    }
})

document.addEventListener('keyup', function(e) {
    switch (e.keyCode) {
        case 38:
            upArrowPressed = false;
            fengari.load('upArrowPressed = ' + upArrowPressed)();
            break;
        case 40:
            downArrowPressed = false;
            fengari.load('downArrowPressed = ' + downArrowPressed)();
            break;
        case 39:
            rightArrowPressed = false;
            fengari.load('rightArrowPressed = ' + rightArrowPressed)();
            break;
        case 37:
            leftArrowPressed = false;
            fengari.load('leftArrowPressed = ' + leftArrowPressed)();
            break;
        case 32:
            interactPressed = false;
            fengari.load('interactPressed = ' + interactPressed)();
            break;
    }
})

document.addEventListener('mousedown', function(e) {
    if(isInDialogue) {
        fengari.load("isInDialogue = false")();
    }
})

function loop() {
    requestAnimationFrame(loop);
    RequestLua();
    ctx.filter = effect;
    ClearScreen();
    DrawObjects();
    DrawCharacter();
    ctx.filter = "none";
    DrawInterface();
}

function DrawObjects() {
    console.log(objectSprites);
    for (let i = 0; i < objectSprites.length; i++) {
        var x = objectsX[i];
        var y = objectsY[i];
        var sprite = objectSprites[i];
        
        var imageSprite = new Image();
        imageSprite.src = "sprites/" + sprite + ".png";

        ctx.drawImage(imageSprite, x, y);
    }
}

function RequestLua() {
    if(!isInMenu) {
        fengari.load('loop()')();
    }
    backgroundColor = fengari.load('return backgroundColor')();
    backgroundTiling = fengari.load('return backgroundTiling')();
    isInDialogue = fengari.load('return isInDialogue')();
    dialogueText = fengari.load('return dialogueText')();
    dialogueEntity = fengari.load('return dialogueEntity')();
    document.title = fengari.load('return gameTitle')();
    playerAngle = fengari.load('return playerAngle')();
    objectsX = fengari.load('return objectsX')();
    objectsY = fengari.load('return objectsY')();
    objectSprites = fengari.load('return objectSprites')();
    isInMenu = fengari.load('return isInMenu')();
    hasMenuBackground = fengari.load('return hasMenuBackground')();
    menuBackground = fengari.load('return menuBackground')();
    menuNormalColor = fengari.load('return menuNormalColor')();
    menuHoverColor = fengari.load('return menuHoverColor')();
    effect = fengari.load('return effect')();
    canvas.width = fengari.load('return resolutionX')();
    canvas.height = fengari.load('return resolutionY')();
    mapX = fengari.load('return mapX')();
    mapY = fengari.load('return mapY')();
}
function DrawCharacter() {
    if(!isInMenu) {
        var x = fengari.load('return x')();
        var y = fengari.load('return y')();
        var cameraX = fengari.load('return cameraX')();
        var cameraY = fengari.load('return cameraY')();
        ctx.drawImage(img, x - cameraX - img.width / 2, y - cameraY - img.height / 2);
    }
}

function DrawInterface() {
    if(isInDialogue) {
        DrawDialogue();
    }
    if(isInMenu) {
        DrawMenu();
    }
}

function DrawMenu() {
    ctx.font = "20px Pixel";
    ctx.textAlign = "center";
    ctx.fillStyle = menuNormalColor;
    ctx.fillText(fengari.load('return gameTitle')(), canvas.width / 2, 40)

    if(menuIndex == 0) 
        ctx.fillStyle = menuHoverColor;
    else
        ctx.fillStyle = menuNormalColor;
    ctx.font = "15px Pixel";
    ctx.textAlign = "center";
    ctx.fillText("Play", canvas.width / 2, 65)

    if(menuIndex == 1) 
        ctx.fillStyle = menuHoverColor;
    else
        ctx.fillStyle = menuNormalColor;
    ctx.font = "15px Pixel";
    ctx.textAlign = "center";
    ctx.fillText("Exit", canvas.width / 2, 85)
}

function DrawDialogue() {
    ctx.textAlign = "left";
    ctx.fillStyle = "rgba(0, 0, 0, 0.7)"
    ctx.fillRect(0, canvas.height - 60, canvas.width, canvas.height);
    ctx.fillStyle = "white";
    ctx.font = "20px Pixel";
    ctx.fillText(dialogueEntity, 3, canvas.height - 40)
    ctx.font = "12px Pixel";
    ctx.fillText(dialogueText, 3, canvas.height - 25)
}

function ClearScreen() {
    ctx.fillStyle = backgroundColor;
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    offsetX = 0 - fengari.load('return cameraX')();
    offsetY = 0 - fengari.load('return cameraY')();
    if(!isInMenu || !hasMenuBackground) {
        if(backgroundTiling) {
            for(var x = 0; x < fengari.load('return mapSizeX')(); x++) {
                for(var y = 0; y < fengari.load('return mapSizeY')(); y++) {
                    ctx.drawImage(backgroundTile, mapX + x * backgroundTile.width + offsetX, mapY + y * backgroundTile.height + offsetY);
                }
            }
        }
    }
    if(hasMenuBackground && isInMenu) {
        menuBGImage.src = "sprites/" + menuBackground;
        ctx.drawImage(menuBGImage, 0, 0, canvas.width, canvas.height);
    }
}

loop();