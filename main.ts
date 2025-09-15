//% weight=100 color=#0fbc11 icon="\uf1b0"
//% blockNamespace="myBlocks"
namespace myBlocks {
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
