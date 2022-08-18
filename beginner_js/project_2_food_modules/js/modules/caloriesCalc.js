function calcCalorie() {
  // calculator calorie

  //  для мужчин: BMR = 88.36 + (13.4 x вес, кг) + (4.8 х рост, см) – (5.7 х возраст, лет)
  //  для женщин: BMR = 447.6 + (9.2 x вес, кг) + (3.1 х рост, cм) – (4.3 х возраст, лет)

  // Минимальный уровень активности — 1.2
  // Низкий уровень активности — 1.375
  // Средний уровень активности — 1.55
  // Высокий уровень — 1.725
  // Очень высокий —  1.9

  // Норма калорий = BMR x Уровень активности

  const userGender = document.querySelector("#gender"),
    userParams = document.querySelector(".calculating__choose_medium"),
    userLifeParams = document.querySelector(".calculating__choose_big"),
    result = document.querySelector(".calculating__result span"),
    userData = {
      men: 88.36,
      women: 447.6,
      low: 1.2,
      small: 1.375,
      medium: 1.55,
      high: 1.725,
      highest: 1.9,
    };

  let genderIndex = userData.women,
    params = {
      weight: 0,
      height: 0,
      age: 0,
      activity: userData.small,
    };

  function getResult() {
    const { weight, height, age, activity } = params;

    if (!weight || !height || !age || !genderIndex) {
      return;
    }
    if (genderIndex === userData.women) {
      result.textContent = Math.floor(
        (genderIndex +
          params.weight * 9.2 +
          params.height * 3.1 -
          params.age * 4.3) *
          params.activity
      );
    } else {
      result.textContent = Math.floor(
        (genderIndex +
          params.weight * 13.4 +
          params.height * 4.8 -
          params.age * 5.7) *
          params.activity
      );
    }
  }

  getResult();

  function clearClass(parent, target, claz) {
    parent.childNodes.forEach((el) => {
      if (el.nodeName !== "#text") {
        el.classList.remove(claz);
      }
    });
    target.classList.add(claz);
  }

  function getUserGender(target, gender) {
    if (target.id === gender) {
      clearClass(userGender, target, "calculating__choose-item_active");
      genderIndex = userData[target.id];
      localStorage.removeItem("sex");
      localStorage.setItem("sex", gender);
    }
  }

  userGender.addEventListener("click", (e) => {
    if (e.target.id === "men" || e.target.id === "women") {
      getUserGender(e.target, e.target.id);
      getResult();
    }
  });

  userParams.addEventListener("input", (e) => {
    if (e.target.tagName === "INPUT") {
      if (e.target.value.match(/\D/g)) {
        e.target.style.border = "1px solid red";
      } else {
        e.target.style.border = "";
      }
      params[e.target.id] = +e.target.value;
      getResult();
    }
  });

  function getLifeParams(target) {
    if (
      target.id === "low" ||
      target.id === "small" ||
      target.id === "medium" ||
      target.id === "high" ||
      target.id === "highest"
    ) {
      clearClass(userLifeParams, target, "calculating__choose-item_active");
      params.activity = userData[target.id];
      localStorage.removeItem("lifeParams");
      localStorage.setItem("lifeParams", target.id);
    }
  }

  userLifeParams.addEventListener("click", (e) => {
    getLifeParams(e.target);
    getResult();
  });

  function setLocalStorage(func, localStorageKey, parent) {
    if (localStorageKey) {
      func(parent.querySelector(`#${localStorageKey}`), localStorageKey);
    } else if (parent === userGender) {
      func(userGender.firstElementChild, "women");
    } else {
      func(userLifeParams.querySelector("#small"));
    }
  }

  setLocalStorage(getUserGender, localStorage.getItem("sex"), userGender);
  setLocalStorage(
    getLifeParams,
    localStorage.getItem("lifeParams"),
    userLifeParams
  );
}
export default calcCalorie;
