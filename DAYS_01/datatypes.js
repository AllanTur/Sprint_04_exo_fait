console.log("                                  feuille datatypes.js")


// var typeString = "Hello world";
// console.log(typeof 42);

// var typeBooleanTrue = true;
// console.log(typeof true);

// var typeBooleanFalse = false;
// console.log(typeof false);

// var typeUndefined = undefined;
// console.log(typeof 2);

// var typeNull = null;
// console.log(typeof null);











/*###################################################################### Data Types --> Level01   */

//1. Déclarez une variable nommée *defi* et attribuez-lui une valeur initiale  **'Pratiquer les algorithmes en JavaScript'**.

// const defi =  'Pratiquer les algorithmes en JavaScript';
// console.log(defi.substring(9)); // sortie: " les algorithmes en JavaScript"

//7. A partir de la chaîne de caractères `10 jours en JavaScript`, écrire le code qui permet d'obtenir la chaîne de caractères `Jours en JavaScript`.

// const jourString = "10 jours en JavaScript ";
// console.log(jourString.substring(2)); // sortie: `Jours en JavaScript`

//8. Vérifiez si la chaîne contient un mot __Script__ en utilisant la méthode __includes()__
// console.log(jourString.includes("Script")); //sortie: true

//10. Divisez la chaine "10 Jours en JavaScript" en utilisant la méthode `split()` avec le caractère *espace* comme séparateur

// const word = jourString.split(" ");
// console.log(word, jourString);


//9. Divisez la chaine "string" en utilisant la méthode `split()` avec la chaine vide comme argument

// const string = "string";
// console.log(string.split("")); //Array(6) [ "s", "t", "r", "i", "n", "g" ]


//11. Divisez la chaine "Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon" en utilisant la méthode `split()` avec le caractère *espace* comme séparateur

// const string = "Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon";
// console.log(string.split(" ")); //Array(7) [ "Facebook,", "Google,", "Microsoft,", "Apple,", "IBM,", "Oracle,", "Amazon" ]

//12. Transformez "10 Jours en JavaScript" en "10 Jours en PHP" en utilisant la méthode `replace()`

// let p = "10 Jours en JavaScript";
// console.log(p.replace('JavaScript', 'PHP')); // 10 Jours en PHP


//13. Quel est le caractère à l'index 15 dans la chaine "10 Jours en JavaScript"? Utilisez la méthode `charAt()`

// let p = "10 Jours en JavaScript";
// console.log(p.charAt(15)); // resutat: "a"

//14. Quel est le code de caractère de J dans la chaine "10 Jours en JavaScript" en utilisant `charCodeAt()`

// let p = "10 Jours en JavaScript";
// console.log(`The character code ${p.charCodeAt(12)} is equal to ${p.charAt(12)}`); // resultat: "The character code 74 is equal to J"

//15. Utilisez `indexOf()` pour déterminer la position de la première occurrence de __a__ dans 10 Jours en JavaScript

// let p = "10 Jours en JavaScript";
// console.log(p.indexOf('a')); // resultat: 13 


//16. Utilisez __lastIndexOf__ pour déterminer la position de la dernière occurrence de __a__ dans "10 Jours en JavaScript"

// let p = "10 Jours en JavaScript";
// console.log(p.lastIndexOf('a')); // resultat: 15


/* 17. Utilisez __indexOf__ pour trouver la position de la première occurrence du mot __parceque__ dans la
    phrase suivante:__'Vous ne pouvez pas terminer une phrase avec parceque parceque c'est une conjonction'__ */

// let p = "Vous ne pouvez pas terminer une phrase avec parceque parceque c'est une conjonction";
// let word = "parceque";
// console.log(p.indexOf(word)); //sortie: 44

/* 18. Utilisez __lastIndexOf__ pour trouver la position de la dernière occurrence du mot __parceque__ dans
 la phrase suivante:__'Vous ne pouvez pas terminer une phrase avec parceque parceque c'est une conjonction'__ */

//  let p = "Vous ne pouvez pas terminer une phrase avec parceque parceque c'est une conjonction";
//  let word = "parceque";
//  console.log(p.lastIndexOf(word)); //sortie: 53

/* 19. Utilisez __search__ pour trouver la position de la première occurrence 
du mot __parceque__ dans la phrase suivante:__'Vous ne pouvez pas terminer une phrase avec parceque parceque c'est une conjonction'__ */

// let p = "Vous ne pouvez pas terminer une phrase avec parceque parceque c'est une conjonction";
// let word = "parceque";
// console.log(p.search(word)); //sortie: 44

// 20. Utilisez la méthode __trim()__ pour supprimer tout espace blanc de fin au début et à la fin d'une chaîne. ' 10 Jours en JavaScript '.

// let p = ' 10 Jours en JavaScript ';
// console.log(p.trim()); //sortie: "10 Jours en JavaScript" !plus d'espacement au début et à la fin

//21. Utilisez la méthode __startsWith()__ dans la chaine *10 Jours en JavaScript* et rendre le résultat vrai

// let p = "10 Jours en JavaScript";
// console.log(p.startsWith(10)); // sortie: true

//22. Utilisez la méthode __endsWith()__ dans la chaine *10 Jours en JavaScript* et rendre le résultat vrai

// let p = "10 Jours en JavaScript";
// console.log(p.endsWith(10)); //sortie: true

//23. Utilisez la méthode __match()__ pour trouver tous les __a__ dans  "10 Jours en JavaScript"

// let p = "10 Jours en JavaScript";
// let regex = /a/g;
// console.log(p.match(regex)); // sortie: Array [ "a", "a" ]


//24. Utilisez la méthode __concat()__ et fusionner '10 Jours en' avec 'JavaScript' tà une seule chaîne, '10 Jours en JavaScript'

// let p1 = '10 Jours en'; 
// let p2 = ' JavaScript';
// let p3 = p1.concat(p2);
// console.log(p3); //sortie : 10 Jours en JavaScript

//25. Utilisez la méthode __repeat()__ pour afficher "10 Jours en JavaScript" 2 fois

// let p = "10 Jours en JavaScript";
// console.log(p.repeat(2)); //sortie: 10 Jours en JavaScript10 Jours en JavaScript













// #####################################################    Data Type --> Level02

/* 1. Utilisez console.log() et afficher la déclaration suivante:
  The quote 'There is no exercise better for the heart than reaching down and lifting people up.' by John Holmes teaches us to help one another. */

// console.log("The quote 'There is no exercise better for the heart than reaching down and lifting people up.' by John Holmes teaches us to help one another.");


//2. Utilisez console.log() et afficher la citation suivante:
// console.log("Love is not patronizing and charity isn't about pity, it is about love. Charity and love are the same -- with charity you give love, so don't just give money but reach out your hand instead.");


//3. Vérifiez si typeof '10' est exactement égal à 10. Sinon, rendez-le exactement égal.

// let chiffre1 = typeof '10';
// let chiffre2 = typeof 10;
// let chiffre3 = chiffre2.replace(10, '10');
// console.log(chiffre3 === chiffre2); //sotie: true


//4.Vérifiez si parseFloat('9.8') est exactement égal à 10 if not make it exactly equal with 10.

// console.log(parseFloat('9.8') === 10); //sortie: false
// console.log(parseFloat('9.8') + 0.2 === 10); // sortie: true

//5.Vérifiez si "on" se trouve à la fois dans "python" et "jargon"

// let Python = "python";
// let Jargon = "jargon";

// console.log(Python.includes("on"),Jargon.includes("on")); //sortie: true true


//6.I hope this course is not full of jargon. Vérifiez si jargon est dans la chaine.

// let p = "I hope this course is not full of jargon."
// console.log(p.includes("jargon")); //sortie: true

//7.Générer un nombre aléatoire entre 0 et 100 inclusivement.


// function getRandomInt(max) {
//     return Math.floor(Math.random() * max);
//   }
// console.log(getRandomInt(101));
 

//8.Générer un nombre aléatoire entre 50 et 100 inclusivement.

// function getRandomArbitrary(min, max) {
//     return Math.random() * (max - min) + min;
//   }
// console.log(Math.floor(getRandomArbitrary(99, 101)));

//9.Générez un nombre aléatoire compris entre 0 et 255 inclusivement.

// function getRandomIntInclusive(min, max) {
//     min = Math.ceil(min);
//     max = Math.floor(max);
//     return Math.floor(Math.random() * (max - min +1)) + min;
//   }

//   console.log(getRandomIntInclusive(0, 255));



//10.Utilisez la méthode substr() pour extraire la chaine de 
// caractère "because because because" de la phrase suivante: "You cannot end a sentence with because because because is a conjunction"

// let stringP = "You cannot end a sentence with because because because is a conjunction";
// let p = stringP.substring("because");
// console.log(stringP.substring(31, 54)); // sortie : because because because
// console.log(stringP.substring(0, 30) + stringP.substring(54)); //sortie: You cannot end a sentence with is a conjunction













//######################################################## Boolean & Dates --> Level01

//1.Déclarez et initialisez les variables: firstName, lastName, country, city, age, isMarried, year et utilisez 'typeof' operator pour 
// vérifier les différents data types.

// let firstName = "Allan", lastName = "Turpin", country = "Réunion", city = "st denis", age = 21, isMarried = false, year = 2021;
//  console.log(typeof firstName, typeof lastName,typeof country, typeof city, typeof age, typeof isMarried, typeof year);


//2.Vérifiez si le type '10' est égal à 10
// console.log('10' === 10);


//3.Vérifiez si parseInt('9.8') est égal à 10
// console.log(parseInt('9.8') === 10);


//4.La valeur booléenne est vraie ou fausse.
//i.Écrivez trois déclarations JavaScript qui fournissent une valeur de vérité (True).

// let a = '2' == 2;
// let b = 10 === 10;
// let c = "ok" == "ok"
// console.log(a);
// console.log(b);
// console.log(c);

//ii.Écrivez trois instructions JavaScript qui fournissent une valeur erronée (False).

// let a = '2' === 2;
// let b = 10.01 === 10;
// let c = "si" == "biloute";
// console.log(a);
// console.log(b);
// console.log(c);


//5.Déterminez d'abord le résultat de l'expression de comparaison suivante sans utiliser console.log(). 
//    Après avoir décidé le résultat, confirmez-le en utilisant console.log()

// console.log("4 > 3",4 > 3);
// console.log("4 >= 3",4 >= 3);
// console.log("4 < 3",4 < 3);
// console.log("4 <= 3",4 <= 3);
// console.log("4 == 4",4 == 4);
// console.log("4 === 4",4 === 4);
// console.log("4 != 4",4 != 4);
// console.log("4 !== 4",4 !== 4);
// console.log("4 != '4'",4 != '4');
// console.log("4 == '4'",4 == '4');
// console.log("4 === '4'",4 === '4');

// let a = "python";
// let b = "jargon";
// console.log(a.length != b.length);


//6.Déterminez d'abord le résultat des expressions suivantes sans utiliser console.log(). 
//  Après avoir décidé le résultat, confirmez-le en utilisant console.log()

// console.log("4 > 3 && 10 < 12", 4 > 3 && 10 < 12);
// console.log("4 > 3 && 10 > 12", 4 > 3 && 10 > 12);
// console.log("4 > 3 || 10 < 12", 4 > 3 || 10 < 12);
// console.log("4 > 3 || 10 > 12", 4 > 3 || 10 > 12);
// console.log("!(4 > 3)", !(4 > 3));
// console.log("!(4 < 3)", !(4 < 3));
// console.log("!(false)", !(false));
// console.log("!(4 > 3 && 10 < 12)", !(4 > 3 && 10 < 12));
// console.log("!(4 > 3 && 10 > 12)", !(4 > 3 && 10 > 12));
// console.log("!(4 === '4')", !(4 === '4'));

//xi.There is no 'on' in both dragon and python

// let a = "dragon";
// let b = "python";
// console.log(!(a.includes("on") == b.includes("python")));


//7.Utilisez l'objet Date pour effectuer les activités suivantes
//i.Quelle est l'année aujourd'hui?

// var aujd = new Date();
// var année = aujd.getFullYear();
// console.log(aujd,année);


//ii.Quel est le mois aujourd'hui en nombre?

// var mois = aujd.getUTCMonth();
// console.log(mois + 1);

//iii.Quelle est la date aujourd'hui?

// console.log(aujd);


//iv.Quel est le jour aujourd'hui en nombre?

// var annee = aujd.getFullYear();
// var mois = aujd.getUTCMonth();
// var jour = aujd.getDay();
// var Month = mois + 1;
// console.log("On est le " + jour + "/" + Month + "/" + annee);

//v.Maintenant, quel le nombre d'heure ?

// var heure = aujd.getHours();
// console.log(heure);

//vi.Maintenant, quel le nombre de minutes ?

// var minute = aujd.getMinutes();
// console.log(minute);


//juste pour l'heure + minute
// var heure = aujd.getHours();
// var minute = aujd.getMinutes();
// console.log(heure + ":" + minute)

//vii.Découvrez le nombre de secondes écoulées entre le 1er janvier 1970 et aujourd'hui.

// console.log(Date.now());








//######################################################### Exercices Aléatoires --> Level02

//1.Declarez et initialisez les deux variables myAge et yourAge.

// let myAge = 250;
// let yourAge = 25;

// let ecartAge = myAge - yourAge;

// console.log("j'ai " + ecartAge + " ans de plus que toi.");




//2.En utilisant 'prompt', obtenez l'année de naissance de l'utilisateur et si l'utilisateur a 18 ans ou plus, 
//    autorisez l'utilisateur à conduire sinon dites à l'utilisateur d'attendre un certain nombre d'années.

// var aujd = new Date();
// let entreAge = window.prompt("Entrez votre date de naissance:")
// var annee = aujd.getFullYear();
// let votreAge = annee - parseInt(entreAge);
// let resteAge = 18 - votreAge;

// if(votreAge >= 18){
//     console.log("Vous avez " + votreAge + " ans. Vous êtes autorisé de conduire.");
// }else{
//     console.log("Vous avez " + votreAge + " ans. Vous serez autorisé à conduire après " + resteAge + " ans.");
// }


//3.Écrivez un script qui invite l'utilisateur à entrer le nombre d'années.
//   Calculez le nombre de secondes qu'une personne peut vivre. Supposons que quelqu'un ne vive que cent ans.


// let entreAge = window.prompt("Entrez votre âge:")
// let votreAge = parseInt(entreAge);

// let jour = votreAge * 365;
// let heure = jour * 24;
// let minute = heure * 60;
// let seconde = minute * 60;

// console.log("Entrez votre âge: " + votreAge);
// console.log("Vous avez vécu " + seconde + " secs.");


//4.Créez un format d'heure lisible par l'homme à l'aide de l'objet Date time

// var aujd = new Date();
// var annee = aujd.getFullYear();
// var mois = aujd.getMonth();
// var jour = aujd.getUTCDay();
// var heure = aujd.getHours();
// var minute = aujd.getMinutes();

// if(mois < 10){
//     mois = "0" + mois;
// };

// if(jour < 10){
//     jour = "0" + jour;
// };

// if(heure < 10){
//     heure = "0" + heure;
// };

// if(minute < 10){
//     minute = "0" + minute;
// };

//i.YYYY-MM-DD HH:mm
// console.log(annee + "-" + mois + "-" + jour + " " + heure + ":" + minute);

//ii.DD-MM-YYYY HH:mm
// console.log(jour + "-" + mois + "-" + annee + " " + heure + ":" + minute);

//iii.DD/MM/YYYY HH:mm
// console.log(jour + "/" + mois + "/" + annee + " " + heure + ":" + minute);








//############################################################################## 5.Exercices Aléatoires --> Level03
//1.Créez un format d'heure lisible par l'homme à l'aide de l'objet Date time.
//   L'heure et la minute doivent être toujours à deux chiffres (7 heures devraient être 07 et 5 minutes devraient être 05)

// var aujd = new Date();
// var annee = aujd.getFullYear();
// var mois = aujd.getMonth();
// var jour = aujd.getDate();
// var heure = aujd.getHours();
// var minute = aujd.getMinutes();
// mois = mois + 1;

// if(mois < 10){
//     mois = "0" + mois;
// };

// if(jour < 10){
//     jour = "0" + jour;
// };

// if(heure < 10){
//     heure = "0" + heure;
// };

// if(minute < 10){
//     minute = "0" + minute;
// };

// console.log(annee + "-" + mois + "-" + jour + " " + heure + ":" + minute);










//#################################################################################### Exercices Aléatoires --> Level04

//1.Si a est supérieur à b, affichez 'a est superieur à b', sinon affichez 'a est inferieur à b'. Utilisez deux méthodes:


//   if else

// let a = 4
// let b = 3

// if(a > b){
//     console.log("a est superieur à b");
// }else{
//     console.log("a est inferieur à b");
// }


//   ternary operator.

// let a = 4
// let b = 3

// let grandeur = (a > b) ? "a est superieur à b" : "a est inferieur à b";

// console.log(grandeur);



//2.Les nombres pairs sont divisibles par 2 et le reste est zéro. Comment vérifier si un nombre est pair ou impair en JavaScript?

// let nombreDemander = window.prompt("Enter un nombre:");
// let nombreInt = parseInt(nombreDemander);

// let calcul = nombreInt % 2;

// if(calcul === 0){
//     console.log(nombreDemander + " est un nombre pair.");
// }else{
//     console.log(nombreDemander + " est un nombre impair.");
// };










//3.Conditions --> Level02

//1.Écrivez un code qui peut donner des notes aux élèves en fonction de leurs scores:

// let note = window.prompt("Votre note :");
// let noteInt = parseInt(note);

// if(noteInt >= 80){
//     console.log(noteInt + ",A");
// }
// else if(noteInt > 70){
//     console.log(noteInt + ",B");
// }
// else if(noteInt > 60){
//     console.log(noteInt + ",C");
// }
// else if(noteInt > 50){
//     console.log(noteInt + ",D");
// }else{
//     console.log(noteInt + ",F");
// }


//2.Vérifiez si la saison est l'automne, l'hiver, le printemps ou l'été. 
//  Si l'entrée utilisateur est: - septembre, octobre ou novembre, la saison est l'automne.
//   - décembre, janvier ou février, la saison est l'hiver.
//   - mars, avril ou mai, la saison est le printemps 
//   - juin, juillet ou août, la saison est l'été


// let entreeMois = window.prompt("Entrée un mois(pas oublier les accent et écrire tout en minuscule):");

// switch(entreeMois)
// {
//     case "septembre":
//     case "octobre":
//     case "novembre":
//         console.log("la saison est l'automne.");
//     break;

//     case "décembre":
//     case "janvier":
//     case "février":
//         console.log("la saison est l'hiver.");
//     break;

    
//     case "mars":
//     case "avril":
//     case "mai":
//         console.log("la saison est le printemps.");
//     break;

//     case "juin":
//     case "juillet":
//     case "aôut":
//         console.log("la saison est l'été.");
//     break;
// }






//###############################################  Exercices Aléatoires --> Level03
//1.Ecrire un programme qui indique le nombre de jours dans un mois.

// let entreeMois = window.prompt("Entrée un mois pour savoir combien de jour il y a dans celui-ci:");
// let mois = entreeMois.toUpperCase();
// let fevrierMois = entreeMois;

// if(mois === "JANVIER"){
//     console.log("Janvier a 31 jours.");
// }
// else if(fevrierMois === "FEvrier"){
//     console.log("Fevrier a 28 jours.");
// }
// else if(fevrierMois === "Fevrier"){
//     console.log("FEvrier a 28 jours.");
// }
// else if(mois === "FEVRIER"){
//     console.log("Fevrier a 28 jours.");
// }
// else if(mois === "MARS"){
//     console.log("Mars a 31 jours.");
// }
// else if(mois === "AVRIL"){
//     console.log("Avril a 30 jours.");
// }
// else if(mois === "MAI"){
//     console.log("Mai a 31 jours.");
// }
// else if(mois === "JUIN"){
//     console.log("Juin a 30 jours.");
// }
// else if(mois === "JUILLET"){
//     console.log("Juillet a 31 jours.");
// }
// else if(mois === "AOUT"){
//     console.log("Aôut a 31 jours.");
// }
// else if(mois === "SEPTEMBRE"){
//     console.log("Septembre a 30 jours.");
// }
// else if(mois === "OCTOBRE"){
//     console.log("Octobre a 31 jours.");
// }
// else if(mois === "NOVEMBRE"){
//     console.log("Nvembre a 30 jours.");
// }
// else if(mois === "DECEMBRE"){
//     console.log("Decembre a 31 jours.");
// }else{
//     console.log("Ceci n'est pas un mois");
// }




/* DAYS 03
const mySet = new Set();

for (let i = 0; i <= 10;i++){
    mySet.add(0 + i);
    console.log(mySet);
}*/