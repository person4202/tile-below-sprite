let mySprite = sprites.create(img`
    . . . . . . . . 
    . . . . . . . . 
    . . . . . . . . 
    . . . . . . . . 
`, SpriteKind.Player)

let below = myBlocks.tileBelow(mySprite)
tiles.setTileAt(below, assets.tile`transparency16`)
