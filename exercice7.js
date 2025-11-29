function verifierMotDePasse(mdp) {
    if (mdp.length >= 8 && mdp.includes("@")) {
        return true;
    }
    return false;
}

let mot = prompt("Entrez un mot de passe : ");

if (verifierMotDePasse(mot)) {
    console.log("Mot de passe valide");
} else {
    console.log("Mot de passe non valide");
}