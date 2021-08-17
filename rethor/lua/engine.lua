x = 0;
y = 0;
sprite = "character";

backgroundTiling = false;
backgroundColor = "#fff6d3";

upArrowPressed = false;
downArrowPressed = false;
rightArrowPressed = false;
leftArrowPressed = false;
interactPressed = false;

isInDialogue = false;
dialogueEntity = "Game";
dialogueText = "Hello World";
gameTitle = "Rethor Game";

menuBackground = "";
hasMenuBackground = false;
isInMenu = true;
menuNormalColor = 'white';
menuHoverColor = 'black';

objectsX = {};
objectsY = {};
objectSprites = {};

effect = "none";

function dialogue(entity, text)
    isInDialogue = true;
    dialogueEntity = entity;
    dialogueText = text;
end

function endDialogue()
    isInDialogue = false;
end

function drawObject(x, y, sprite)
    x = x * 16;
    y = y * 16;
    table.insert(objectsX, x);
    table.insert(objectsY, y);
    table.insert(objectSprites, sprite);
end

function assignMenuBG(bg)
    hasMenuBackground = true;
    menuBackground = bg;
end

function removeMenuBG()
    hasMenuBackground = false;
end

function menuSettings(normalColor, hoverColor)
    menuNormalColor = normalColor;
    menuHoverColor = hoverColor;
end

function effectBlur(pixels)
    effect = "blur(" .. pixels .. "px)";
end

function effectBrightness(percentage)
    effect = "brightness(" .. percentage .. "%)";
end

function effectContrast(percentage)
    effect = "contrast(" .. percentage .. "%)";
end

function effectDropShadow(offsetX, offsetY, blurRadius, color)
    effect = "drop-shadow(" .. offsetX .. ", " .. offsetY .. ", " .. blurRadius .. ", " .. color .. ")";
end

function effectGrayScale(percentage)
    effect = "grayscale(" .. percentage .. "%)";
end

function effectHueRotate(angle)
    effect = "hue-rotate(" .. angle .."deg)";
end

function effectInvert(percentage)
    effect = "invert(" .. percentage .. "%)";
end

function effectSaturate(percentage)
    effect = "saturate(" .. percentage .. "%)";
end

function effectSepia(percentage)
    effect = "sepia(" .. percentage .. "%)";
end

function removeEffect()
    effect = "none";
end