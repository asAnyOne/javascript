const calc = (size, material, options, promocode, result) => {
  const sizeBlock = document.querySelector(size),
    materialBlock = document.querySelector(material),
    optionsBlock = document.querySelector(options),
    promocodeBlock = document.querySelector(promocode),
    resultBlock = document.querySelector(result);

  let sum = 0;

  const calcFunction = () => {
    sum = +sizeBlock.value * +materialBlock.value + +optionsBlock.value;
    if (sizeBlock.value === "") {
      resultBlock.textContent = "Для расчета нужно выбрать, и размер  картины";
    } else if (materialBlock.value === "") {
      resultBlock.textContent =
        "Для расчета нужно выбрать , и материал картины";
    } else if (promocodeBlock.value === "IWANTPOPART") {
      resultBlock.textContent = Math.round(sum * 0.7);
    } else {
      resultBlock.textContent = Math.round(sum);
    }
  };

  sizeBlock.addEventListener("change", calcFunction);
  materialBlock.addEventListener("change", calcFunction);
  optionsBlock.addEventListener("change", calcFunction);
  promocodeBlock.addEventListener("input", calcFunction);
};
export default calc;
