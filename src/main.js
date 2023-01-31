
var botao = document.getElementById("botao")

botao.addEventListener("click", () => {
  var valorEmReal = document.getElementById("entrada").value
  var select = document.getElementById("moedas").value
  var cifrao

  if(select == "euro") {
    var euro = 5.54
    var valorEmReal = valorEmReal / euro
    var cifrao = "€"
    
  } else if (select == "dolar") {
    var dolar = 5.12
    var cifrao = "US$"
    var valorEmReal = valorEmReal / dolar

  } else if (select == "criptomoeda") {
    var criptomoeda = 116358.14
    var cifrao = "₿"
    var valorEmReal = valorEmReal / criptomoeda
  }

  var valorFormatado = valorEmReal.toFixed(2).replace(".", ",")
  lugar.innerHTML = `<p> O resultado do valor convertido é:  ${cifrao} ${valorFormatado}</p> `
  
})