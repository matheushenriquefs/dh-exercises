// Temos um array com numeros definidos e queremos filtrar aqueles que são maiores de 18.
// Seu trabalho será definir a variável maiores e armazenar nela os números que cumpram com essa condição, utilizando o método filter.

let numeros = [12, 34, 22, 46, 18, 29, 44, 43, 39];

let maiores = numeros.filter(num => {
    return num > 18;
});