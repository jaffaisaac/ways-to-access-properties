//the Dot property access way
const city ={
    town : 'Jinja',
    street: 'Nabowa'

}
console.log(city.town);

/*********************************************************** */
//thisos the square bracket object property access way
const Hero ={
    name : "Ben"
}
let p =Hero['name']
const prop =['name']
console.log(p, Hero[prop]);

/*********************************************************** */


//this is object destructing way to access the  object properties
const property = 'fname';
const person = {
  fname: 'Batman'
};
// Object destructuring:
const { [property]: fname } = person;
fname; // => 'Batman'

 let  y =Object.defineProperty( Hero,'name',{
    value :'Welocme',
    enumerable :true,
    configurable:true ,
    writable:true
});
console.log(y)