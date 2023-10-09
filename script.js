function valueButtons(x) {
    document.getElementById('display').value += x;
}
function clearDisplay(y) {
    document.getElementById('display').value = y;
}
function resultDisplay() {
    let result = eval(document.getElementById('display').value);
    document.getElementById('display').value = result;
}
function backspace() {
    let currentValue = document.getElementById('display').value;
    document.getElementById('display').value = currentValue.slice(0, -1);
}