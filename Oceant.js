//alert ("Bonjour maître, comment allez vous ?");
let death = "Tout";
let type = "poisson";

function aufWiedersehen()
{
    console.log("Tschüss");
    console.log("auf Wiedersehen");
}
function skellete() {
    let mort = 250;
    return mort;
}

for (let i = 0; i < 25; i++) //La premier et effectuer une fois au début de la boucle (une seul chose) ; expresion/condition pour que la boucle continue; et une expresion est effectuer a chaque fin de boucle (ou une fonction pour avoir plusieur chose qui sexécute)
{
    console.log(death + " les " + type)
    /*while (i < 5) { //danger

    }*/
}
let nombre = skellete();
console.log("Il y a "+ nombre + " skellete !");
aufWiedersehen();

console.log("Il y aura peut être un tableau")
let tab = [];
tab.push ("cadavre");
tab.push(250);
console.log("Dans la mer il y a")
console.log(tab);
let tabDeux = [24,"plencton",function(){"je suis une fonction";}]
console.log(tabDeux[0])
console.log(tabDeux[2])
tabDeux.forEach(element =>{ //pour parcourire tout le tableau
    console.log(element); //affiche les élément récupéré
});
