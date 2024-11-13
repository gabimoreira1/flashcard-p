
function criarCartao(categoria,pergunta,resposta){
    let container = document.grtElementById('container')
    let cartao = document.createElement('article')
    cartao,className = 'cartao'

cartao.innerHTML = `
<div class="cartão__conteudo"></div>
<h3>${categoria}</h3>
<div class="cartão__conteudo__pergunta">
   <p>${pergunta}</p> 
</div>
<div class="cartão__conteudo__resposta">
    <p>${resposta}</p>
</div>
</div>
`
container.appendChild(cartao)
}

