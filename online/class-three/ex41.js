// Para este exercício, já temos uma array de destinos mundiais.

// Queremos que, usando a desestruturação, você defina as variáveis ​​bariloche e china e extraia apenas os destinos "Bariloche" e 
// "China" da array.

let destinosIncriveis = ['Marruecos', 'Bariloche', 'Barcelona', 'China', 'Grecia'];

let[ ,bariloche, ,china] = destinosIncriveis;
console.log(bariloche, china);