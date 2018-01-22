/* 
Activité : jeu de devinette
*/

// NE PAS MODIFIER OU SUPPRIMER LES LIGNES CI-DESSOUS
// COMPLETEZ LE PROGRAMME UNIQUEMENT APRES LE TODO

console.log("Bienvenue dans ce jeu de devinette !");

// Cette ligne génère aléatoirement un nombre entre 1 et 100
var solution = Math.floor(Math.random() * 100) + 1;

// Décommentez temporairement cette ligne pour mieux vérifier le programme
console.log("(La solution est " + solution + ")");

// TODO : complétez le programme

var test; 
var reste;
var chances = 6;
var reussite = 0 ;

for (var i=0; i<chances ; i++){
    reste=chances-i;
    test = prompt("Essayez une valeur entre 1 et 100, il vous reste "+reste+ " essai(s)");
    test=Number(test);
    if (test===solution){
        console.log(test+" est la bonne réponse !")
        console.log("Vous avez trouvé en "+(i+1)+" essai(s)");
        reussite=1;
        i=chances;
    }
    if (test<solution){
        console.log(test+" est trop petit");
    }
    if (test>solution){
        console.log(test+" est trop grand");
    }
}
if (reussite === 0){
    console.log("C'est perdu, la réponse était "+solution);
}

