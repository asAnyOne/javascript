"use strict";
function closure() {
  let num = 0;
  function incr() {
    num++;

    console.log(num);
  }
  return incr;
}

const counter = closure();
counter();
counter();
counter();
counter();
