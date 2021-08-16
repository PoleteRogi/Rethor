--start
backgroundTiling = true

gameTitle = "Top Down Template"

dialogueIndex = 0;

--main loop
function loop()
    --controller
    if rightArrowPressed then
        x = x + 1
    end

    if leftArrowPressed then
        x = x - 1
    end

    if upArrowPressed then
        y = y - 1
    end

    if downArrowPressed then
        y = y + 1
    end

    --dialogue
    if interactPressed and isInMenu == false then
        if dialogueIndex == 0 then
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
            dialogueIndex = -1;
            isInDialogue = false;
        end

        dialogueIndex = dialogueIndex + 1;
        interactPressed = false;
    end
end