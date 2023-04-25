function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    if (b == 0) {
        return "La división por cero no está definida.";
    } else {
        return a / b;
    }
}

function pow(a, b) {}

export default {
    add: add,
    sub: subtract,
    mul: multiply,
    div: divide,
    pow: pow
}