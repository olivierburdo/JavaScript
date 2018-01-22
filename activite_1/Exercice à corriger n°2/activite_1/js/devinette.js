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

var win = 0;
var nbTry = 0;
var guess = -1;
while (guess !== solution && nbTry < 6 && !win)
{
  guess = prompt();
  if (guess == solution)
  {
    console.log("Bravo la solution était " + solution);
    console.log("Vous avez trouvé en " + (nbTry + 1) + " essai(s)");
    win = 1;
  }
  else if (guess > solution)
  {
    console.log(guess + " est trop grand")
    nbTry++;
  }
  else
  {
    console.log(guess + " est trop petit")
    nbTry++;
  }
}
if (nbTry == 6)
  console.log("Perdu... la solution était " + solution);

