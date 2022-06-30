const display = document.querySelector(".display");
const machine = document.querySelector(".machine");
let num1 = null;
let num2 = null;
let count = null;
let result = null;
let done = false;
let firstHalve = false;

machine.addEventListener("click", (event) => {
  if (event.target.classList.contains("number")) {
    if (done) {
      display.innerHTML = "";
      done = false;
    } // если нажато равно, т.е. пример решён, то сдед введённый номер будет сначала, т.е. экран почистится
    if (count) {
      console.log("hier count", count);
      display.innerHTML = event.target.innerHTML;
      num2 = display.innerHTML;

      if (count === "+") {
        num1 = Number(num1) + Number(num2);
      }
      if (count === "-") {
        num1 = Number(num1) - Number(num2);
      }
      if (count === "/") {
        num1 = Number(num1) / Number(num2);
      }
      if (count === "*") {
        num1 = Number(num1) * Number(num2);
      }
      if (display.innerHTML.indexOf(".") === -1) {
        // если я нажал число без точки и знак, то экран почистится и будет след. число сначала.
        display.innerHTML = "";
      }
      /*if (num2) {
        if (count === "+") {
          num1 = Number(num1) + Number(num2);
        }
        if (count === "-") {
          num1 = Number(num1) - Number(num2);
        }
        if (count === "/") {
          num1 = Number(num1) / Number(num2);
        }
        if (count === "*") {
          num1 = Number(num1) * Number(num2);
        }
      }*/
    }
    if (display.innerHTML.indexOf(".") !== -1 && count) {
      if (firstHalve !== true) {
        display.innerHTML = "";
        firstHalve = true;
      }
      // нужно трекать, что первая половина уровнения введена, так как во второй он не должен чистить скрин и дать ввести дробь
    }

    display.innerHTML = display.innerHTML + event.target.innerHTML; // это слияние происходит по умолчанию
  }
  if (event.target.classList.contains("point")) {
    if (display.innerHTML.indexOf(".") === -1) {
      display.innerHTML = display.innerHTML + event.target.innerHTML;
    }
  }
  if (event.target.classList.contains("reset")) {
    display.innerHTML = "";
  }
  if (event.target.classList.contains("del")) {
    display.innerHTML = display.innerHTML
      .toString()
      .substring(0, display.innerHTML.toString().length - 1);
  }
  if (event.target.classList.contains("count")) {
    if (!num2) {
      num1 = display.innerHTML;
      count = event.target.innerHTML;
      //display.innerHTML = "";
      // bis hier geht
    }
  }
  if (event.target.classList.contains("is")) {
    //const num2 = display.innerHTML; ///
    //console.log("count...", num1, num2, count);
    display.innerHTML = num1;
    count = null;
    done = true;
    num2 = null;
    /*if (count === "-") {
      //let result = Number(num1) - Number(num2);
      //console.log("result", result);
      //display.innerHTML = result;
      count = null;
      done = true;
      firstHalve = false;
    }
    if (count === "+") {
      let result = Number(num1) + Number(num2);
      //console.log("result", result);
      display.innerHTML = result;
      count = null;
      done = true;
      firstHalve = false;
    }
    if (count === "/") {
      display.innerHTML = Number(num1) / Number(num2);
      count = null;
      done = true;
      firstHalve = false;
    }
    if (count === "x") {
      display.innerHTML = Number(num1) * Number(num2);
      count = null;
      done = true;
      firstHalve = false;
    }*/
  }
});

/* NUM2 Должен записыватья не при нажатии равно, а при нажатии на номер, если уже есть num1 и count,
то второй номер должен автомфтически записываться в Num2. На тот случай, если нажимается 5+5+5+5
Например, он должен переписывать num1, добавляя в него новые значения, если уже есть Num1, count и
num2
*/
