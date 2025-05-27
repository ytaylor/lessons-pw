"use strict";

function makeComp(input) {
  input = input.toLowerCase();
  var output = "";
  for (var i = 0; i < input.length; i++) {
    if (input.charAt(i) == "a") output = output + "[aàáâãäåæ]";
    else if (input.charAt(i) == "c") output = output + "[cç]";
    else if (input.charAt(i) == "e") output = output + "[eèéêëæ]";
    else if (input.charAt(i) == "i") output = output + "[iìíîï]";
    else if (input.charAt(i) == "n") output = output + "[nñ]";
    else if (input.charAt(i) == "o") output = output + "[oòóôõöø]";
    else if (input.charAt(i) == "s") output = output + "[sß]";
    else if (input.charAt(i) == "u") output = output + "[uùúûü]";
    else if (input.charAt(i) == "y") output = output + "[yÿ]";
    else output = output + input.charAt(i);
  }
  return output;
}

const numbers = [
  3.1415,
  2.4356,
  7.2393,
  '39.2393',
  '232'
];

const intNumbers = numbers.map( (eachNumber) => parseInt(eachNumber) );

console.table(intNumbers);



const adalabers = [
  { name: "Bianca", lastname: "", promo: "Clara", teacher: "IVANICO" },  // --> 'Bianca'
  { name: "celia", lastname: "", promo: "Clara", teacher: "Ivanico" },
  { name: "Esther ", lastname: "Bonilla", promo: "Clara", teacher: "Ivanico" },
  { name: "Izaskun", lastname: "Monfort", promo: "Clara", teacher: "Ivanico" },
  { name: "Francheska", lastname: "", promo: "Clara", teacher: "Ivanico" },
  { name: "Fani", lastname: "", promo: "Clara", teacher: "Yanelis" },
  { name: "Julia", lastname: "", promo: "Clara", teacher: "Ivanico" },
  { name: "María", lastname: "", promo: "Clara", teacher: "Dayana" },
  { name: "Marta", lastname: "", promo: "Clara", teacher: "Ivanico" },
];

//adalabers.filter().map().find()



console.table(adalabers);

const adalabersNames = adalabers
  .map((eachAdalaberObj) => ({
    fullname: eachAdalaberObj.name + eachAdalaberObj.lastname,
    promo: eachAdalaberObj.promo,
    score: 0.0,
  }));

console.table(adalabersNames)

/*
const aprobadas = [];


const firstAdalaberWithoutLastName = adalabers.find( (obj) => obj.lastname === '' && obj.teacher.toLowerCase() === 'ivanico' );

aprobadas.push(firstAdalaberWithoutLastName);

console.table(firstAdalaberWithoutLastName);





//firstAdalaberWithoutLastName.lastName = 'Dragan';



/*

const adalabersWithoutLastname = adalabers.filter( (obj) => obj.lastname === '' && obj.teacher.toLowerCase() === 'ivanico' );

console.table(adalabersWithoutLastname);

const adalabersWithOtherTeacher = adalabers.filter( (obj) => obj.teacher === 'Yanelis' || obj.teacher === 'Dayana' );

console.table(adalabersWithOtherTeacher);

/*

const filteredNames = names.filter((eachName) =>
  eachName.toLocaleLowerCase().includes("mon")
);

*/






const names = [
  "Bianca",
  "celia",
  "Esther Bonilla",
  "Izaskun Monfort",
  "Francheska",
  "Fani",
  "Julia",
  "María",
  "Marta",
];

const filteredNames = names.filter((eachName) =>
  eachName.toLocaleLowerCase().includes("mon")
);

//const filteredNames = names.filter((eachName) => eachName.toLocaleLowerCase().startsWith('a') || eachName.toLocaleLowerCase().startsWith('b') || eachName.toLocaleLowerCase().startsWith('c')  );

console.log(names);

console.log(filteredNames);

/*
const nameToSearch = "CELIA";

const index = names.findIndex(
  (eachName, i) =>
    eachName.toLocaleLowerCase() === nameToSearch.toLocaleLowerCase()
);

/*
let index = -1;
//for( const eachName of names ) {
names.forEach( (eachName, i) => {
  console.log(i, eachName.toLocaleLowerCase(), nameToSearch.toLocaleLowerCase());
  console.log(  eachName.toLocaleLowerCase() === nameToSearch.toLocaleLowerCase()  );

  if( eachName.toLocaleLowerCase() === nameToSearch.toLocaleLowerCase() ) {
    index = i;
  }
});
*/

/*
const index = names.indexOf('Esther');
*/

//console.log("RESULTADO DE INDEX AL FINAL:", index);
