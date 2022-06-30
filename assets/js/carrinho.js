const email = localStorage.getItem("loginAtual")
const arrayCarrinho = JSON.parse(localStorage.getItem("allLogins")).find(element => element.emailCliente == email).carrinhoCliente

const template = document.getElementsByTagName("template")[0].content

arrayCarrinho.forEach(element => {
    cloneAtual = template.cloneNode(true)

    cloneAtual.querySelector("img").src = element.productImage
    cloneAtual.querySelector(".nome-produto").innerHTML = element.productName
    cloneAtual.querySelector(".preco-unitario").innerHTML = element.productPrice

    document.getElementsByClassName("all-produtos")[0].append(cloneAtual)
});

atualizarPrecos()



function mudarQuantidade(element, valor) {
    if (parseInt(element.querySelector("p").innerHTML) + valor >= 1 && parseInt(element.querySelector("p").innerHTML) + valor <= 20) {
        element.querySelector("p").innerHTML = parseInt(element.querySelector("p").innerHTML) + valor
        atualizarPrecos()
    }
}

function atualizarPrecos() {
    const precos = document.getElementsByClassName("preco-unitario")
    const quantidades = document.getElementsByClassName("quantidade-produto")
    const total = document.getElementsByClassName("total-produto")
    let totalCompra = document.getElementById("total-compra")

    totalCompra.innerHTML = 0
    for (let i = 0; i < total.length; i++) {
        total[i].innerHTML = "R$ " + parseFloat(parseFloat(precos[i].innerHTML.slice(2).replace(",", ".")) * parseFloat(quantidades[i].innerHTML)).toFixed(2)

        totalCompra.innerHTML = parseFloat(parseFloat(totalCompra.innerHTML) + parseFloat(total[i].innerHTML.slice(2).replace(",", "."))).toFixed(2)
    }
    totalCompra.innerHTML = "R$ " + totalCompra.innerHTML
}