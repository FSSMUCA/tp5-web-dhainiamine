function totalAvecRemise(total, remise) {
    return total - (total * remise / 100);
}

let t = Number(prompt("Total HT : "));
let r = Number(prompt("Remise (%) : "));

console.log("Total final = " + totalAvecRemise(t, r));