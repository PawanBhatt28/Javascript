const obj1 = {
    key1 : "value1",
    key2 : "value2"
}
const obj2 = {
    key3 : "value3",
    key4 : "value4"
}

const newObj = {...obj1,...obj2,
    key5 : "value5",
    key1 : "value69"
};
// console.log(newObj);
console.log(newObj);

const evens = {..."2468", ...["mango","apple","lawda mera"]};
console.log(evens);