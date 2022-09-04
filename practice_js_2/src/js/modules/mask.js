const mask = (selector) => {
  const setCursorPosition = (pos, elem) => {
    elem.focus();
    if (elem.setSelectionRange) {
      elem.setSelectionRange(pos, pos);
    } else if (elem.createTextRange) {
      const range = elem.createTextRange();
      range.collaps(true);
      range.moveEnd("character", pos);
      range.moveStart("character", pos);
      range.select();
    }
  };
  function createMask(event) {
    let matrix = "+7 (___) ___ __ __",
      i = 0,
      def = matrix.replace(/\D/g, ""),
      val = this.value.replace(/\D/g, "");

    if (def.length >= val.length) {
      val = def;
    }
    this.value = matrix.replace(/./g, function (arg) {
      return /[_\d]/.test(arg) && i < val.length
        ? val.charAt(i++)
        : i >= val.length
        ? ""
        : arg;
    });

    if (event.type === "blur") {
      if (this.value.length == 2) {
        this.value = "";
      }
    } else {
      setCursorPosition(this.value.length, this);
    }
  }
  const inputs = document.querySelectorAll(selector);
  inputs.forEach((input) => {
    input.addEventListener("input", createMask);
    input.addEventListener("blur", createMask);
    input.addEventListener("click", createMask);
    input.addEventListener("focus", createMask);
  });
};

export default mask;
