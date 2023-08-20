const a = [
    "are",
  "nap",
  "teachers",
  "cheaters",
  "PAN",
  "ear",
  "era",
  "hectares",
  
  'anp'
];

const aclean = function (arr) {
  let strSortedArr = [];

  arr.forEach((item) => {
    strSortedArr.push(item.toLowerCase().split("").sort().join(""));
  });
  console.log(strSortedArr);
  let arrAclean = [];
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      if (strSortedArr[i] === strSortedArr[j]) {
        arrAclean.push(arr[i]);
        arrAclean.push(arr[j]);
      }
    }
  }
  console.log(new Set(arrAclean));
  // console.log(arrAclean);
};
aclean(a);
