
// Manipulez les chaines de caractères

function minuscules(mot) {
    return mot.toLowerCase();
}
function majuscules(mot) {
    return mot.toUpperCase();
}
function voyellesConsonnes(mot) {
    var consonnes = 0;
    var voyelles = 0;
    for (var i = 0; i < mot.length; i++) {
        if (mot[i] === "a" || mot[i] === "e" || mot[i] === "i" || mot[i] === "o" || mot[i] === "u" || mot[i] === "y") {
            voyelles++;
        } else {
            consonnes++;
        }
    }
    return "Il contient " + voyelles + " voyelles(s) et " + consonnes + " consonne(s)"
}

function inverser(mot) {
    var motInverse = "";
    for (var i = (mot.length - 1); i >= 0; i--) {
        motInverse +=  mot[i];
    }
    return motInverse;
}

function palindrome(mot) {
    mot = minuscules(mot);
    var check = inverser(mot);
    if (mot === check) {
        return "C'est un palindrome";
    } else {
        return "Ce n'est pas un palindrome";
    }
}
function convertirEnLeetSpeak(mot) {
    var motEnLeetSpeak = "";
    mot = minuscules(mot);
    for (var i = 0; i < mot.length; i++) {
      motEnLeetSpeak += trouverLettreLeet(mot[i]);
    }
    return motEnLeetSpeak;
}
function trouverLettreLeet(lettre) {
      switch (lettre) {
            case "a":
                return "4";
            case "b":
                return "8";
            case "e":
                return "3";
            case "l":
                return "1";
            case "o":
                return "0";
            case "s":
                return "5";
            default:
                return lettre;
        }
}

var mot = prompt("Ecrire un mot");

console.log("Il s'écrit en minuscules " + minuscules(mot));
console.log("Il s'écrit en majuscules " + majuscules(mot));
console.log(voyellesConsonnes(mot));

console.log("Il s'écrit à l'envers " + inverser(mot));

console.log(palindrome(mot));
console.log("Il s'écrit en leet speak " + convertirEnLeetSpeak(mot));

