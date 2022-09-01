const forms = () => {
  const form = document.querySelectorAll("form");
  const inputs = document.querySelectorAll("input");
  const inputsPhone = document.querySelectorAll("input[name=user_phone]");

  function clearInputs() {
    inputs.forEach((input) => (input.value = ""));
  }

  inputsPhone.forEach((input) =>
    input.addEventListener("change", () => {
      input.value = input.value.replace(/\D/, "");
    })
  );

  const statusMessage = {
    loading: "Loading...",
    success: "Sending successfully",
    error: "Something went wrong",
  };

  const postData = async (url, data) => {
    document.querySelector(".status").textContent = statusMessage.loading;
    const res = await fetch(url, {
      method: "POST",
      body: data,
    });
    return await res.text();
  };

  form.forEach((item) => {
    item.addEventListener("submit", (e) => {
      e.preventDefault();

      const status = document.createElement("div");
      status.classList.add("status");
      item.appendChild(status);

      const formData = new FormData(item);

      postData("assets/server.php", formData)
        .then((res) => {
          console.log(res);
          status.textContent = statusMessage.success;
        })
        .catch(() => (status.textContent = statusMessage.error))
        .finally(() => {
          clearInputs();
          setTimeout(() => {
            status.remove();
          }, 5000);
        });
    });
  });
};

export default forms;
