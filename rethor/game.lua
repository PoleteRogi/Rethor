--start
backgroundTiling = true

gameTitle = "Top Down Template"

mapSizeX = 32;
mapSizeY = 32;

--center the player on the map
x = 256 / 2;
y = 256 / 2;

dialogueIndex = 0;

--main loop
function loop()
    --controller
    if rightArrowPressed then
        x = x + 1
        cameraX = cameraX + 1;
    end

    if leftArrowPressed then
        x = x - 1
        cameraX = cameraX - 1;
    end

    if upArrowPressed then
        y = y - 1
        cameraY = cameraY - 1;
    end

    if downArrowPressed then
        y = y + 1
        cameraY = cameraY + 1;
    end

    --dialogue
    if interactPressed and isInMenu == false then
        dialoguePressed();
    end
end

function dialoguePressed() 
    if dialogueIndex == 0 then
        removeEffect()
        dialogue("Rethor", "Welcome to Rethor Engine")
    end

    if dialogueIndex == 1 then
        dialogue("Rethor", "A free open source retro 2D game engine")
    end
    
    if dialogueIndex == 2 then
        dialogue("Rethor", "Rethor uses Lua to make develoment super easy")
    end

    if dialogueIndex == 3 then
        dialogue("Rethor", "Rethor has everything that you will need")
    end

    if dialogueIndex == 4 then
        dialogue("Rethor", "This template was created using Rethor and Lua.");
    end

    if dialogueIndex == 5 then
        dialogue("Rethor", "Reathor has some screen effects too.")
    end

    if dialogueIndex == 6 then
        effectBlur(5);
        dialogue("Rethor", "Like blur")
    end

    if dialogueIndex == 7 then
        removeEffect();
        effectInvert(100);
        dialogue("Rethor", "Invert")
    end

    if dialogueIndex == 8 then
        removeEffect();
        effectHueRotate(90);
        dialogue("Rethor", "And more!");
    end

    if dialogueIndex == 9 then
        removeEffect();
        dialogueIndex = -1;
        endDialogue()
    end

    dialogueIndex = dialogueIndex + 1;
    interactPressed = false;
end