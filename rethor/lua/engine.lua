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