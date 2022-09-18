export default class Forms {
  constructor(form) {
    this.forms = document.querySelectorAll(form);
    this.message = {
      loading: "Loading...",
      success: "Sended success! We will call you back as soon as possible!",
      error: "Something went wrong",
    };
    this.path = "assets/question.php";
  }

  initMask(selector) {
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
      let matrix = "+1 (___) ___-____",
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
    const input = document.querySelector(selector);

    input.addEventListener("input", createMask);
    input.addEventListener("blur", createMask);
    input.addEventListener("click", createMask);
    input.addEventListener("focus", createMask);
  }

  async postData(url, data) {
    const res = await fetch(url, {
      method: "POST",
      body: data,
    });

    if (!res.ok) {
      throw new Error();
    }

    return await res.text();
  }

  chekEmailInputs() {
    const mailInputs = document.querySelectorAll("[type=email]");
    mailInputs.forEach((input) =>
      input.addEventListener("keypress", function (e) {
        if (e.key.match(/^a-z 0-9 @ \./gi)) {
          e.preventDefault();
        }
      })
    );
  }

  addEventForms() {
    this.forms.forEach((form) =>
      form.addEventListener("submit", (e) => {
        e.preventDefault();
        this.loading = true;
        const statusMessage = document.createElement("div");
        statusMessage.style.cssText = `
                   color:gray;
                   font-size:2rem;
                   margin-top:40px;
        `;
        form.parentNode.appendChild(statusMessage);
        statusMessage.textContent = this.message.loading;

        const formData = new FormData(form);

        this.postData(this.path, formData)
          .then((data) => {
            console.log(data);
            statusMessage.textContent = this.message.success;
          })
          .catch(() => {
            statusMessage.textContent = this.message.error;
          })
          .finally(() =>
            setTimeout(() => {
              form.reset();
              statusMessage.remove();
            }, 6000)
          );
      })
    );
  }

  init() {
    try {
      document
        .querySelectorAll("input")
        .forEach((input) => (input.autocomplete = "off"));

      this.chekEmailInputs();
      this.initMask("[name=phone]");
      this.addEventForms();
    } catch (error) {}
  }
}
