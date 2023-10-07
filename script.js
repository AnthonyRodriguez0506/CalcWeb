function valueButtons(x) {
    document.getElementById('display').value += x;
}
function clearDisplay(y) {
    document.getElementById('display').value = y;
}
function resultDisplay() {
    var result = eval(document.getElementById('display').value);
    document.getElementById('display').value = result;
}