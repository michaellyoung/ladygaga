namespace SpriteKind {
    export const gun = SpriteKind.create()
}
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    projectile = sprites.createProjectileFromSprite(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . 9 9 . . . . . . 
        . . . . . . . . 9 9 9 . . . . . 
        . . . 9 9 9 9 9 9 9 9 9 . . . . 
        . . . 9 9 9 9 9 9 9 9 9 9 . . . 
        . . . 9 9 9 9 9 9 9 9 9 . . . . 
        . . . . . . . . 9 9 9 . . . . . 
        . . . . . . . . 9 9 . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, gaga, 50, 0)
    projectile.setKind(SpriteKind.gun)
})
sprites.onOverlap(SpriteKind.gun, SpriteKind.Enemy, function (sprite, otherSprite) {
    sprite.destroy()
    otherSprite.destroy(effects.fire, 500)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    info.changeLifeBy(-1)
    otherSprite.destroy()
})
let rob: Sprite = null
let projectile: Sprite = null
let gaga: Sprite = null
gaga = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . a a a a a a a a . . . . 
    . . . a 4 a a a a a a c a . . . 
    . . a c 4 a a a a a a c c a . . 
    . a c c 4 4 4 4 4 4 a c c 4 a d 
    . a c a e e e e e e e b c 4 a a 
    . a a e b b e b b b e e b 4 a a 
    . a e b b b e b b b b e a a a a 
    . e e a a a e a a a a a e a a a 
    . e e e e e e f e e e f e a 1 d 
    . e e e e e e f e e f e e e a d 
    . e e e e e e f f f e e e e e e 
    . e f f f f e e e e f f f e e e 
    . . f f f f f e e f f f f f e . 
    . . . f f f . . . . f f f f . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Player)
controller.moveSprite(gaga, 75, 75)
gaga.setStayInScreen(true)
info.setLife(3)
game.onUpdateInterval(500, function () {
    rob = sprites.create(img`
        ........................
        ........................
        ........................
        ........................
        ..........fffff.........
        ........ff1111bff.......
        .......fb1111111bf......
        .......f111111111f......
        ......fd1111111ffff.....
        ......fd111dd1c111bf....
        ......fb11fcdf1b1bff....
        ......f11111bfbfbff.....
        ......f1b1bdfcffff......
        ......fbfbfcfcccf.......
        ......ffffffffff........
        .........ffffff.........
        .........ffffff.........
        .........fffffff..f.....
        ..........fffffffff.....
        ...........fffffff......
        ........................
        ........................
        ........................
        ........................
        `, SpriteKind.Enemy)
    rob.setVelocity(-50, 0)
    rob.setPosition(160, randint(0, 120))
})
