const email = localStorage.getItem("loginAtual")
const arrayCarrinho = JSON.parse(localStorage.getItem("allLogins")).find(element => element.emailCliente == email).carrinhoCliente

const template = document.getElementsByTagName("template")[0].content

arrayCarrinho.forEach(element => {
    cloneAtual = template.cloneNode(true)

    cloneAtual.querySelector("img").src = element.productImage
    cloneAtual.querySelector("#nome").innerHTML = element.productName
    cloneAtual.querySelector("#preco-unitario").innerHTML = element.productPrice

    document.getElementsByClassName("all-produtos")[0].append(cloneAtual)
});
console.log(template)