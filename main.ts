radio.onReceivedNumber(function (receivedNumber) {
    basic.showIcon(IconNames.Pitchfork)
    music.startMelody(music.builtInMelody(Melodies.Ode), MelodyOptions.Once)
    basic.pause(1000)
    for (let index = 0; index < 3; index++) {
        basic.showString("* VR")
        basic.showArrow(ArrowNames.NorthEast)
    }
    basic.showNumber(MicroBitNr)
})
input.onButtonPressed(Button.A, function () {
    radio.sendString("HALLO BUDDY")
    basic.showIcon(IconNames.Happy)
    music.playMelody("- A A F A - - - ", 200)
    basic.showIcon(IconNames.Happy)
    basic.pause(5000)
})
input.onGesture(Gesture.SixG, function () {
    for (let index = 0; index < 1; index++) {
        basic.showIcon(IconNames.Ghost)
        music.playMelody("C5 A B G A F G E ", 326)
    }
})
// Damit kann der Damit kann der Funkkanal um 1 erhöht und damit geändert werden.
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
            music.startMelody(music.builtInMelody(Melodies.JumpUp), MelodyOptions.Once)
            basic.showLeds(`
                . # . # .
                . # . # .
                . # . # .
                . # . # .
                . # . # .
                `)
            basic.pause(2000)
            basic.showString(receivedString)
        }
        basic.showLeds(`
            . # . # .
            . # . # .
            . # . # .
            . # . # .
            . # . # .
            `)
        basic.pause(5000)
    } else {
        for (let index = 0; index < 2; index++) {
            basic.showIcon(IconNames.Happy)
            music.playMelody("- - C5 A C5 - - - ", 200)
            basic.showString(receivedString)
            basic.showIcon(IconNames.Happy)
            basic.pause(2000)
        }
    }
})
input.onButtonPressed(Button.B, function () {
    basic.showNumber(MicroBitNr)
    music.playMelody("F - F - - - - - ", 200)
    basic.showNumber(MicroBitNr)
    basic.pause(2000)
})
let MicroBitNr = 0
// Bitte diesen WERT vor dem Download auf das jeweilge M:B-Paar anpassen!!
MicroBitNr = 12
radio.setGroup(MicroBitNr)
basic.showNumber(MicroBitNr)
basic.pause(3000)
// Leuchtdioden zeigen an, dass der MB eingeschaltet ist.
basic.forever(function () {
    basic.showLeds(`
        # . . . #
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        `)
})
