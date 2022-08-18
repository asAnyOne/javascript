function form() {
  //Form--------post/request; fetch API

  const forms = document.querySelectorAll("form");

  const statusMessage = {
    loading: "img/form/spinner.svg",
    success: "Your message sended successfully! We callback you soon!",
    error: "Something goes wrong",
  };

  function sendForm(form) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      const spinner = document.createElement("img");
      spinner.src = statusMessage.loading;
      spinner.style.cssText = "margin:0 auto;display:block";
      form.insertAdjacentElement("afterend", spinner);

      const formData = new FormData(form);
      const obj = {};
      formData.forEach((key, value) => {
        obj[key] = value;
      });

      fetch("data.php", {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify(obj),
      })
        .then((data) => data.text())
        .then((data) => {
          console.log(data);
          warn(statusMessage.success);
          spinner.remove();
        })
        .catch((e) => {
          warn(statusMessage.error);
        })
        .finally(() => form.reset());

      function warn(message) {
        const formM = modal.querySelector("form");
        formM.style.display = "none";
        modal.classList.add("show");

        const tempModal = document.createElement("div");
        tempModal.innerHTML = `
        <div class="modal__close">×</div>
        <div class="modal__title">${message} </div>        
        `;

        modal.lastElementChild.lastElementChild.append(tempModal);

        setTimeout(() => {
          tempModal.remove();
          document.querySelector("body").className = "";
          modal.classList.remove("show");
          formM.style.display = "";
        }, 4000);
      }
    });
  }
  forms.forEach((form) => sendForm(form));
}
export default form;
