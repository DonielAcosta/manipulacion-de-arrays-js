const  abc = ['a','b','c'];

for (let index = 0; index < abc.length; index++) {
    const element = abc[index];
    console.log(element);
}

abc.forEach(item => {console.log(item)});