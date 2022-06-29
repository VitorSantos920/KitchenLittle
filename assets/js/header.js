function loginChecker() {
    let loginAtual = localStorage.getItem("loginAtual");

    if (loginAtual != null) {
        let headerUl = document.getElementsByClassName("menu-items")[0];
        let headerContent = headerUl.querySelectorAll("li");

        for (let i = 0; i < headerContent.length; i++) {
            let atual = headerContent[i].querySelector("a")

            if (atual.innerHTML == "Entrar") {
                atual.innerHTML = "Sair"
                atual.href = ""
                atual.setAttribute("onclick", "logout()")

                let newLi = document.createElement("li")
                let newA = document.createElement("a")

                newA.innerHTML = "Meu Carrinho"
                newA.href = "Carrinho.html"
                newA.setAttribute("onclick", "atualizarCarrinho()")
                newLi.append(newA)
                newLi.className = "item"
                headerUl.append(newLi)
            } else {
                atual.setAttribute("onclick", "atualizarCarrinho()")
            }
        }
    }
}

function logout() {
    atualizarCarrinho()
    localStorage.removeItem("loginAtual")
    localStorage.removeItem("produtosNoCarrinho")

    window.location.reload()
}

function atualizarCarrinho() {
    let inCart = JSON.parse(localStorage.getItem("produtosNoCarrinho"))
    let obj_allLogins = JSON.parse(localStorage.getItem("allLogins"))
    let login = localStorage.getItem("loginAtual")


    for (let i = 0; i < obj_allLogins.length; i++) {
        if (obj_allLogins[i].emailCliente == login) {
            obj_allLogins[i].carrinhoCliente = inCart
            break
        }
    }


    localStorage.setItem("allLogins", JSON.stringify(obj_allLogins))
}

loginChecker()