// var generateName = require('sillyname');

import generateName from 'sillyname';
var sillyName = generateName();

console.log(`My Name is ${sillyName}.`);

import superheroes from 'superheroes';
// const superheroes = require('superheroes');

superheroes.all;
superheroes.random();

console.log(`I'm ${superheroes.random()}!`);

//BISA JUGA SEPERTI INI
// import superheroes from 'superheroes';
const name = superheroes.random();
console.log(`I'm ${name}!`);
