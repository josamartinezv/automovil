def avanzarPorCarril(núm: number):
    global numeroCarril, x, y
    numeroCarril = x
    if núm == 0:
        x = 0
        y = 0
        for index in range(5):
            if y < 1:
                basic.show_leds("""
                    # . . . .
                                        . . . . .
                                        . . . . .
                                        . . . . .
                                        . . . . .
                """)
            elif y < 2:
                basic.show_leds("""
                    . . . . .
                                        # . . . .
                                        . . . . .
                                        . . . . .
                                        . . . . .
                """)
            elif y < 3:
                basic.show_leds("""
                    . . . . .
                                        . . . . .
                                        # . . . .
                                        . . . . .
                                        . . . . .
                """)
            elif y < 4:
                basic.show_leds("""
                    . . . . .
                                        . . . . .
                                        . . . . .
                                        # . . . .
                                        . . . . .
                """)
            else:
                basic.show_leds("""
                    . . . . .
                                        . . . . .
                                        . . . . .
                                        . . . . .
                                        # . . . .
                """)
            y += 1
    else:
        if núm == 1:
            x = 1
            y = 0
            for index2 in range(5):
                if y < 1:
                    basic.show_leds("""
                        . # . . .
                                                . . . . .
                                                . . . . .
                                                . . . . .
                                                . . . . .
                    """)
                elif y < 2:
                    basic.show_leds("""
                        . . . . .
                                                . # . . .
                                                . . . . .
                                                . . . . .
                                                . . . . .
                    """)
                elif y < 3:
                    basic.show_leds("""
                        . . . . .
                                                . . . . .
                                                . # . . .
                                                . . . . .
                                                . . . . .
                    """)
                elif y < 4:
                    basic.show_leds("""
                        . . . . .
                                                . . . . .
                                                . . . . .
                                                . # . . .
                                                . . . . .
                    """)
                else:
                    basic.show_leds("""
                        . . . . .
                                                . . . . .
                                                . . . . .
                                                . . . . .
                                                . # . . .
                    """)
                y += 1
        else:
            if núm == 2:
                x = 2
                y = 0
                for index3 in range(5):
                    if y < 1:
                        basic.show_leds("""
                            . . # . .
                                                        . . . . .
                                                        . . . . .
                                                        . . . . .
                                                        . . . . .
                        """)
                    elif y < 2:
                        basic.show_leds("""
                            . . . . .
                                                        . . # . .
                                                        . . . . .
                                                        . . . . .
                                                        . . . . .
                        """)
                    elif y < 3:
                        basic.show_leds("""
                            . . . . .
                                                        . . . . .
                                                        . . # . .
                                                        . . . . .
                                                        . . . . .
                        """)
                    elif y < 4:
                        basic.show_leds("""
                            . . . . .
                                                        . . . . .
                                                        . . . . .
                                                        . . # . .
                                                        . . . . .
                        """)
                    else:
                        basic.show_leds("""
                            . . . . .
                                                        . . . . .
                                                        . . . . .
                                                        . . . . .
                                                        . . # . .
                        """)
                    y += 1
            else:
                if núm == 3:
                    x = 3
                    y = 0
                    for index4 in range(5):
                        if y < 1:
                            basic.show_leds("""
                                . . . # .
                                                                . . . . .
                                                                . . . . .
                                                                . . . . .
                                                                . . . . .
                            """)
                        elif y < 2:
                            basic.show_leds("""
                                . . . . .
                                                                . . . # .
                                                                . . . . .
                                                                . . . . .
                                                                . . . . .
                            """)
                        elif y < 3:
                            basic.show_leds("""
                                . . . . .
                                                                . . . . .
                                                                . . . # .
                                                                . . . . .
                                                                . . . . .
                            """)
                        elif y < 4:
                            basic.show_leds("""
                                . . . . .
                                                                . . . . .
                                                                . . . . .
                                                                . . . # .
                                                                . . . . .
                            """)
                        else:
                            basic.show_leds("""
                                . . . . .
                                                                . . . . .
                                                                . . . . .
                                                                . . . . .
                                                                . . . # .
                            """)
                        y += 1
                elif núm == 4:
                    x = 4
                    y = 0
                    for index5 in range(5):
                        if y < 1:
                            basic.show_leds("""
                                . . . . #
                                                                . . . . .
                                                                . . . . .
                                                                . . . . .
                                                                . . . . .
                            """)
                        elif y < 2:
                            basic.show_leds("""
                                . . . . .
                                                                . . . . #
                                                                . . . . .
                                                                . . . . .
                                                                . . . . .
                            """)
                        elif y < 3:
                            basic.show_leds("""
                                . . . . .
                                                                . . . . .
                                                                . . . . #
                                                                . . . . .
                                                                . . . . .
                            """)
                        elif y < 4:
                            basic.show_leds("""
                                . . . . .
                                                                . . . . .
                                                                . . . . .
                                                                . . . . #
                                                                . . . . .
                            """)
                        else:
                            basic.show_leds("""
                                . . . . .
                                                                . . . . .
                                                                . . . . .
                                                                . . . . .
                                                                . . . . #
                            """)
                        y += 1
                else:
                    basic.show_string("ABISMO")
                    basic.show_number(x)

def on_button_pressed_a():
    basic.pause(100)
    cambiarCarrilIzquierda()
    basic.pause(100)
input.on_button_pressed(Button.A, on_button_pressed_a)

def on_button_pressed_ab():
    global Carril
    basic.pause(100)
    Carril = randint(0, 4)
    avanzarPorCarril(Carril)
input.on_button_pressed(Button.AB, on_button_pressed_ab)

def on_button_pressed_b():
    basic.pause(100)
    cambiarCarrilDerecha()
    basic.pause(100)
input.on_button_pressed(Button.B, on_button_pressed_b)

def cambiarCarrilDerecha():
    global x
    basic.pause(500)
    basic.show_arrow(ArrowNames.EAST)
    basic.pause(500)
    x += 1
    avanzarPorCarril(x)

def on_logo_touched():
    basic.show_string("Hola, soy ")
    basic.pause(100)
    basic.show_string("VALERIA MENDEZ ESCOBAR")
    basic.pause(100)
input.on_logo_event(TouchButtonEvent.TOUCHED, on_logo_touched)

def cambiarCarrilIzquierda():
    global x
    basic.pause(500)
    basic.show_arrow(ArrowNames.WEST)
    basic.pause(500)
    x += -1
    avanzarPorCarril(x)
Carril = 0
y = 0
x = 0
numeroCarril = 0
basic.show_icon(IconNames.HEART)
basic.pause(100)

def on_forever():
    pass
basic.forever(on_forever)
