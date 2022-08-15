// there are two ways to create modules

//         1)     By  self-executed anonymous functions(IIFE-Immediately Invoked Function Expressons)

const user = (function () {
  const sayHello = function () {
    //  variable sayHello is local. It hasn't been on global;
    console.log("Hello");
  };
  return { sayHello };
})();
user.sayHello();
