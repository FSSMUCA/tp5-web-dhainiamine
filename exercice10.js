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

/*analyse
1 - Quel code est le plus lisible ?
La version iterative est la plus lisible car une boucle est simple a comprendre

2 - Quel code est le plus performant ?
La version iterative est plus rapide car il n y a pas plusieurs appels de fonction

3 - La recursion peut-elle poser des problemes ?
Oui. Si n est trop grand la recursion peut provoquer une erreur (stack overflow)
car chaque appel prend de la memoire

4 - Quand utiliser une boucle ?
Pour les taches simples et repetitives
Les boucles sont plus rapides et plus faciles a lire
*/

