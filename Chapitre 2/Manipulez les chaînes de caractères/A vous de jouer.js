var mot = "Anaconda";
console.log("Le mot " + mot + " contient " + mot.length + " caractère(s)");
console.log("il s'écrit en miniuscules : " + mot.toLowerCase());
console.log("il s'écrit en majuscules : " + mot.toUpperCase());
var voye = 0;
var cons = 0;
var minuscule = mot.toLowerCase();
function maFonction() {
    var i = 0; i < mot.length; i++
}

for (var i = 0; i < mot.length; i++)  {
    if (minuscule[i] === "a" || minuscule[i] === "e"|| minuscule[i] === "u" || minuscule[i] === "i" || minuscule[i] === "o" || minuscule[i] === "y") {
        voye++
    } else {
        cons++
    }
}
console.log("il contient " + voye + " voyelle(s) et " + cons + " consonne(s)");
function inverser() {
    var motInverse = "";
    for (var i = (mot.length - 1); i >= 0; i--) {
        motInverse +=  mot[i];
       }
        return motInverse;
    }
console.log("Il s'écrit a l'envers " + inverser(mot));

if (mot === inverser(mot)) {
    console.log("C'est un palindrome");
} else {
    console.log("Ce n'est pas un palindrome");
}
var leetSpeak = ""
function convertirEnLeetSpeak() {
    for (var i = 0; i < mot.length; i++) {
        if (mot.toLocaleLowerCase()[i] === "a") {
        leetSpeak += "4"
       } else if (mot.toLocaleLowerCase()[i] === "c") {
        leetSpeak += "("
       } else if (mot.toLocaleLowerCase()[i] === "o") {
        leetSpeak += "0"
       } else {
        leetSpeak += mot[i]
       }
    } 
    return leetSpeak;
}
console.log("Il s'écrit en leet speak " + convertirEnLeetSpeak(leetSpeak));

var leetSpeak2 = ""
function convertirEnLeetSpeak2() {
    for (var j = 0; j < mot.length; j++) {
        var test = mot.toLowerCase()[j];
        switch (test) {
        case "a":
        leetSpeak2 += "4";
        break;
        case "c":
        leetSpeak2 += "(";
        break;
        case "d":
        leetSpeak2 += "[)";
        break;
        case "o":
        leetSpeak2 += "0";
        break;
        case "n":
        leetSpeak2 += "^/";
        break;
        default:
        leetSpeak2 += mot[j];
        } 
    }
    return leetSpeak2;
}
console.log("Il s'écrit en leet speak " + convertirEnLeetSpeak2(leetSpeak2));

/*
var invers = ""
for (var j = 0; j < mot.length; j++)  {
    if (mot[j] === mot[j]) {
        voye++
    } else {
        cons++
    }
console.log(mini[4]);

console.log(maxi.charAt(0));
console.log(max[1]);
console.log(max[2]);
console.log(max[3]);
console.log(max[4]);

function inverser(mot) {
    let motInverse = "";
    for (let i = (mot.length - 1); i >= 0; i--) {
        motInverse +=  mot[i];
        motInverse = motInverse + mot[i];
    }
    return motInverse;
}

console.log(inverser("Anaconda"));
*/