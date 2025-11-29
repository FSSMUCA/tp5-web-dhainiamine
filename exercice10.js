function sommeIterative(n) {
    let s = 0;
    for (let i = 1; i <= n; i++) {
        s += i;
    }
    return s;
}

function sommeRecursive(n) {
    if (n === 0) return 0;
    return n + sommeRecursive(n - 1);
}

//test
let n = 10;

console.log("Somme itérative de 1 à " + n + " = " + sommeIterative(n));
console.log("Somme récursive de 1 à " + n + " = " + sommeRecursive(n));