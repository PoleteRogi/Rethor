# Rethor v0.1
#### A free open source retro 2D game engine

## How to use it
Download the source files and go to _"rethor/game.lua"_.
Here you have your game file. This file now contains the default Rethor template: A topdown game.

This template has: Dialogues and movement.

To change the menu you have to edit _"rethor/menu.lua"_.

## How it works
It uses **Electron** to create windows and **fengari-web** to convert your Lua code to JavaScript.

## How to change sprites
At the moment, Rethor is very limited. You can only change sprites, changing the files that come with Rethor and putting the same name.

## How to test it
Do _"npm start"_ to test your game. To export it you have to compile the **Electron app**.

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

#### Sprites used in the template are not mine. Here are the links

Character: [Generated with PixelDudesMaker](https://0x72.itch.io/pixeldudesmaker)
Template Tile: [Kenney PixelShmup](https://www.kenney.nl/assets/pixel-shmup)
Menu Background Image: [Made by Lucas de Oliveira](https://www.artstation.com/artwork/L3a9X5)
