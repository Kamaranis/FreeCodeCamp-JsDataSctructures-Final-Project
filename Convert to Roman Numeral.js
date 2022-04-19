function convertToRoman(num) {
  const numeros = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
  const romanos = [
    "M",
    "CM",
    "D",
    "CD",
    "C",
    "XC",
    "L",
    "XL",
    "X",
    "IX",
    "V",
    "IV",
    "I",
  ];

  let resultado = "";
  numeros.map(function (numero, i) {
    while (num >= numero) {
      resultado += romanos[i];
      num -= numero;
    }
  });

  return resultado;
}

convertToRoman(36);
