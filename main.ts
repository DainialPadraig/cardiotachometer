controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    info.changeScoreBy(1)
})
info.onCountdownEnd(function () {
    pause(2000)
    game.splash("Your pulse rate is " + info.score() * 4)
})
game.splash("Press button A to measure your heart rate")
info.setScore(0)
info.startCountdown(15)
