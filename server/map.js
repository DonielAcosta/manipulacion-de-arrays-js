const  abc = ['a','b','c'];

const newArray = abc.map(item => item + '++')
// const newArray = [];
// for (let index = 0; index < abc.length; index++) {
//     const element = abc[index];
//     // console.log(element);
//     newArray.push(element + '++');
// }

console.log('original',abc);
console.log('nuevo',newArray);

