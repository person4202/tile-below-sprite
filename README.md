# Tile Below Sprite – MakeCode Arcade Extension

This extension adds a block that returns the **tile location directly below a sprite**.  
You can use it with `tiles.setTileAt(...)`, `tiles.setWallAt(...)`, etc.

### Example

```ts
tiles.setTileAt(myBlocks.tileBelow(mySprite), assets.tile`myTile`)
