"use strict";

for (let node of document.body.childNodes) {
  if (node.nodeName === "#text") {
    continue;
  }
  console.log(node);
}
// ----------
let a;
console.log(a);
a = null;
console.log(a);
// ----------
console.log("''", Boolean(""));
console.log("0", Boolean(0));
console.log("[]", Boolean([]));
console.log("{}", Boolean({}));
console.log("null", Boolean(null));
console.log("undefined", Boolean(undefined));
console.log("4", Boolean(4));
console.log("NaN", Boolean(NaN));

function pow(x, n) {
  if (n === 1) {
    return x;
  } else {
    return x * pow(x, n - 1);
  }
}
console.log(pow(5, 10));
// --------------

let students = {
  js: [
    {
      name: "John",
      progress: 100,
    },
    {
      name: "Ivan",
      progress: 80,
    },
  ],
  html: {
    basic: [
      {
        name: "Peter",
        progress: 28,
      },
      {
        name: "Ann",
        progress: 18,
      },
    ],
    html: {
      html: {
        basic: [
          {
            name: "Peter",
            progress: 20,
          },
          {
            name: "Ann",
            progress: 18,
          },
        ],
        html: {
          basic: [
            {
              name: "Peter",
              progress: 20,
            },
            {
              name: "Ann",
              progress: 18,
            },
          ],
          pro: [
            {
              name: "Sam",
              progress: 90,
            },
          ],
        },
        pro: [
          {
            name: "Sam",
            progress: 90,
          },
        ],
      },
      basic: [
        {
          name: "Peter",
          progress: 20,
        },
        {
          name: "Ann",
          progress: 18,
        },
      ],
      pro: [
        {
          name: "Sam",
          progress: 90,
        },
      ],
    },
    pro: [
      {
        name: "Sam",
        progress: 90,
      },
    ],
  },
};
let prog = 0;
let sum = 0;
function count(obj) {
  for (let key in obj) {
    if (Array.isArray(obj[key])) {
      for (let i = 0; i < obj[key].length; i++) {
        prog += obj[key][i].progress;
      }
      sum += obj[key].length;
    } else {
      count(obj[key]);
    }
  }
}
count(students);
console.log(prog);
console.log(sum);
console.log(prog / sum);
