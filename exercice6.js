let sommePairs = 0;
let sommeImpairs = 0;

for (let i = 1; i <= 50; i++) {
    if (i % 2 === 0) {
        sommePairs += i;
    } else {
        sommeImpairs += i;
    }
}

console.log("Somme pairs = " + sommePairs);
console.log("Somme impairs = " + sommeImpairs);
