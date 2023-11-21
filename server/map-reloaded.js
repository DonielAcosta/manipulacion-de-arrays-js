const orders = [
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


console.log('original',orders);

const respuesta = orders.map(item => item.total);

console.log('nuevo',respuesta);

const respuesta2 = orders.map(item => {
    item.tax = .19;
    return item;
});

console.log('original',orders);
console.log('nuevo2',respuesta2);

const respuesta3 = orders.map(item => {
    item.tax = .19;
    return {...item,tax:.19};
});