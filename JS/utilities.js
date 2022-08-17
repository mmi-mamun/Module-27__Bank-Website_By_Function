// get total value from field 

function getTextElementValueById(elementID) {
    const getElementValue = document.getElementById(elementID);
    const elementValueString = getElementValue.innerText;
    const elementValue = parseFloat(elementValueString);
    return elementValue;
}


// Get input value from input field
function getInputFieldValueById(inputID) {
    const getInputValue = document.getElementById(inputID);
    const inputValueString = getInputValue.value;
    const inputValue = parseFloat(inputValueString);
    getInputValue.value = '';
    return inputValue;
}

//set final value after action
function setTextElementValueById(elementID, newValue) {
    const textElement = document.getElementById(elementID);
    textElement.innerText = newValue;

}
