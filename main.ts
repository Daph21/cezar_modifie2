let strip = neopixel.create(DigitalPin.P0, 6, NeoPixelMode.RGB)
let SoundLevel = 37
strip.setBrightness(10)
strip.show()
basic.forever(function () {
    basic.showNumber(input.soundLevel())
    basic.pause(100)
    strip.showColor(neopixel.colors(NeoPixelColors.Black))
    for (let No_DEL = 0; No_DEL <= 5; No_DEL++) {
        if (input.soundLevel() >= SoundLevel * No_DEL) {
            strip.setPixelColor(No_DEL, neopixel.colors(NeoPixelColors.Red))
        }
    }
    strip.show()
    basic.pause(1000)
})
