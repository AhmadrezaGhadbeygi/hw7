const sortFromHightoLow = function (...input) {
  let arr = [...input];
  let a= [];
  for (let i = 0; i < arr.length; i++) {
    a.push(...arr[i]);
  }
a.sort(function(a, b){return b - a});

  console.log(a);
};
sortFromHightoLow([1, 55, 3], [463, 5],[259,999,1594963]);

