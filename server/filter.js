const telefonos =['sansumg','infinit','nokia','xiami'];

const newArray =[];
for (let index = 0; index < telefonos.length; index++) {
    const element = telefonos[index];
    if(element.length >= 6){        
        newArray.push(element);
    }
}


console.log('nuevo',newArray);
console.log('original',telefonos);

const respuesta = telefonos.filter(item => item.length>=6)

console.log('nuevo',respuesta);
console.log('original',telefonos);



const compra = [
    {
      customerName: "Nicolas",
      total: 60,
      delivered: true,
    },
    {
      customerName: "Zulema",
      total: 120,
      delivered: false,
    },
    {
      customerName: "Santiago",
      total: 180,
      delivered: true,
    },
    {
      customerName: "Valentina",
      total: 240,
      delivered: true,
    },
  ];

  const respuesta3 = compra.filter(item => item.delivered && item.total >=100) ;
  console.log('respuesta 3',respuesta3);

  const search =(query)=>{
    return compra.filter(item =>{
        return item.customerName.includes(query);
    })
  }

  console.log(search('Valentina'));
