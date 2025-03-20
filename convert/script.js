const numberInput = document.getElementById("number-input");
const convertBtn = document.getElementById("convert-btn");
const result = document.getElementById("result");
const animationContainer = document.getElementById("animation-container");
const convertBtnHex = document.getElementById("convert-btn-hex");
const numberInputHex = document.getElementById("number-input-hex").value;
const resultHex = document.getElementById("result-hex");

/*
document.getElementById("convert-btn-hex").addEventListener("click", function() {
// Get the user input value
const inputValue = document.getElementById("number-input-hex").value;
const outputBox = document.getElementById("result-hex");

    // Check if input is empty
    if (inputValue === "") {
        outputBox.textContent = "Please enter a number";
        return;
    }

    // Convert the decimal number to hexadecimal
    const hexValue = parseInt(inputValue, 10).toString(16).toUpperCase();

    // Display the result
    outputBox.textContent = `${hexValue}`;
});
*/ 


const decimalToBinary = (input) => {
  if (input === 0 || input === 1) {
    return String(input);
  } else {
    return decimalToBinary(Math.floor(input / 2)) + (input % 2);
  }
};

const decimalToHex = (inputHex) => {
 // Convert the decimal number to hexadecimal
 const hexValue = parseInt(inputHex, 10).toString(16).toUpperCase();

 // Display the result
 outputBox.textContent = `${hexValue}`;
};


const checkUserInput = () => {
  const inputInt = parseInt(numberInput.value);

  if (!numberInput.value || isNaN(inputInt) || inputInt < 0) {
    alert("Please provide a decimal number greater than or equal to 0");
    return;
  }

  result.textContent = decimalToBinary(inputInt);
  numberInput.value = "";
};

const checkUserInputHex = () => {
  const inputIntHex = parseInt(numberInputHex.value);

  if (!numberInputHex.value || isNaN(inputIntHex) || inputIntHex < 0) {
    alert("Please provide a decimal number greater than or equal to 0");
    return;
  }

  result.textContent = decimalToHex(inputIntHex);
  //numberInputHex.value = "";
};

convertBtn.addEventListener("click", checkUserInput);
convertBtnHex.addEventListener("click", checkUserInputHex);

numberInput.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    checkUserInput();
  }
});

