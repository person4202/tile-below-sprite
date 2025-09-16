//% weight=100 color=#ff8800 icon="\uf0a4"
//% block="tileBelowSprite"
namespace tileBelowSprite {
    /**
     * Get the tile location directly below a sprite
     */
    //% block="tile below %sprite=variables_get(mySprite)"
    //% sprite.shadow=variables_get
    export function tileBelowSprite(sprite: Sprite): tiles.Location {
        let col = Math.idiv(sprite.x, 16)
        let row = Math.idiv(sprite.y, 16) + 1
        return tiles.getTileLocation(col, row)
    }

    /**
     * Get the tile location directly below another tile location
     */
    //% block="tile below location %loc"
    export function tileBelowLocation(loc: tiles.Location): tiles.Location {
        return tiles.getTileLocation(loc.col, loc.row + 1)
    }
}
