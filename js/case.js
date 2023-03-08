// for phone
function phonePlusBtn() {
  addItem("phone-quantity-field", "phone-price", 1219);
  total();
}
function phoneRemoveBtn() {
  removeItem("phone-quantity-field", "phone-price", 1219);
  total();
}
// for phone case
function casePlusBtn() {
  addItem("case-quantity-field", "case-price", 59);
  total();
}
function caseRemoveBtn() {
  removeItem("case-quantity-field", "case-price", 59);
  total();
}

// if (plus) button clicked than add one item and value set ti input field.
function addItem(elimentId, priceElement, price) {
  const inputField = document.getElementById(elimentId);

  const prvValue = parseFloat(inputField.value);
  const newValue = prvValue + 1;

  inputField.value = newValue;

  // step 2: for amount process

  const element = document.getElementById(priceElement);
  const newPrice = price * newValue;
  element.innerText = newPrice;
}
// if (Subtrsck) button clicked than add one item and value set ti input field.
function removeItem(elimentId, priceElement, price) {
  //step 1: for input field value
  const inputField = document.getElementById(elimentId);

  const prvValue = parseFloat(inputField.value);
  if (prvValue > 0) {
    const newValue = prvValue - 1;
    inputField.value = newValue;

    // step 2: for amount process
    const element = document.getElementById(priceElement);
    const newPrice = price * newValue;
    element.innerText = newPrice;
  } else {
    alert(`Cun't remove`);
  }
}

//total amount process
function total() {
  const casePriceElement = document.getElementById("case-price");
  const phonePriceElement = document.getElementById("phone-price");
  const subTototalElement = document.getElementById("s-total");
  const tototalElement = document.getElementById("total");

  const casePrice = parseFloat(casePriceElement.innerText);
  const phonePrice = parseFloat(phonePriceElement.innerText);

  subTototalElement.innerText = phonePrice + casePrice;
  tototalElement.innerText = phonePrice + casePrice;
}
