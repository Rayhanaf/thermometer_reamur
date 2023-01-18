let reamur = 0
basic.showString("TEMPERATURE NOW :")
basic.forever(function () {
    reamur = input.temperature() * 0.8
    basic.showNumber(reamur)
})
