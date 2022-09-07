const drop = () => {
  const fileInputs = document.querySelectorAll("[name=upload]");

  ["dragenter", "dragleave", "dragover", "drop"].forEach((eventName) => {
    fileInputs.forEach((input) => {
      input.addEventListener(eventName, preventDefaults, false);
    });
  });

  function preventDefaults(e) {
    e.preventDefault();
    e.stopPropagation();
  }

  function highlight(item) {
    item.closest(".file_upload").style.cssText =
      "border:5px solid yellow; background-color:rgba(0,0,0,0.7);";
  }
  function unhighlight(item) {
    const bgcolor =
      (item.closest(".calc") && "#fff") ||
      (item.closest(".popup-content") && "#ededed") ||
      (item.closest(".file_upload") && "#f7e7e6");

    item.closest(
      ".file_upload"
    ).style.cssText = `border:none; background-color:${bgcolor} `;
  }

  ["dragenter", "dragover"].forEach((eventName) => {
    fileInputs.forEach((input) => {
      input.addEventListener(eventName, () => highlight(input), false);
    });
  });

  ["dragleave", "drop"].forEach((eventName) => {
    fileInputs.forEach((input) => {
      input.addEventListener(eventName, () => unhighlight(input), false);
    });
  });

  fileInputs.forEach((input) => {
    input.addEventListener("drop", (e) => {
      input.files = e.dataTransfer.files;
      let dots;
      const arr = input.files[0].name.split(".");
      arr[0].length > 6 ? (dots = "...") : (dots = ".");
      const name = arr[0].slice(0, 6) + dots + arr[arr.length - 1];

      input.previousElementSibling.textContent = name;
    });
  });
};
export default drop;
