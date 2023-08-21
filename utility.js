function getElementValuById (elementId){
    const element = document.getElementById(elementId);
    const elementValueString = element.innerText;
    const elementValue = parseFloat(elementValueString);

    return elementValue;
}

// function getInputValuById (InputId){
//     const input = document.getElementById(InputId);
//     const inputValueString = input.value;
//     const inputValue = parseFloat(inputValueString);

//     input.value = '';

//     return inputValue;
// }




function setTextElementById (elementId, newValue) {
    const textElement = document.getElementById(elementId);
    textElement.innerText = newValue;
}