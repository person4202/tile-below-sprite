//% weight=100 color=#ff8800 icon="\uf0a4"
//% block="Tile Utils"
namespace tileUtils {
    /**
     * Get the tile location directly below a sprite
     */
    //% block="tile below %sprite=variables_get(mySprite)"
    //% sprite.shadow=variables_get
    export function tileBelow(sprite: Sprite): tiles.Location {
        let col = Math.idiv(sprite.x, 16)
        let row = Math.idiv(sprite.y, 16) + 1
        return tiles.getTileLocation(col, row)
    }
}
