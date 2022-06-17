function mudarNumero() {
  let numeroDigitado = document.querySelector("#inputNumber").value;
  let resultadoDigitado = document.querySelector(".resultado");

  if (numeroDigitado === null || numeroDigitado === "") {
    resultadoDigitado.innerHTML =
      "Nenhum número foi encontrado, favor revisar!";
  } else if (numeroDigitado >= 101 || numeroDigitado <= 0) {
    resultadoDigitado.innerHTML =
      "Infelizmente a quantidade não suportada MIN = 1 e MAX = 100.";
  } else {
    for (let i = 0; i <= numeroDigitado; i++) {
      resultadoDigitado.innerHTML += `${"*".repeat(i)}\n`;
    }
  }
}
