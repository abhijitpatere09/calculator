const display = document.querySelector(".disp");
const buttons = document.querySelectorAll("button");

buttons.forEach((v) => {
  v.onclick = () => {
    try {
      if (v.dataset.button === "C") {
        display.value = "";
      } else if (v.dataset.button === "CE") {
        let val = display.value;
        display.value = val.substr(0, val.length - 1);
      } else if (v.dataset.button === "=") {
        if (display.value !== "") {
          display.value = eval(display.value);
        }
      } else {
        display.value += v.dataset.button;
      }
    } catch (err) {
      display.value = "Invalid Input";
      setTimeout(() => (display.value = ""), 1000);
    }
  };
});
