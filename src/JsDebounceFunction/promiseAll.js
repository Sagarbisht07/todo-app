function myPromiseAll(promises) {
  return new Promise((resolve, reject) => {
     let res = [];
     let next = 0;

    if (promises?.length === 0) {
      return resolve([]);
    }

    promises.forEach((promise, inx) => {
      Promise.resolve(promise)
        .then((value) => {
          res[inx] = value;
          next++;

          if (next === promises?.length) {
            resolve(res);
          }
        })
        .catch((error) => {
          reject(error);
        });
    });
  });
}

const p1 = new Promise((res) => setTimeout(() => res(1), 1000));
const p2 = new Promise((res, rej) => setTimeout(() => rej(2), 500));
const p3 = Promise.resolve(3);

// console.log(p3);
myPromiseAll([p1, p2, p3])
  .then(console.log)
  .catch((err) => console.log(err));
