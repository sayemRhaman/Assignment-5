function getElementValuById (elementId){
    const element = document.getElementById(elementId);
    const elementValueString = element.innerText;
    const elementValue = parseFloat(elementValueString);

    return elementValue;
}


function setTextElementById (elementId, newValue) {
    const textElement = document.getElementById(elementId);
    textElement.innerText = newValue;
}