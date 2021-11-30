def on_received_number(receivedNumber):
    basic.show_icon(IconNames.PITCHFORK)
    basic.pause(1000)
    basic.show_number(MicroBitNr)
    music.start_melody(music.built_in_melody(Melodies.ODE), MelodyOptions.ONCE)
    for index in range(3):
        basic.show_string("* VR *")
        basic.show_arrow(ArrowNames.NORTH_EAST)
radio.on_received_number(on_received_number)

def on_button_pressed_a():
    basic.show_icon(IconNames.HAPPY)
    music.play_melody("E G B C5 - - - - ", 190)
    basic.pause(4500)
input.on_button_pressed(Button.A, on_button_pressed_a)

def on_button_pressed_ab():
    global MicroBitNr
    if MicroBitNr >= 12:
        MicroBitNr = 1
        radio.set_group(MicroBitNr)
        basic.show_number(MicroBitNr)
        music.play_tone(175, music.beat(BeatFraction.WHOLE))
    else:
        MicroBitNr += 1
        radio.set_group(MicroBitNr)
        basic.show_number(MicroBitNr)
        music.play_tone(523, music.beat(BeatFraction.WHOLE))
    basic.pause(1000)
input.on_button_pressed(Button.AB, on_button_pressed_ab)

def on_received_string(receivedString):
    if receivedString == "PAUSE":
        soundExpression.yawn.play_until_done()
        for index2 in range(4):
            basic.show_leds("""
                . # . # .
                                . # . # .
                                . # . # .
                                . # . # .
                                . # . # .
            """)
            basic.pause(1000)
            basic.show_string(receivedString)
            basic.clear_screen()
radio.on_received_string(on_received_string)

def on_button_pressed_b():
    basic.show_number(MicroBitNr)
    basic.pause(3000)
input.on_button_pressed(Button.B, on_button_pressed_b)

def on_gesture_three_g():
    for index3 in range(2):
        basic.show_icon(IconNames.GHOST)
        music.play_melody("C5 A B G A F G E ", 326)
input.on_gesture(Gesture.THREE_G, on_gesture_three_g)

MicroBitNr = 0
MicroBitNr = 1
radio.set_group(MicroBitNr)
basic.show_number(MicroBitNr)
basic.pause(3000)

def on_forever():
    basic.show_leds("""
        # . . . #
                . . . . .
                . . . . .
                . . . . .
                . . . . .
    """)
basic.forever(on_forever)
