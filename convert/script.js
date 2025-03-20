// Get elements
const numberInput = document.getElementById("number-input");
const convertBtn = document.getElementById("convert-btn");
const result = document.getElementById("result");
const convertBtnHex = document.getElementById("convert-btn-hex");
const resultHex = document.getElementById("result-hex");

// Function to convert decimal to binary
const decimalToBinary = (input) => {
  if (input === 0 || input === 1) {
    return String(input);
  } else {
    return decimalToBinary(Math.floor(input / 2)) + (input % 2);
  }
};

// Function to convert decimal to hexadecimal
const decimalToHex = (inputHex) => {
  return parseInt(inputHex, 10).toString(16).toUpperCase();
};

// Function to check and process binary conversion
const checkUserInput = () => {
  const inputInt = parseInt(numberInput.value);

  if (!numberInput.value || isNaN(inputInt) || inputInt < 0) {
    alert("Please provide a decimal number greater than or equal to 0");
    return;
  }

  result.textContent = `${decimalToBinary(inputInt)}`;
  numberInput.value = "";
};

// Function to check and process hexadecimal conversion
const checkUserInputHex = () => {
  const numberInputHex = document.getElementById("number-input-hex").value; // Get value inside function
  const inputIntHex = parseInt(numberInputHex);

  if (!numberInputHex || isNaN(inputIntHex) || inputIntHex < 0) {
    alert("Please provide a decimal number greater than or equal to 0");
    return;
  }

  resultHex.textContent = `${decimalToHex(inputIntHex)}`;
};

// Add event listeners for button clicks
convertBtn.addEventListener("click", checkUserInput);
convertBtnHex.addEventListener("click", checkUserInputHex);

// Allow "Enter" key to trigger binary conversion
numberInput.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    checkUserInput();
  }
});

document.getElementById("number-input-hex").addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    checkUserInputHex();
  }
});

 
