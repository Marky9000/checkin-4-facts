/*Deel 1:
Maak een nieuwe JavaScript file
Maak een const genaamd age en geef het een waarde van het type number
Schrijf een if statement die controleert of de age van de persoon (de input) groter is dan of gelijk aan 18 jaar.
Console.log() een bericht naar de console wanneer de persoon naar binnen mag.
Console.log() een ander bericht wanneer de persoon te jong is en vriendelijk wordt verzocht buiten te blijven.
Draai je programma in node, zoals je hebt geleerd.
Probeer een aantal variabelen als input (de leeftijd van de persoon aan de deur). Werkt je code?*/
var age = 19
if (age > 18) {
    document.write('Wij heten van harte welkom!')
}
else {
    document.write('helaas , u kunt niet naar binnen');

    /*Deel 1:
    Maak een nieuwe JavaScript file
    Maak een const genaamd age en geef het een waarde van het type number
    Schrijf een if statement die controleert of de age van de persoon (de input) groter is dan of gelijk aan 18 jaar.
    Console.log() een bericht naar de console wanneer de persoon naar binnen mag.
    Console.log() een ander bericht wanneer de persoon te jong is en vriendelijk wordt verzocht buiten te blijven.
    Draai je programma in node, zoals je hebt geleerd.
    Probeer een aantal variabelen als input (de leeftijd van de persoon aan de deur). Werkt je code?*/
    var age = 19
    if (age > 18) {
        document.write(' Wij heten van harte welkom!');
    }
    else {
        document.write('wij verzoeken u niet naar binnen te gaan!');
    }

    /*Deel 2:
    Naast de leeftijdsgrens, heb je ook een ladiesnight. 
    Voor de kaartverkoop van het feest, moet er natuurlijk online gecontroleerd worden over de persoon die de tickets koopt aangegeven heeft een vrouw te zijn.
    Je gaat verder in dezelfde file
    Schrijf een nieuwe const genaamd isFemale die als waarde een boolean krijgt.
    Schrijf een if statement die controleert of de input waar is of niet waar is.
    Console.log weer iets naar de console wanneer de waarde waar is én wanneer de waarde niet waar is.*/

    isFemale = true
    if (true) {
        document.write('Welkom en fijne Ladiesnight!');
    }
    document.write('Helaas, u kunt niet naar binnen ');
}
/*Deel 3:
Als kroegbaas vind je het ook belangrijk dat de mensen veilig thuiskomen. Zeker als ze natuurlijk een glaasje hebben gedronken.
Je gaat verder in dezelfde file.
Schrijf een nieuwe const genaamd driverStatus met de waarde 'bob'.
Schrijft een if statement die controleert of de input van de driverStatus gelijk is aan 'bob'.
Console.log een bericht als de bestuurder de status van bob heeft en mag rijden.
Console.log een bericht als de bestuurder geen bob is en dus niet mag rijden.*/

var driverstatus = bob

if (driverstatus == bob) {
    document.write('goede reis');
}
else {
    document.write('U mag niet rijden');
}

