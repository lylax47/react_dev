function setColorValue() {
    return Math.floor(Math.random() * 256);
}

function chooseColor() {
    let r = setColorValue();
    let b = setColorValue();
    let g = setColorValue();
    return `rgb(${r},${g},${b})`;
}

export default chooseColor;