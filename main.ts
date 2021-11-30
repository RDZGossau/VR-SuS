radio.onReceivedNumber(function (receivedNumber) {
    basic.showIcon(IconNames.Pitchfork)
    music.startMelody(music.builtInMelody(Melodies.Ode), MelodyOptions.Once)
    basic.pause(1000)
    basic.showNumber(MicroBitNr)
    for (let index = 0; index < 3; index++) {
        basic.showString("* VR *")
        basic.showArrow(ArrowNames.NorthEast)
    }
})
input.onButtonPressed(Button.A, function () {
    basic.showIcon(IconNames.Happy)
    music.playMelody("E G B C5 - - - - ", 190)
    basic.pause(4500)
})
input.onButtonPressed(Button.AB, function () {
    if (MicroBitNr >= 12) {
        MicroBitNr = 1
        radio.setGroup(MicroBitNr)
        basic.showNumber(MicroBitNr)
        music.playTone(175, music.beat(BeatFraction.Whole))
    } else {
        MicroBitNr += 1
        radio.setGroup(MicroBitNr)
        basic.showNumber(MicroBitNr)
        music.playTone(523, music.beat(BeatFraction.Whole))
    }
    basic.pause(1000)
})
radio.onReceivedString(function (receivedString) {
    if (receivedString == "PAUSE") {
        for (let index = 0; index < 3; index++) {
            soundExpression.yawn.playUntilDone()
            basic.showLeds(`
                . # . # .
                . # . # .
                . # . # .
                . # . # .
                . # . # .
                `)
            basic.pause(2000)
            basic.showString(receivedString)
            basic.clearScreen()
        }
    }
})
input.onButtonPressed(Button.B, function () {
    basic.showNumber(MicroBitNr)
    basic.pause(3000)
})
input.onGesture(Gesture.ThreeG, function () {
    for (let index = 0; index < 2; index++) {
        basic.showIcon(IconNames.Ghost)
        music.playMelody("C5 A B G A F G E ", 326)
    }
})
let MicroBitNr = 0
MicroBitNr = 1
radio.setGroup(MicroBitNr)
basic.showNumber(MicroBitNr)
basic.pause(3000)
basic.forever(function () {
    basic.showLeds(`
        # . . . #
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        `)
})
