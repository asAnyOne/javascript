import { postData } from "../services/requests";

const forms = () => {
  const form = document.querySelectorAll("form");
  const inputs = document.querySelectorAll("input");
  const inputsPhone = document.querySelectorAll("input[name=user_phone]");
  const upload = document.querySelectorAll("input[name=upload]");

  function clearInputs() {
    inputs.forEach((input) => (input.value = ""));
    upload.forEach(
      (item) => (item.previousElementSibling.textContent = "Файл не выбран")
    );
  }

  upload.forEach((item) =>
    item.addEventListener("input", () => {
      const arr = item.files[0].name.split(".");
      let dots;
      arr[0].length > 10 ? (dots = "...") : (dots = ".");

      item.previousElementSibling.textContent =
        arr[0].slice(0, 10) + dots + arr[arr.length - 1];
    })
  );

  inputsPhone.forEach((input) =>
    input.addEventListener("change", () => {
      input.value = input.value.replace(/\D/, "");
    })
  );

  const statusMessage = {
    loading: "Loading...",
    success: "Sending successfully",
    error: "Something went wrong",
    spinner: "assets/img/spinner.gif",
    ok: "assets/img/ok.png",
    fail: "assets/img/fail.png",
  };

  const path = {
    designer: "assets/server.php",
    question: "assets/question.php",
  };

  form.forEach((item) => {
    item.addEventListener("submit", (e) => {
      e.preventDefault();

      const status = document.createElement("div");
      status.classList.add("status");
      item.parentNode.appendChild(status);
      item.classList.add("animated", "fadeOutUp");
      setTimeout(() => {
        item.style.display = "none";
      }, 400);

      let statusImg = document.createElement("img");
      statusImg.setAttribute("src", statusMessage.spinner);
      statusImg.classList.add("animated", "fadeInUp");

      status.appendChild(statusImg);

      let statusText = document.createElement("div");
      statusText.textContent = statusMessage.loading;
      status.appendChild(statusText);

      const formData = new FormData(item);
      let api;
      (item.closest(".popup-design") || item.closest(".calc")) &&
        (api = path.designer);
      (item.closest(".popup-consultation") || item.closest(".consultation")) &&
        (api = path.question);

      postData(api, formData)
        .then((res) => {
          console.log(api);

          console.log(res);
          statusImg.setAttribute("src", statusMessage.ok);
          statusText.textContent = statusMessage.success;
        })
        .catch(() => {
          statusImg.setAttribute("src", statusMessage.fail);
          statusText.textContent = statusMessage.error;
        })
        .finally(() => {
          clearInputs();
          setTimeout(() => {
            status.remove();
            item.style.display = "block";
            item.classList.remove("fadeOutUp");
            item.classList.add("fadeInUp");
          }, 5000);
        });
    });
  });
};

export default forms;
