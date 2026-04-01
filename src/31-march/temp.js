const arr = [1, 2, 3, 4, 2, 3, 1, 6, 8, 2];
// {
//     1:1,
//     2:3,
// }
let obj = {};
for (let i = 0; i < arr.length; i++) {
  let count = 0;
  for (let j = i + 1; j < arr.length; j++) {
    if (arr[i] === arr[j]) {
      count++;
    }
  }
  for (key in obj) {
    console.log(obj);
    if (key === arr[i]) {
      obj[key] = count;
    } else {
      obj[arr[i]] = count;
    }
  }
    console.log(obj)
}
