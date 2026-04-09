// function temp() {
//   let a = 0;
//   return {
//     incr: function () {
//       a++;
//       return a;
//     },
//     dec: function () {
//       a--;
//       return a;
//     },
//   };
// }
// console.log("incr", temp(a).incr());
// console.log("dec", temp().dec());
// const plus= temp()

// console.log("plus",plus.incr())
// console.log("minus",plus.dec())

// const data = [
//   {
//     category: "fruit",
//     items: ["mango", "apple", "banana"],
//   },
//   {
//     category: "vegetable",
//     items: ["potato", "cabbage"],
//   },
//   {
//     category: "beverage",
//     items: ["tea", "coffee"],
//   },
// ];

// const temp = data.reduce((acc, cur) => {
//   return {
//     ...acc,
//     [cur.category]: cur.items,
//   };
// }, {});

// console.log("tem", temp);

let i = 0;
setInterval(() => {
  console.log("5s", ++i);
}, 5000);
