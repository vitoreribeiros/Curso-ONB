 function adicionar() {
    let residencia = document.querySelector('input#residencia')
    let bairro = document.querySelector('input#bairro')
    let cidade = document.querySelector('input#cidade')
    let areaDaCasa = document.querySelector('input#casa')

    let dados = document.querySelector('div#resultado')

    dados.innerText += `Numero da casa: ${residencia.value}\n
                        Bairro: ${bairro.value}\n
                        Cidade: ${cidade.value}\n
                        area da casa: ${areaDaCasa.value + 'm²'}`
 }

 function remover() {
    dados = document.querySelector('div#resultado')
    dados.innerText = ''
 }