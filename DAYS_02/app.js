//######################################################################### DAYS_02

//Arrays: Level00


//1.Déclarez un tableau vide.

// const tableauVide = [];
// console.log(tableauVide); //sortie: Array []


//2.Déclarez un tableau avec plus de 5 éléments.

// const tableau = ['souris', 'lol', 'sprint', 'pomme', 'eau', 'bob'];
// console.log(tableau); //sortie: Array(6) [ "souris", "lol", "sprint", "pomme", "eau", "bob" ]

//3.Trouvez la longueur (length) de votre tableau.

// const tableau = ['souris', 'lol', 'sprint', 'pomme', 'eau', 'bob'];
// console.log(tableau.length); //sortie: 6

//4.Obtenez le premier élément, l'élément du milieu et le dernier élément du tableau.

// const tableau = ['souris', 'lol', 'sprint', 'pomme', 'eau', 'bob', 'toto'];

// console.log(tableau);
// console.log(tableau[0]); //sortie: souris
// console.log(tableau[3]); //sortie: pomme
// console.log(tableau[tableau.length-1]);  //sortie: toto

//5.Déclarez un tableau appelé mixedDataTypes, placez différents types de données dans le tableau et recherchez la longueur du tableau. 
//  La taille du tableau doit être supérieure à 5.

// const mixedDataTypes = ['toto', 1, true, 5.3, 'lolo', '2' ];
// console.log(mixedDataTypes); // sortie: Array(6) ['toto', 1, true, 5.3, 'lolo', '2' ]
// console.log(mixedDataTypes.length); //sortie: 6

//6.Déclarez un tableau nommé itCompanies et attribuez les valeurs 
//   initiales: Facebook, Google, Microsoft, Apple, IBM, Oracle et Amazon.

// const itCompanies = ["Facebook", "Google", "Microsoft", "Apple", "IBM", "Oracle", "Amazon"];

//7.Affichez le tableau avec console.log().
// console.log(itCompanies); // sortie: Array(7) ["Facebook", "Google", "Microsoft", "Apple", "IBM", "Oracle", "Amazon"]

//8.Affichez le nombre d'élément qu'il y a dans le tableau itCompanies.

// console.log(itCompanies.length); //sortie: 7

//9.Affichez la première entreprise, l'entreprise du milieu de tableau et la dernière entreprise.

// console.log(itCompanies[0]); // sortie: Facebook

// var x = Math.floor(itCompanies.length / 2); // x = 3
// console.log(itCompanies[x]); //sortie: Apple

// console.log(itCompanies[itCompanies.length-1]); //sortie: Amazon

//10.Affichez chaque entreprise.

// let myArray = itCompanies.join(','); //sortie: Facebook,Google,Microsoft,Apple,IBM,Oracle,Amazon
// let myArray = itCompanies.toString(','); //sortie: Facebook,Google,Microsoft,Apple,IBM,Oracle,Amazon

// console.log(myArray);


//11.Mettez le nom des entreprises en majuscule, un par un, et affichez-les

// const itCompanies = ["Facebook", "Google", "Microsoft", "Apple", "IBM", "Oracle", "Amazon"];

// for(let i = 0;i < itCompanies.length;i++){
//     var majuscule = itCompanies[i].toUpperCase();
//     console.log(majuscule); 
// }

/*sortie:  
FACEBOOK
GOOGLE 
MICROSOFT 
APPLE 
IBM 
ORACLE
AMAZON
*/

//12.Affichez le tableau sous 
//  forme de phrase: "Facebook, Google, Microsoft, Apple, IBM, Oracle et Amazon sont de grandes entreprises d'IT".

// console.log(itCompanies[0] + ", " + itCompanies[1] + ", " + itCompanies[2] + ", " + itCompanies[3] + ", " + itCompanies[4] + ", " + itCompanies[5] + " et " + itCompanies[6] + " sont de grandes entreprises d'IT");

//13.Vérifiez si une certaine entreprise existe dans le tableau itCompanies. 
//  S'il existe, retournez le nom de l'entreprise sinon retournez "une société introuvable".

// let entreprise = "Facbook";


// for(var i = 0; i < itCompanies.length;i++){
//     if(entreprise == itCompanies[i]){
//         console.log(itCompanies[i]);
//         break;
//     }else{
//         console.log("une société introuvable");
//     }
// }

// if(entreprise == itCompanies[0] || entreprise == itCompanies[1] || entreprise == itCompanies[2] || entreprise == itCompanies[3] || entreprise == itCompanies[4] || entreprise == itCompanies[5] || entreprise == itCompanies[6]){
//     console.log(entreprise);
// }else{
//     console.log("une société introuvable");
// }


//14.(Facultatif) Filtrez les entreprises qui ont plus d'un 'o' sans utiliser la méthode filter

// const itCompanies = ["Facebook", "Google", "Microsoft", "Apple", "IBM", "Oracle", "Amazon"];
// var count = 0;


// for(let i = 0; i < itCompanies.length; i++){
//     let nom = itCompanies[i];   
//     for(let j = 0; j < nom.length;j++){
//         if(nom[j] == "o"){
//             count++;
//             if(count == 2){
//                 console.log(nom);
//                 count = 0;
//             }
//         }
//     }    
// }


//15.Trier le tableau en utilisant la méthode sort()

// const itCompanies = ["Facebook", "Google", "Microsoft", "Apple", "IBM", "Oracle", "Amazon"];
// console.log(itCompanies.sort());

//16.Inversez le tableau en utilisant la méthode reverse()
// const itCompanies = ["Facebook", "Google", "Microsoft", "Apple", "IBM", "Oracle", "Amazon"];
// console.log(itCompanies);

//TEST 1
// const reverse1 = itCompanies.reverse();
// console.log(reverse1); //sortie: Array(7) [ "Amazon", "Oracle", "IBM", "Apple", "Microsoft", "Google", "Facebook" ]


//TEST 2
// console.log(itCompanies.reverse()); // sortie: Array(7) [ "Amazon", "Oracle", "IBM", "Apple", "Microsoft", "Google", "Facebook" ]


//17.Récupez dans un tableau les 3 premières entreprises du tableau itCompanies en utilisant la méthode slice()

// const itCompanies = ["Facebook", "Google", "Microsoft", "Apple", "IBM", "Oracle", "Amazon"];

// var x = itCompanies.slice(0,3);
// console.log(x); //sortie: Array(3) ["Facebook", "Google", "Microsoft"]

//18.Récupez dans un tableau les 3 dernières entreprises du tableau itCompanies en utilisant la méthode slice()
// const itCompanies = ["Facebook", "Google", "Microsoft", "Apple", "IBM", "Oracle", "Amazon"];

// console.log(itCompanies.slice(-3)); //sortie: Array(3) ["IBM", "Oracle", "Amazon" ]

//19.Récupez dans un tableau le milieu du tableau itCompanies, à savoir ["Apple"] en utilisant la méthode slice()
// const itCompanies = ["Facebook", "Google", "Microsoft", "Apple", "IBM", "Oracle", "Amazon"];

// console.log(itCompanies.slice(3,4)); //sortie: Array ["Apple"]

//20.Supprimez le premier élément du tableau itCompanies en utilisant la méthode splice()
// const itCompanies = ["Facebook", "Google", "Microsoft", "Apple", "IBM", "Oracle", "Amazon"];

// var firstElement = itCompanies.splice(0,1);

// console.log(itCompanies); //sortie: Array(6) ["Google", "Microsoft", "Apple", "IBM", "Oracle", "Amazon" ]

//21.Supprimez un élément au milieu du tableau itCompanies en utilisant la méthode splice()
// const itCompanies = ["Facebook", "Google", "Microsoft", "Apple", "IBM", "Oracle", "Amazon"];
// var middleElement = itCompanies.splice(3,1);

// console.log(itCompanies); // sortie: Array(6) [ "Facebook", "Google", "Microsoft", "IBM", "Oracle", "Amazon" ]

//22.Supprimez le dernier élément du tableau itCompanies en utilisant la méthode splice()

// const itCompanies = ["Facebook", "Google", "Microsoft", "Apple", "IBM", "Oracle", "Amazon"];

// var deleteLastElement = itCompanies.splice(-1,1);

// console.log(itCompanies); //sortie: Array(6) [ "Facebook", "Google", "Microsoft", "Apple", "IBM", "Oracle" ]


//23.Supprimez tous les éléments du tableau itCompanies.
const itCompanies = ["Facebook", "Google", "Microsoft", "Apple", "IBM", "Oracle", "Amazon"];

//MEILLEUR METHODE POUR EFFACER
// var deleteAllElement = itCompanies.splice(0);
// console.log(itCompanies);



