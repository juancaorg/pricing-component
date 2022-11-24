// Get all the price cost elements in an array.
const priceCostArr = document.querySelectorAll(".main__card--price-cost");
// Get the toggle switch checkbox.
const toggleSwitch = document.getElementById("main__toggle--switch");

toggleSwitch.addEventListener("change", () => {
  // If the toggleSwitch is checked, show monthly prices.
  // Otherwise, show annually prices (default).
  if (toggleSwitch.checked) {
    // Basic.
    priceCostArr[0].textContent = "19.99";
    // Professional.
    priceCostArr[1].textContent = "24.99";
    // Master.
    priceCostArr[2].textContent = "39.99";
  } else {
    // Basic.
    priceCostArr[0].textContent = "199.99";
    // Professional.
    priceCostArr[1].textContent = "249.99";
    // Master.
    priceCostArr[2].textContent = "399.99";
  }
});
