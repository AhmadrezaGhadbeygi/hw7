const salaries = {
  John: 100,
  Pete: 300,
  Mary: 250,

};
const arr = Object.entries(salaries);

function compareSecondColumn(a, b) {
  if (a[1] === b[1]) {
    return 0;
  } else {
    return a[1] > b[1] ? -1 : 1;
  }
}
let b = arr.sort(compareSecondColumn);
console.log(b[0][0]);
