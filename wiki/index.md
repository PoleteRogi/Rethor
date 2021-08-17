# Rethor Lua Wiki
Here are all the functions and variables that Rethor Lua haves.

### x
Type: Integer

The player X position. You can edit it..

### y
Type: Integer

The player Y position. You can edit it.

### backgroundTiling
Type: Boolean

This makes the game background to have a tiling texture. This texture is "rethor/sprites/background.png". 

You can change it.

Recommended size: 16x16.

### backgroundColor
Type: String

Here you can change the background color in the case you have to tiling in the background.

This variable is like a CSS color attribute.

### upArrowPressed
Type: Boolean

This variable detects when the player is pressing the up arrow key.

### downArrowPressed
Type: Boolean

This variable detects when the player is pressing the down arrow key.

### rightArrowPressed
Type: Boolean

This variable detects when the player is pressing the right arrow key.

### leftArrowPressed
Type: Boolean

This variable detects when the player is pressing the left arrow key.

### interactPressed
Type: Boolean

This variable detects when the player is pressing the interact key.

The interact key is the space key.

### gameTitle
Type: String

This variable is the game title. You can edit it.

### dialogue(entity, text)
Type: Function

This function adds a dialogue. You can close it pressing the left mouse button.

Entity: String : Who says the dialogue

Text  : String : What it says

### endDialogue()
Type: Function

This function closes the currentDialogue.

### assignMenuBG(bg)
Type: Function

This function adds a background to the game menu.

BG: String : The image file name in the sprites folder

### removeMenuBG()
Type: Function

This function removes the menu background.

### menuSettings(normalColor, hoverColor)
Type: Function

This function changes the button text color.

Normal Color : String : The normal button text color 

Hover Color  : String : The hover button text color

The variables are like a CSS color attribute.

## Game effects
You can only have one at the time.

### effectBlur(pixels)
Type: Function

Adds a blur effect.

Pixels : Integer : The pixel size of the blur

### effectBrightness(percentage)
Type: Function

Adds a brightness effect.

Percentage : Integer : The percentage of the brightness

### effectContrast(percentage)
Type: Function

Adds a contrast effect.

Percentage : Integer : The percentage of the contrast

### effectDropShadow(offsetX, offsetY, blurRadius, color)
Type: Function

Adds a drop shadow.

OffsetX    : Integer : The X offset of the shadow

OffsetY    : Integer : The Y offset of the shadow

BlurRadius : Integer : The blur effect radius

Color      : String  : The shadow color. The syntax is like a CSS color attribute

**This feature is still in development. May cause bugs.**

### effectGrayScale(percentage)
Type: Function

Adds a gray scale effect.

Percentage : Integer : The percentage of the grayscale

### effectHueRotate(angle)
Type: Function

Rotates the hue values of the game.

Angle : Integer : The angle of the hue

### effectInvert(percentage)
Type: Function

Adds an inverse colors effect.

Percentage : Integer : The percentage of the invert effect

### effectSaturate(percentage)
Type: Function

Saturates the game by the percentage of the effect.

Percentage : Integer : The percentage of the saturation effect

### effectSepia(percentage)
Type: Function

Adds a sepia effect to the screen.

Percentage : Integer : The percentage of the sepia effect

### removeEffect()
Type: Function

Removes the current effect.

#### Sprites used in the template are not mine. Here are the links

Character: [Generated with PixelDudesMaker](https://0x72.itch.io/pixeldudesmaker)
Template Tile: [Kenney PixelShmup](https://www.kenney.nl/assets/pixel-shmup)
Menu Background Image: [Made by Lucas de Oliveira](https://www.artstation.com/artwork/L3a9X5)
