let map = new Map();
map.set("name", "John");
let keys = [...map.keys()];
// Error: keys.push is not a function
keys.push("more");
console.log( keys);
//  به خاطر اینکه keys 
 // rest oparatorدر ابتدا یک ارایه نبود با 
 // انرا به ارایه تبدیل کردیم  سپس متد های ارایه را روی ان اعمال کردیم