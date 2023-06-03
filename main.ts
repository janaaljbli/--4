let rain: game.LedSprite = null
basic.forever(function () {
    rain = game.createSprite(randint(0, 4), 2)
    for (let index = 0; index < 4; index++) {
        rain.change(LedSpriteProperty.Y, 1)
        basic.pause(100)
    }
    rain.delete()
})
