naam = prompt("Wat is je naam?");
alert("Hallo, " + naam);
leeftijd = prompt("Hoe oud ben jij?");
adres = prompt("Waar ben je geboren?");
gegevens = [naam, leeftijd, adres];
let text = "";

for (let i = 0; i < gegevens.length; i++) {
    text += gegevens[i] + "<br>";
}
document.getElementById("gegevens").innerHTML = text;