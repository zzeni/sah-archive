function calc(x) {
    if (x % 2 == 0) {
        return x * x;
    }
    else {
        return x * x * x;
    }
}

document.write(calc(7));