naam = prompt("Wat is je naam?");
alert("Hallo, " + naam);
achternaam = prompt("Wat is je achternaam?");
leeftijd = prompt("Hoe oud ben jij?");
gegevens = [naam, achternaam, leeftijd];
let text = "";

for (let i = 0; i < gegevens.length; i++) {
    text += gegevens[i] + "<br>";
}
document.getElementById("gegevens").innerHTML = text;