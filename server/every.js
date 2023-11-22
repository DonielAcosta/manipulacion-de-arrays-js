const numbers = [1,30,39,29,10,13];


let respuesta = true;
for (let index = 0; index < numbers.length; index++) {
    const element = numbers[index];
    if (element >= 40) {
        respuesta = false
    }
}
console.log('for', respuesta);
const respuesta2 = numbers.every(item => item <= 40)
console.log('respuesta2', respuesta2);


// const team = [
//   {
//     name: "Nicolas",
//     age: 12,
//   },
//   {
//     name: "Andrea",
//     age: 8,
//   },
//   {
//     name: "Zulema",
//     age: 2,
//   },
//   {
//     name: "Santiago",
//     age: 18,
//   },
// ];