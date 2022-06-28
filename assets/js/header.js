function loginChecker() {
    let loginAtual = localStorage.getItem("loginAtual")

    if (loginAtual != null) {
        let headerUl = document.getElementsByClassName("menu-items")[0]
        let headerContent = headerUl.querySelectorAll("li")

        for (let i = 0; i < headerContent.length; i++) {
            let atual = headerContent[i].querySelector("a")

            if (atual.innerHTML == "Entrar") {
                atual.innerHTML = "Sair"

                let newLi = document.createElement("li")
                let newA = document.createElement("a")

                newA.innerHTML = "Meu Carrinho"
                newA.href = "Carrinho.html"
                newLi.append(newA)
                newLi.className = "item"
                headerUl.append(newLi)
            }
        }
    }
}

loginChecker()