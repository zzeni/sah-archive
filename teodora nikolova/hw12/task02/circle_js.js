function parameter() {
    var radius = Number(document.getElementById("exampleRadius").value);
    var parameter = 2 * (Math.PI) * radius;
    var result = Math.round(parameter);

    document.getElementById("exampleParameter").setAttribute("value", "" + result);

}