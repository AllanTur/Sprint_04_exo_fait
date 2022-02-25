////Arrays: Level01
//1.

// console.log("fichier main.js")

// console.log(webTechs);
// console.log("Tableau counties:", countries);

//2.A partir du code suivant :

// let text =
//   "I love teaching and empowering people. I teach HTML, CSS, JS, VueJs, Laravel.";
// console.log(text); //sortie: I love teaching and empowering people. I teach HTML, CSS, JS, VueJs, Laravel.
// console.log(text.length); //sortie: 77
// let newtext = "";
//let point = "";

// for (let i = 0; i < text.length; i++) {
//   if (text[i] == "." || text[i] == ",") {
//     point = text[i];
//   } else {
//     newtext = newtext + text[i];
//   }
// }

// console.log(newtext); //sortie: I love teaching and empowering people I teach HTML CSS JS VueJs Laravel
// console.log(newtext.split(" ")); //sortie: Array(13) [ "I", "love", "teaching", "and", "empowering", "people", "I", "teach", "HTML", "CSS", … ]
// console.log(newtext.split(" ").length); //sortie: 13

//3.Dans le panier suivant (shoppingCart), ajoutez, supprimez, modifiez des articles
/* -ajoutez 'Meat' au début de votre panier s'il n'a pas déjà été ajouté.
   -ajoutez 'Sugar' à la fin de votre panier s'il n'a pas déjà été ajouté.
   -supprimez 'Honey' si vous êtes allergique au miel
   -modifier le thé en 'Green Tea' */

// const shoppingCart = ["Milk", "Coffee", "Tea", "Honey"];

// let meat = "Meat";
// shoppingCart.unshift("Meat"); //sortie: //sortie: Array(5) [ "Meat", "Milk", "Coffee", "Tea", "Honey" ]
// shoppingCart.push("Sugar"); //sortie: //sortie: Array(6) [ "Meat", "Milk", "Coffee", "Tea", "Honey", "Sugar" ]
// shoppingCart.splice(4, 1); //sortie: Array(5) [ "Meat", "Milk", "Coffee", "Tea", "Sugar" ]
// shoppingCart.splice(3, 1, "Green Tea"); //sortie: Array(5) [ "Meat", "Milk", "Coffee", "Green Tea", "Sugar" ]

// console.log(shoppingCart);

//4.Dans le tableau countries, vérifiez si Morocco existe dans le tableau et s'il existe,
//  affichez "MOROCCO". S'il n'existe pas, ajoutez Morocco à la liste des pays.

// let count = "";

// for (let i = 0; i < countries.length; i++) {
//   if (countries[i] == "Morocco") {
//     count = 1;
//   } else {
//     count = 0;
//   }
// }

// if (count == 1) {
//   console.log("Morocco");
// } else {
//   countries.push("Morocco");
// }
// console.log(count);
// console.log(countries);
// count = 0;

//5.Dans le tableau webTechs, vérifiez si Sass existe dans le tableau et s'il existe, affichez "Sass est un préprocesseur CSS".
// S'il n'existe pas, ajoutez Sass au tableau et affichez-le.

// let count = "";

// for (let i = 0; i < webTechs.length; i++) {
//   if (webTechs[i] == "Sass") {
//     count = 1;
//   } else {
//     count = 0;
//   }
// }

// if (count == 1) {
//   console.log("Sass est un préprocesseur CSS");
// } else {
//   webTechs.push("Sass");
// }

// console.log(count);
// console.log(webTechs);
// count = 0;

//6.Concaténez les deux variables suivantes et stockez-les dans une variable fullStack.

// const frontEnd = ["HTML", "CSS", "JS", "VueJs", "VueX"];
// const backEnd = ["Node", "Express", "MongoDB"];

// let fullStack = [];
// let a = "";
// let count = 0;
// let i = 0;

// for (i; i < frontEnd.length; i++) {
//   fullStack.push(frontEnd[i]);
//   count = 1;
// }

// if (count == 1) {
//   for (let j = 0; j < backEnd.length; j++) {
//     fullStack.push(backEnd[j]);
//   }
// } else {
//   console.log("mi gg pu");
// }

// console.log(fullStack);

//Loops: Level00

//1.Itérer de 0 à 10 en utilisant la boucle for, while et do while

//######BOUCLE FOR

// for (let i = 0; i <= 10; i++) {
//   console.log(i);
// }

//BOUCLE WHILE

// let i = 0;
// while (i <= 10) {
//   console.log(i);
//   i++;
// }

//BOUCLE DO WHILE

// let x = 0;

// do {
//   console.log(x);
//   x++;
// } while (x <= 10);

//2.Itérez 10 à 0 en utilisant la boucle for, while et do while

//BOUCLE FOR

// for (let i = 10; i >= 0; i--) {
//   console.log(i);
// }

//BOUCLE WHILE
// let x = 10;

// while (x >= 0) {
//   console.log(x);
//   x--;
// }

//BOUCLE DO WHILE

// let x = 10;

// do {
//   console.log(x);
//   x--;
// } while (x >= 0);

//3.Créez et initialisez une variable n avec un entier positif. Itérer de 0 à n en utilisant la boucle for

// let n = 15;

// for (let i = 0; i <= n; i++) {
//   console.log(i);
// }

//4.Écrivez une boucle qui crée le modèle suivant à l'aide de console.log():

// let a = "#";
// let b = "#";

// for (let i = 0; i <= 6; i++) {
//   console.log(a);
//   a = a + b;
// }

/* 
    #
    ##
    ###
    ####
    #####
    ######
    #######*/

//5.Utilisez une boucle pour affichez le modèle suivant à l'aide de console.log():

// for (let i = 0; i <= 10; i++) {
//   a = i * i;
//   console.log(i + " x " + i + " = " + a);
// }

/*
0 x 0 = 0
1 x 1 = 1
2 x 2 = 4
3 x 3 = 9
4 x 4 = 16
5 x 5 = 25
6 x 6 = 36
7 x 7 = 49
8 x 8 = 64
9 x 9 = 81
10 x 10 = 100
 */

//6.Utilisez la boucle for pour parcourir de 0 à 100 et n'afficher que des nombres pairs

// for (let i = 1; i <= 100; i++) {
//   x = i % 2;
//   if (x == 0) {
//     console.log(i);
//   }
// }

//7.Utilisez la boucle for pour parcourir de 0 à 100 et n'afficher que les nombres impairs

// for (let i = 1; i <= 100; i++) {
//   x = i % 2;
//   if (x == 1) {
//     console.log(i);
//   }
// }

//8.(Facultatif) Utilisez la boucle for pour parcourir de 0 à 100 et n'afficher que les nombres premiers

// let max = 100;

// for (i = 2; i <= max; i++) {
//   var j = 1;
//   var racine = Math.floor(Math.sqrt(i));

//   do {
//     j++;
//   } while (j <= racine && i % j != 0);

//   if (j > racine) {
//     console.log(i);
//   }
// }

//9.Utilisez la boucle for pour parcourir de 0 à 100 et afficher la somme de tous les nombres.
// let x = 0;

// for (let i = 0; i <= 100; i++) {
//   x = x + i;
// }
// console.log("La somme de tous les nombres de 0 à 100 est " + x + " .");

//Loops: Level01

//1.Développez un script qui génère n'importe quel nombre de caractères aléatoire:
