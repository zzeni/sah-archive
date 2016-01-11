function linear(progress) {
    return progress
}



function circ(progress) {
    return 1 - Math.sin(Math.acos(progress))
}


function makeEaseInOut(delta) {
    return function (progress) {
        if (progress < .5)
            return delta(2 * progress) / 2
        else
            return (2 - delta(2 * (1 - progress))) / 2
    }
}

function makeEaseIn(delta) {
    return function (progress) {
        return delta(2 * progress) / 2
    }
}

function makeEaseOut(delta) {
    return function (progress) {
        return 1 - delta(1 - progress)
    }
}

function finish(progress) {
    return Math.pow(Math.E, -3 * progress) * Math.cos(20 * progress)
}

function parabole(progress) {
    return (-0.5 * Math.pow((progress - 1), 2) + 0.5)
}