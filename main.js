import "./style.css";

import Chance from "chance";

const chance = new Chance();

const name = chance.first();
const lastName = chance.last();
const profile = chance.avatar();
const animal = chance.animal();
const age = chance.age();
const year = chance.year();
const city = chance.city();
const numer = chance.natural({ min: 1, max: 200 });

document.querySelector("#app").innerHTML = `

<img class ="profile" src="${profile}" alt="profile">  

  <h1> ${name} ${lastName}!</h1>
<div>
  <p> Hey, my name is ${name} and I am a ${age}. Iwas born in the yaer of ${year}
  in the city of ${city}. My favorite animal is the ${animal}. But I also love numbers! My favorite one is ${numer}.</p>
  </div>
  `;
