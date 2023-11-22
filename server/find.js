const numbers = [1,30,49,29,10,13];

let respuesta = undefined;
for (let index = 0; index < numbers.length; index++) {
  const element = numbers[index];
  if (element === 30) {
    respuesta = element;
    break;
  }
}
console.log('for', respuesta);
const respuesta2 = numbers.find(item => item === 30)
console.log('find', respuesta2);


const products = [
  {
    name: "Pizza",
    price: 12,
    id: '🍕'
  },
  {
    name: "Burger",
    price: 23,
    id: '🍔'
  },
  {
    name: "Hot dog",
    price: 34,
    id: '🌭'
  },
  {
    name: "Hot cakes",
    price: 355,
    id: '🥞'
  },
];

const respuesta3 = products.find(item => item.id === '🍔')
console.log('find', respuesta3);
const respuesta4 = products.findIndex(item => item.id === '🍔')
console.log('findIndex', respuesta4);