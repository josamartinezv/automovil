function avanzarPorCarril(núm: number) {
    
    numeroCarril = x
    if (núm == 0) {
        x = 0
        y = 0
        for (let index = 0; index < 5; index++) {
            if (y < 1) {
                basic.showLeds(`
                    # . . . .
                                        . . . . .
                                        . . . . .
                                        . . . . .
                                        . . . . .
                `)
            } else if (y < 2) {
                basic.showLeds(`
                    . . . . .
                                        # . . . .
                                        . . . . .
                                        . . . . .
                                        . . . . .
                `)
            } else if (y < 3) {
                basic.showLeds(`
                    . . . . .
                                        . . . . .
                                        # . . . .
                                        . . . . .
                                        . . . . .
                `)
            } else if (y < 4) {
                basic.showLeds(`
                    . . . . .
                                        . . . . .
                                        . . . . .
                                        # . . . .
                                        . . . . .
                `)
            } else {
                basic.showLeds(`
                    . . . . .
                                        . . . . .
                                        . . . . .
                                        . . . . .
                                        # . . . .
                `)
            }
            
            y += 1
        }
    } else if (núm == 1) {
        x = 1
        y = 0
        for (let index2 = 0; index2 < 5; index2++) {
            if (y < 1) {
                basic.showLeds(`
                        . # . . .
                                                . . . . .
                                                . . . . .
                                                . . . . .
                                                . . . . .
                    `)
            } else if (y < 2) {
                basic.showLeds(`
                        . . . . .
                                                . # . . .
                                                . . . . .
                                                . . . . .
                                                . . . . .
                    `)
            } else if (y < 3) {
                basic.showLeds(`
                        . . . . .
                                                . . . . .
                                                . # . . .
                                                . . . . .
                                                . . . . .
                    `)
            } else if (y < 4) {
                basic.showLeds(`
                        . . . . .
                                                . . . . .
                                                . . . . .
                                                . # . . .
                                                . . . . .
                    `)
            } else {
                basic.showLeds(`
                        . . . . .
                                                . . . . .
                                                . . . . .
                                                . . . . .
                                                . # . . .
                    `)
            }
            
            y += 1
        }
    } else if (núm == 2) {
        x = 2
        y = 0
        for (let index3 = 0; index3 < 5; index3++) {
            if (y < 1) {
                basic.showLeds(`
                            . . # . .
                                                        . . . . .
                                                        . . . . .
                                                        . . . . .
                                                        . . . . .
                        `)
            } else if (y < 2) {
                basic.showLeds(`
                            . . . . .
                                                        . . # . .
                                                        . . . . .
                                                        . . . . .
                                                        . . . . .
                        `)
            } else if (y < 3) {
                basic.showLeds(`
                            . . . . .
                                                        . . . . .
                                                        . . # . .
                                                        . . . . .
                                                        . . . . .
                        `)
            } else if (y < 4) {
                basic.showLeds(`
                            . . . . .
                                                        . . . . .
                                                        . . . . .
                                                        . . # . .
                                                        . . . . .
                        `)
            } else {
                basic.showLeds(`
                            . . . . .
                                                        . . . . .
                                                        . . . . .
                                                        . . . . .
                                                        . . # . .
                        `)
            }
            
            y += 1
        }
    } else if (núm == 3) {
        x = 3
        y = 0
        for (let index4 = 0; index4 < 5; index4++) {
            if (y < 1) {
                basic.showLeds(`
                                . . . # .
                                                                . . . . .
                                                                . . . . .
                                                                . . . . .
                                                                . . . . .
                            `)
            } else if (y < 2) {
                basic.showLeds(`
                                . . . . .
                                                                . . . # .
                                                                . . . . .
                                                                . . . . .
                                                                . . . . .
                            `)
            } else if (y < 3) {
                basic.showLeds(`
                                . . . . .
                                                                . . . . .
                                                                . . . # .
                                                                . . . . .
                                                                . . . . .
                            `)
            } else if (y < 4) {
                basic.showLeds(`
                                . . . . .
                                                                . . . . .
                                                                . . . . .
                                                                . . . # .
                                                                . . . . .
                            `)
            } else {
                basic.showLeds(`
                                . . . . .
                                                                . . . . .
                                                                . . . . .
                                                                . . . . .
                                                                . . . # .
                            `)
            }
            
            y += 1
        }
    } else if (núm == 4) {
        x = 4
        y = 0
        for (let index5 = 0; index5 < 5; index5++) {
            if (y < 1) {
                basic.showLeds(`
                                . . . . #
                                                                . . . . .
                                                                . . . . .
                                                                . . . . .
                                                                . . . . .
                            `)
            } else if (y < 2) {
                basic.showLeds(`
                                . . . . .
                                                                . . . . #
                                                                . . . . .
                                                                . . . . .
                                                                . . . . .
                            `)
            } else if (y < 3) {
                basic.showLeds(`
                                . . . . .
                                                                . . . . .
                                                                . . . . #
                                                                . . . . .
                                                                . . . . .
                            `)
            } else if (y < 4) {
                basic.showLeds(`
                                . . . . .
                                                                . . . . .
                                                                . . . . .
                                                                . . . . #
                                                                . . . . .
                            `)
            } else {
                basic.showLeds(`
                                . . . . .
                                                                . . . . .
                                                                . . . . .
                                                                . . . . .
                                                                . . . . #
                            `)
            }
            
            y += 1
        }
    } else {
        basic.showString("ABISMO")
        basic.showNumber(x)
    }
    
}

input.onButtonPressed(Button.A, function on_button_pressed_a() {
    basic.pause(100)
    cambiarCarrilIzquierda()
    basic.pause(100)
})
input.onButtonPressed(Button.AB, function on_button_pressed_ab() {
    
    basic.pause(100)
    Carril = randint(0, 4)
    avanzarPorCarril(Carril)
})
input.onButtonPressed(Button.B, function on_button_pressed_b() {
    basic.pause(100)
    cambiarCarrilDerecha()
    basic.pause(100)
})
function cambiarCarrilDerecha() {
    
    basic.pause(500)
    basic.showArrow(ArrowNames.East)
    basic.pause(500)
    x += 1
    avanzarPorCarril(x)
}

input.onLogoEvent(TouchButtonEvent.Touched, function on_logo_touched() {
    basic.showString("Hola, soy ")
    basic.pause(100)
    basic.showString("VALERIA MENDEZ ESCOBAR")
    basic.pause(100)
})
function cambiarCarrilIzquierda() {
    
    basic.pause(500)
    basic.showArrow(ArrowNames.West)
    basic.pause(500)
    x += -1
    avanzarPorCarril(x)
}

let Carril = 0
let y = 0
let x = 0
let numeroCarril = 0
basic.showIcon(IconNames.Heart)
basic.pause(100)
basic.forever(function on_forever() {
    
})
