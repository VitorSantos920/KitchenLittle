if (localStorage.getItem("loginAtual") == null) {
    window.location.href = "index.html"
}

const email = localStorage.getItem("loginAtual")
const allLogins = JSON.parse(localStorage.getItem("allLogins"))
const arrayCarrinho = allLogins.find(element => element.emailCliente == email).carrinhoCliente

const template = document.getElementsByTagName("template")[0].content

function mostrarItens() {
    document.getElementsByClassName("all-produtos")[0].innerHTML = ""

    arrayCarrinho.forEach(element => {
        cloneAtual = template.cloneNode(true)

        cloneAtual.querySelector("img").src = element.productImage
        cloneAtual.querySelector(".nome-produto").innerHTML = element.productName
        cloneAtual.querySelector(".preco-unitario").innerHTML = element.productPrice
        cloneAtual.querySelector(".quantidade-produto").innerHTML = element.quantidade

        document.getElementsByClassName("all-produtos")[0].append(cloneAtual)
    });
    atualizarPrecos()
}


function mudarQuantidade(element, valor) {
    if (parseInt(element.querySelector("p").innerHTML) + valor >= 1 && parseInt(element.querySelector("p").innerHTML) + valor <= 20) {
        element.querySelector("p").innerHTML = parseInt(element.querySelector("p").innerHTML) + valor

        const nome = element.parentElement.parentElement.querySelector("p").innerHTML

        for (let i = 0; i < arrayCarrinho.length; i++) {
            if (arrayCarrinho[i].productName == nome) {
                arrayCarrinho[i].quantidade += valor

                for (let i = 0; i < allLogins.length; i++) {
                    if (allLogins[i].emailCliente == email) {
                        allLogins[i].carrinhoCliente = arrayCarrinho
                        localStorage.setItem("allLogins", JSON.stringify(allLogins))
                        localStorage.setItem("produtosNoCarrinho", JSON.stringify(arrayCarrinho))
                        mostrarItens()
                        break
                    }
                }
                break
            }
        }


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

function removerDoCarrinho(element) {
    const nome = element.querySelector("p").innerHTML

    for (let i = 0; i < arrayCarrinho.length; i++) {
        if (arrayCarrinho[i].productName == nome) {
            arrayCarrinho.splice(i, 1)

            for (let i = 0; i < allLogins.length; i++) {
                if (allLogins[i].emailCliente == email) {
                    allLogins[i].carrinhoCliente = arrayCarrinho
                    localStorage.setItem("allLogins", JSON.stringify(allLogins))
                    localStorage.setItem("produtosNoCarrinho", JSON.stringify(arrayCarrinho))
                    mostrarItens()
                    break
                }
            }
            break
        }
    }

}

function finalizarCompra() {
    alert("Compra finalizada com sucesso")

    arrayCarrinho.splice(0, arrayCarrinho.length)

    for (let i = 0; i < allLogins.length; i++) {
        if (allLogins[i].emailCliente == email) {
            allLogins[i].carrinhoCliente = arrayCarrinho
            localStorage.setItem("allLogins", JSON.stringify(allLogins))
            localStorage.setItem("produtosNoCarrinho", JSON.stringify(arrayCarrinho))
            mostrarItens()
            break
        }
    }
}

mostrarItens()
atualizarPrecos()