basic.forever(function () {
    if (input.compassHeading() == 90) {
        basic.showArrow(ArrowNames.East)
    } else if (input.compassHeading() == 180) {
        basic.showArrow(ArrowNames.South)
    } else {
        basic.showIcon(IconNames.No)
    }
})
