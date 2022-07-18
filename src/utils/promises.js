const angka = [1, 2, 3, 4, 5];

const counter = (arr) => {
  return arr.reduce((prev, current) => prev + current);
};

const sumArrayValue = (resolve, rejected) => {
  const hasilCounter = counter(angka);

  if (hasilCounter > 0) {
    resolve(hasilCounter);
  } else {
    rejected("Oops gagal menghitung");
  }
};

const resolver = (result) => {
  console.log(result);
};

const rejected = (err) => {
  console.log(err);
};

const sumFunc = new Promise(sumArrayValue);
sumFunc.then(resolver, rejected);

/* ------------------------------------ k ----------------------------------- */
const sumPromise = (resolve, reject, list) => {
  let result = 0;

  if (list) {
    result = list.reduce((prev, current) => prev + current);
  }

  if (result > 0) {
    resolve(result);
  } else {
    reject("list angka tidak ada");
  }
};

const resolve = (result) => {
  console.log(`hasil penejumlahan ${angka} = `, result);
};

const reject = (err) => {
  console.log(`maaf gagal menghitung karena`, err);
};

const cobaFunction = new Promise(sumPromise);
cobaFunction.then(resolve, reject);
