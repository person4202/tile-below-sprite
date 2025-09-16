let mySprite = sprites.create(img`
    . . . . . . . .
    . . . . . . . .
    . . . . . . . .
    . . . . . . . .
`, SpriteKind.Player)

let below = tileUtils.tileBelowSprite(mySprite)
let twoBelow = tileUtils.tileBelowLocation(below)

tiles.setTileAt(twoBelow, assets.tile`transparency16`)
