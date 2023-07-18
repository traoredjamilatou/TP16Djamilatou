alert("Le fichier fonctionne !");
//ceci un commentaire

/*ceci
est
un
commentair*/
console.log("HELLO");

let maVariableSuperCool = "kamelCase"

console.log(maVariableSuperCool);

var unTexte = "Voici un texte";

console.log(unTexte);

unTexte = "Nouveau texte...";

console.log(unTexte);

const prenom = "justine";

console.log(prenom);

let unChiffre = 24;

unChiffre = 12;

console.log(unChiffre);

let chiffre = 47;

let nouvelleChaine = "Le chiffre attendu est : " + chiffre + " degrés";

console.log(nouvelleChaine);

let string = "je suis une chaine";

let number = 24;

let boolean = true;

let array = ["je", "suis", 24, false]

let object = {
    prenom: "djami",
    age: 22,
    ville:"bobo",
};

let arbre;

console.log(arbre);

console.log(4+5);

console.log(4-5);

console.log(4/5);

console.log(4*5);

console.log(4**5);

let total = 0;

total = total + 1;

console.log(total);

let x = 2;

let y = 5;

if (x < y) {
    console.log("x est inferieur a y");
}else{
    console.log("x est superieur a y");
}
/*let x = 6;
let y = "5";

if ((x === y)) {
    console.log("True !");
} else if (x == y) {
    console.log("x et y egaux en valeur");
} else {
    console.log("x et y ne sont pas du tout egaux");
}*/
function faireQuelqueChose() {
    console.log("je fait un truc !");
    console.log("trop cool");
}
faireQuelqueChose();

const faireUneTache = (tache) => {
    console.log("je fait : " + tache);
};
faireUneTache ("les courses");
faireUneTache ("le menage");
function add2() { 
    let a = 4;
  return a + 2;
} 
add2();

(function maFonction() {
    console.log('je me joue toute seule');
})();
(()  => {
    console.log("je me joue aussi toute seule");
})();
   
   /*let totale = 0;
 
function addition(x) {
    total += x;
    return total;
}

function soustrction(x) {
    total -= x;
    return total;
 }
   
function division(x) {
    if (total === 0) {
        return (total = x);
 }  else{     
    total /= x;
    return total;
}
    
function multiplication(x) {
    if (total === 0) {
        return (total = x);
 }  else{     
    total *= x;
    return total;
 } 
    
function reset() {
   totale = 0; 
}*/