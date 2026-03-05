const arr = [1, 2, 3];

Array.prototype.myMap = function (callback) {
  let result = [];
  for (let i = 0; i < this.length; i++) {
    if(i in this){
        result.push(callback(this[i], i, this));
    }
  }
  return result
};

const result = arr.myMap((num) => num * 2);

console.log(result);