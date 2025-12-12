var c4 = "Nitrogliserine"; //disponible dans tout le programe
var eau = "H2o";
let terre = "terre" // permmet de declared une variable que pour une fonction, se détruit après
const TERRE_O = 8;// C'est une constante quoi
const TERRE_H = 1;
const idorphobe = false;

console.log(eau);
console.log(TERRE_H);
console.log(TERRE_O);
console.log("Poids");
console.log(TERRE_O * 2 + TERRE_H);
console.log("La rivier coule toujour !");
console.log(window)
console.log(c4)
c4 = "Nitro"
console.log(c4)
function Eau(parametre) {
    console.log(parametre + "eau");
}
Eau("verss")
Eau("feu et ")
// ! Le java doit bien étre aprés la création de l'élément !
//On donne l' id de la div à getElementById
//document englobe tout la page web
let unDiv = document.getElementById("Un")
let DeuxDiv = document.getElementsByName("")
let TroisDiv = document.getElementById("Trois")
let Trois = document.getElementById
console.log("info la div va soufrire !")
console.log(unDiv.innerHTML)
//unDiv.innerHTML = ""; pour modif les info a l'intérieur
//unDiv.classList.add("doite");//ajouter une classe
//unDiv.classList.remove("centre");
//TroisDiv.innerHTML.add("doite");
//var divClick1 = document.getElementById("Click1");
var divOndrag1 = document.getElementById("ondrag1");
//divClick1.Onclick = function (event) {
//    alert("tempéte de sang");
//}
divOndrag1.ondrag = function (event) {
    alert("lache !");
}

var cli =document.getElementById("Click1");
//var divOndrag1 = document.getElementById("ondrag1");

cli.addEventListener("click",Ares);
//divOndrag1.addEventListener("ondrag",Mars)
function Ares (event)
{
    alert ("tempéte de sang");
}
/*function Mars (event)
{
    alert("lache !");
}*/
