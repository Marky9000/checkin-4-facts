

const array = [
  { name: "N. Armstrong", profession: "spacecowboy", age: 89 },
  { name: "H. de Haan", profession: "kippen hypnotiseur", age: 59 },
  { name: "A. Curry", profession: "kikvorsman", age: 32 },
  { name: "F. Vonk", profession: "slangenmelker", age: 36 },
  { name: "B. Bunny", profession: "konijnen uitlaatservice", age: 27 },
  { name: "Dr.Evil", profession: "digital overlord", age: 56 }
];

// for (const element of array) {
//   console.log(element); }



// for (const {name} of array){ 
// console.log('Dit is '+ name);
// }

// console.log(array);

// for (const {name, age} of array){ 
//   console.log('Van ' +name + ' is het geboortejaar: '+ (2020 -age));
//   }
  
//   console.log(array);
//   //hier moeten console.logs komen
// // }Hoe ziet elk object eruit? Log all objecten in de loop. Voorzie je console.log van een begeleidende tekst, zodat je weet wat je gaat loggen (good practice):

// // console.log("Dit is de gehele persoon:", [hier moet het object komen]);

// for (const {name, profession} of array){ 
//   console.log(name + ' is een ' + profession);
//   }
  
//   console.log(array)

  const filterleeftijd = array.filter((boven50) => {
    return boven50.age >=50
  })

  console.log(filterleeftijd);