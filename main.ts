sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    if (sprite.vy > 0 || sprite.bottom == otherSprite.top) {
        sprites.destroy(otherSprite, effects.disintegrate, 200)
        sprite.vy = sprite.vy * -1
    } else {
        info.changeLifeBy(-1)
    }
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    mySprite.vy = -100
})
scene.onHitWall(SpriteKind.Player, function (sprite, location) {
    if (sprite.tileKindAt(TileDirection.Top, assets.tile`transparency16`)) {
        tiles.setTileAt(location, assets.tile`transparency16`)
        tiles.setWallAt(location, false)
        myBox = sprites.create(img`
            e 3 3 3 3 3 3 3 3 3 3 3 3 3 3 e 
            e 4 4 4 4 4 4 4 4 4 4 4 4 4 4 e 
            e e e e e e e e e e e e e e e e 
            e 4 e 4 4 4 4 4 4 4 4 4 4 e 4 e 
            e 4 e e e e e e e e e e e e 4 e 
            e 4 e 3 3 3 3 3 3 3 3 3 3 e 4 e 
            e 4 e 4 4 4 4 4 4 4 4 4 4 e 4 e 
            e 4 e e e e e e e e e e e e 4 e 
            e 4 e 3 3 3 3 3 3 3 3 3 3 e 4 e 
            e 4 e 4 4 4 4 4 4 4 4 4 4 e 4 e 
            e 3 3 3 3 3 3 3 3 3 3 3 3 3 3 e 
            e 4 4 4 4 4 4 4 4 4 4 4 4 4 4 e 
            e e e e e e e e e e e e e e e e 
            e e c c c c c c c c c c c c e e 
            e e c c c c c c c c c c c c e e 
            e e e e e e e e e e e e e e e e 
            `, SpriteKind.Player)
        tiles.placeOnTile(myBox, location)
        sprites.destroy(myBox, effects.disintegrate, 200)
        music.play(music.melodyPlayable(music.smallCrash), music.PlaybackMode.InBackground)
    }
})
let myBox: Sprite = null
let mySprite: Sprite = null
info.setLife(3)
tiles.setCurrentTilemap(tilemap`レベル1`)
mySprite = sprites.create(img`
    . . . . . . f f f f . . . . . . 
    . . . . f f f 2 2 f f f . . . . 
    . . . f f f 2 2 2 2 f f f . . . 
    . . f f f e e e e e e f f f . . 
    . . f f e 2 2 2 2 2 2 e e f . . 
    . . f e 2 f f f f f f 2 e f . . 
    . . f f f f e e e e f f f f . . 
    . f f e f b f 4 4 f b f e f f . 
    . f e e 4 1 f d d f 1 4 e e f . 
    . . f e e d d d d d d e e f . . 
    . . . f e e 4 4 4 4 e e f . . . 
    . . e 4 f 2 2 2 2 2 2 f 4 e . . 
    . . 4 d f 2 2 2 2 2 2 f d 4 . . 
    . . 4 4 f 4 4 5 5 4 4 f 4 4 . . 
    . . . . . f f f f f f . . . . . 
    . . . . . f f . . f f . . . . . 
    `, SpriteKind.Player)
controller.moveSprite(mySprite, 100, 0)
mySprite.ay = 100
scene.cameraFollowSprite(mySprite)
let myEnemy = sprites.create(img`
    . . . . . c c c c c c c . . . . 
    . . . . c 6 7 7 7 7 7 6 c . . . 
    . . . c 7 c 6 6 6 6 c 7 6 c . . 
    . . c 6 7 6 f 6 6 f 6 7 7 c . . 
    . . c 7 7 7 7 7 7 7 7 7 7 c . . 
    . . f 7 8 1 f f 1 6 7 7 7 f . . 
    . . f 6 f 1 f f 1 f 7 7 7 f . . 
    . . . f f 2 2 2 2 f 7 7 6 f . . 
    . . c c f 2 2 2 2 7 7 6 f c . . 
    . c 7 7 7 7 7 7 7 7 c c 7 7 c . 
    c 7 1 1 1 7 7 7 7 f c 6 7 7 7 c 
    f 1 1 1 1 1 7 6 f c c 6 6 6 c c 
    f 1 1 1 1 1 1 6 6 c 6 6 6 c . . 
    f 6 1 1 1 1 1 6 6 6 6 6 6 c . . 
    . f 6 1 1 1 1 1 6 6 6 6 c . . . 
    . . f f c c c c c c c c . . . . 
    `, SpriteKind.Enemy)
myEnemy.ay = 100
myEnemy.setPosition(130, 72)
scene.cameraFollowSprite(myEnemy)
