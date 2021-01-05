let oyun_durumu = false
let kostebek = 0
let buton_durum = false
let kosetebegin_cikis_zamanı = 0
basic.forever(function () {
    basic.showString("3-2-1")
    oyun_durumu = true
    while (true) {
        kostebek = randint(0, 1)
        buton_durum = false
        basic.pause(300)
        if (kostebek == 0) {
            basic.showLeds(`
                # . . . .
                # . . . .
                # . . . .
                . . . . .
                # . . . .
                `)
        }
        if (kostebek == 1) {
            basic.showLeds(`
                . . . . #
                . . . . #
                . . . . #
                . . . . .
                . . . . #
                `)
        }
        kosetebegin_cikis_zamanı = input.runningTime()
        while (buton_durum == false) {
            if (input.runningTime() - kosetebegin_cikis_zamanı > 1000) {
                game.gameOver()
            }
            if (kostebek == 0 && input.buttonIsPressed(Button.A)) {
                buton_durum = true
                basic.showIcon(IconNames.Yes)
                game.addScore(1)
            } else if (kostebek == 0 && input.buttonIsPressed(Button.B)) {
                game.gameOver()
            }
            if (kostebek == 1 && input.buttonIsPressed(Button.B)) {
                buton_durum = true
                basic.showIcon(IconNames.Yes)
                game.addScore(1)
            } else if (kostebek == 1 && input.buttonIsPressed(Button.A)) {
                game.gameOver()
            }
        }
    }
})
