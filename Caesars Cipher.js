function rot13(str) {
  let fraccionada = str.split("");
  console.log(fraccionada);
  const abecedario = [
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z",
  ].join();
  console.log(abecedario);
  let lastLetter = abecedario.charCodeAt(abecedario.length - 1);
  console.log(lastLetter);
  let firstLetter = abecedario.charCodeAt(0);
  console.log(firstLetter);

  let cadenaFinal = fraccionada.map(function (letra) {
    let valorLetra = letra.charCodeAt(0);
    while (valorLetra < 65 || valorLetra > 90) {
      return String.fromCharCode(valorLetra);
    }
    if (valorLetra < 78) {
      return String.fromCharCode(valorLetra + 13);
    } else {
      return String.fromCharCode(valorLetra - 13);
    }
  });
  return cadenaFinal.join("");
}

rot13("SERR PBQR PNZC");
