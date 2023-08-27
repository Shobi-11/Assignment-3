
//Comparing two JSON having the same properties without order

let obj1 = { name: "Person1", age: 5 };
let obj2 = { age: 5, name: "Person1" };

let x = true;

if (Object.keys(obj1).length == Object.keys(obj2).length) {
    for (key in obj1) {
        if (obj1[key] == obj2[key]) {
            continue;
        }
        else {
            x = false;
            break;
        }
    }
}
else {
    x = false;
}
console.log("is object equal" + x);