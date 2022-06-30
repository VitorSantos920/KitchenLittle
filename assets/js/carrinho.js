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



function mudarQuantidade(element, valor) {
    if (parseInt(element.querySelector("p").innerHTML) + valor >= 1 && parseInt(element.querySelector("p").innerHTML) + valor <= 20) {
        element.querySelector("p").innerHTML = parseInt(element.querySelector("p").innerHTML) + valor
    }
}