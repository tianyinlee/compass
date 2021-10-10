basic.forever(function () {
    if (input.compassHeading() == 90) {
        basic.showArrow(ArrowNames.East)
    } else {
        basic.showIcon(IconNames.No)
    }
})
