function calculateTriangleArea(){
    // get base value
    const baseField = document.getElementById('triangle-base');
    const baseValuText = baseField.value;
    const base = parseFloat(baseValuText);
    console.log(base);

    // get height value
    const heightField = document.getElementById('triangle-height');
    const heightValue = heightField.value;
    const height = parseFloat(heightValue);
    console.log(height)

    const area = 0.5 * base * height;
    console.log(area)
    // SHow area of triangle
    const areaSpan = document.getElementById('triangel-area');
    areaSpan.innerText = area;
}
// Calculate rectangle area

function calculateRectangleArea(){
    const widthField = document.getElementById('rectangle-width');
    const widthValue = widthField.value;
    const width = parseFloat(widthValue);
    console.log(width);
    // get length value
    const lengthField = document.getElementById('rectangle-length');
    const lengthValue = lengthField.value;
    const length = parseFloat(lengthValue);
    console.log(length)

    const area = length * width;
    console.log(area)
    // show area
    const rectangleArea = document.getElementById('rectangle-area');
    rectangleArea.innerText = area;
}
// reuseable code reduce code
function calculateParallelogramArea(){
    const base = getInputValue('parallegram-base');
    console.log(base);
    const height = getInputValue('parallegram-height');
    console.log(height);
    const area = base * height;
    setElementInnerText('parallegram-area', area)
}
function calculateEllipsArea(){
    const majorRadius = getInputValue('ellips-first-radius');
    const minorRadious = getInputValue('ellips-second-radius');
    const area = 3.14 * majorRadius * minorRadious;
    setElementInnerText('ellips-area', area)
}
// reuse able get input value field in number
function getInputValue(fieldId){
    const inputField = document.getElementById(fieldId);
    const inputValueText = inputField.value;
    const value = parseFloat(inputValueText);
    return value;
}
// reuseable set span, p, div, etc text
function setElementInnerText(elementId, area){
    const element = document.getElementById(elementId);
    element.innerText = area;
}