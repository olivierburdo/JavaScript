/* 
Activité : jeu de devinette
*/

// NE PAS MODIFIER OU SUPPRIMER LES LIGNES CI-DESSOUS
// COMPLETEZ LE PROGRAMME UNIQUEMENT APRES LE TODO

console.log("Bienvenue dans ce jeu de devinette !");

// Cette ligne génère aléatoirement un nombre entre 1 et 100
var solution = Math.floor(Math.random() * 100) + 1;

// Décommentez temporairement cette ligne pour mieux vérifier le programme
//console.log("(La solution est " + solution + ")");

// TODO : complétez le programme
var compteur = 1;
var ok=true;
while ((compteur !== 7) && (ok === true))
    {
        var saisie = Number(prompt("Tentez de deviner le nombre que j'ai choisi, \nentre 0 et 100, tapez un nombre :"));

        // Vérifcation que la saisie est bien un nombre entier compris entre 0 et 100
        if  ((saisie !== parseInt(saisie, 10)) || (saisie > 100) || (saisie < 0))
            {
            console.log("ceci n'est pas un nombre entier compris entre 0 et 100");
            }

        // Vérifcation si saisie est égale à la solution
        else if (saisie === solution)
            {
            console.log("Bravo, la solution était " + solution + "\nVous avez trouvé en " + compteur + " essais");
            ok=false;
            }

        // Vérifcation que le compteur est inférieur à 6 et que la saisie est inférieur à la solution
        else if ((compteur < 6) && (saisie < solution))
            {
            console.log(saisie + " est trop petit"); compteur++;    
            }

        // Vérifcation que le compteur est inférieur à 6 et que la saisie est supérieur à la solution
        else if ((compteur < 6) && (saisie > solution))
            {
            console.log(saisie + " est trop grand"); compteur++;
            }

        // Vérifcation que le compteur est  supérieur ou égal à 6 et que la saisie est inférieur à la solution
        else if ((compteur >= 6) && (saisie < solution))
            {
            console.log(saisie + " est trop petit");
            console.log("Perdu... La solution était " + solution);
            ok=false;
            }

        // Derniere possibilité, le compteur est  supérieur ou égal à 6 et que la saisie est inférieur à la solution
        else
            {
            console.log(saisie + " est trop grand");
            console.log("Perdu... La solution était " + solution);
            ok=false;
            }
    }console.log("Fin du jeu, appuyer sur F5 pour recommencer");
