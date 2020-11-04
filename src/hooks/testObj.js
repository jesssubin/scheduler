const state = {
  1: "item1",
  2: "item2",
  3: "item3",
  4: "item4"
}

console.log(obj);

const obj2 = {
  1: "item1",
  2: "item2",
  3: "item3",
  4: "item4", 
  5: "new stuff",
  3: "changed stuff"
}

console.log(obj2);

const obj3 = {
  ...state,  
  5: "new stuff",
  3: "changed stuff"
}

console.log("obj3:", obj3);

// '1': 'item1', '2': 'item2', '3': 'item3', '4': 'item4'