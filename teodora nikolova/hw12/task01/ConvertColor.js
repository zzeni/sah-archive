function convert() {

    let redColor = Number(document.getElementById("exampleInputRed").value);
    let greenColor = Number(document.getElementById("exampleInputGreen").value);
    let blueColor = Number(document.getElementById("exampleInputBlue").value);
    let convertColorRed = redColor.toString(16);
    let convertColorGreen = greenColor.toString(16);
    let convertColorBlue = blueColor.toString(16);
    let totalColor = convertColorRed + convertColorGreen + convertColorBlue;


    document.getElementById("exampleInputConvertColor").setAttribute("value", "#" + totalColor);


}
