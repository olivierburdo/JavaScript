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
    
console.log("\n\nVous avez droit à 6 essais pour trouver le nombre mystère\n\n\t\tBonne Chance !!!");

var nombreSaisi;

var compteur = 6;

var essai = 0;   
   
do
{ 
    var nombreSaisi= Number(prompt("entrez un nombre: "));
    
    essai ++
    compteur --;

    if(nombreSaisi > solution)
        {
            if(compteur === 1)
                
                console.log("Essai n° " + essai + ": Oups !!! (" + nombreSaisi + ")c'est plus ==> ATTENTION!!! dernier essai(s) avant la fin de la partie\n\n");
            
             else
                   console.log("Essai n° " + essai + ": Oups !!! (" + nombreSaisi + ")c'est plus ==> ATTENTION!!! " + compteur + " essai(s) avant la fin de la partie\n\n");   
        }
          
       else if(nombreSaisi == solution)
            {
              console.log("Bravoooo, tu as gagné (La solution est bien " + solution + ")!!!");    
              break;    
            }
    
        else 
        {
             if(compteur === 1)
                
                 console.log("Essai n° " + essai + ": Oups !!! (" + nombreSaisi + ")c'est plus ==> ATTENTION!!! dernier essai(s) avant la fin de la partie\n\n");
            
              else
                  
                  console.log("Essai n° " + essai + ": Oups !!! (" + nombreSaisi + ")c'est moins ==> ATTENTION!!! " + compteur + " essai(s) avant la fin de la partie\n\n");   
               }
               
    
}
while((nombreSaisi != solution)&&(compteur > 0));


            if ((compteur === 0) && (nombreSaisi != solution))
                {
                  console.log("Desolé, vous avez perdu !!!!");
        
                  console.log("(La solution est " + solution + ")");
                }
        
           

    
     


