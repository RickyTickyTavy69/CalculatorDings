const display = document.querySelector(".display");
const machine = document.querySelector(".machine");
let num1 = 0;
let num2 = 0;
let count = null;
let result = null;
let done = false;
let firstHalve = false; // true это когда есть Num1 и Count и на дисплее номер.
let update = false;

machine.addEventListener("click", (event) => {
  if (event.target.classList.contains("number")) {
    /*** IF Count and Num1 and you press a number, then the display will be cleaned */
    if (count && num1) {
      if (!firstHalve) {
        display.innerHTML = "";
        firstHalve = true; // есть Num1, Count и введён номер на дисплее.
      }
    }
    /*** IF Count and Num1 and you press a number, then the display will be cleaned */

    if (done) {
      display.innerHTML = "";
      done = false;
    } // если нажато равно, т.е. пример решён, то сдед введённый номер будет сначала, т.е. экран почистится
    if (count && firstHalve) {
      num2 = num2 + event.target.innerHTML;
      console.log("html", event.target.innerHTML);
      console.log("here", num1, count, num2);
    }

    if (count && num2) {
      firstHalve = true;
    }

    if (!update) {
      display.innerHTML = display.innerHTML + event.target.innerHTML; // это слияние происходит по умолчанию
    } else {
      update = false;
    }
  }
  if (event.target.classList.contains("point")) {
    console.log("point");
    if (display.innerHTML.indexOf(".") === -1) {
      console.log();
      display.innerHTML = display.innerHTML + event.target.innerHTML;
      if (firstHalve) {
        num2 = num2 + event.target.innerHTML;
      }
    }
  }

  /*****************RESET&DELL*/
  if (event.target.classList.contains("reset")) {
    display.innerHTML = "";
    num1 = 0;
    num2 = 0;
    count = null;
    result = null;
    firstHalve = false; // true это когда есть Num1 и Count и на дисплее номер.
    update = false;
  }
  if (event.target.classList.contains("del")) {
    if (num2) {
      num2 = num2.substring(0, num2.length - 2); /// стирает последнюю введёную цифру в num2.
      display.innerHTML = display.innerHTML //////* здесь, должна быть проверка, если введён знак, удаляется только знак, а не часть строки в дисплее.
        .toString()
        .substring(0, display.innerHTML.toString().length - 1);
    } else if (count) {
      count = null;
    } else if (!num1 && !count) {
      display.innerHTML = display.innerHTML //////* здесь, должна быть проверка, если введён знак, удаляется только знак, а не часть строки в дисплее.
        .toString()
        .substring(0, display.innerHTML.toString().length - 1);
    }
    console.log("del", num1, count, num2);
  }
  /****************RESET&DELL****/

  /****************DEFINES COUNT & NUM1 IF COUNT IS PRESSED***/
  if (event.target.classList.contains("count")) {
    if (!num2) {
      num1 = display.innerHTML;
      count = event.target.innerHTML;
    } else if (num2) {
      switch (count) {
        case (count = "+"):
          num1 = Number(num1) + Number(num2);
          break;

        case (count = "-"):
          num1 = Number(num1) - Number(num2);
          break;

        case (count = "/"):
          num1 = Number(num1) / Number(num2);
          break;

        case (count = "x"):
          num1 = Number(num1) * Number(num2);
          break;
      }

      num2 = 0;
      console.log("update", num1, count, num2);
      display.innerHTML = num1;
      update = true;
    }
  }
  /******************DEFINES COUNT & NUM1 IF COUNT IS PRESSED ***/

  if (event.target.classList.contains("is")) {
    console.log("is");
    switch (count) {
      case (count = "+"):
        result = Number(num1) + Number(num2);
        break;
      case (count = "-"):
        result = Number(num1) - Number(num2);
        break;
      case (count = "x"):
        result = Number(num1) * Number(num2);
        break;
      case (count = "/"):
        result = Number(num1) / Number(num2);
        break;
    }

    display.innerHTML = result;
    count = 0;
    done = true;
    num2 = 0;
    firstHalve = false;
  }
});
