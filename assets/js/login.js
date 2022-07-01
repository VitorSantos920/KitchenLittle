var obj_allLogins = JSON.parse(localStorage.getItem("allLogins"))

if (obj_allLogins == null) {
    obj_allLogins = []
}

async function login() {
    const email = document.getElementById("email");
    const senha = document.getElementById("senha");

    const resposta = await fetch("https://codifica-demo-api.herokuapp.com/api/v1/users/login", {
        method: "POST",
        body: JSON.stringify({
            email: email.value,
            senha: senha.value
        }),
        headers: {
            "Content-Type": "application/json"
        }
    });

    if (resposta.ok) {
        localStorage.setItem("loginAtual", email.value)

        let achou = false
        for (let i = 0; i < obj_allLogins.length; i++) {
            if (obj_allLogins[i].emailCliente == email.value) {
                achou = true
                break
            }
        }

        if (!achou) {
            obj_allLogins.push({
                emailCliente: email.value,
                carrinhoCliente: []
            })
        }

        localStorage.setItem("allLogins", JSON.stringify(obj_allLogins))

        window.location.href = "telaProdutos.html"
    } else {
        alert("Email ou senha incorretos")
        email.value = ""
        senha.value = ""
    }
}

const showPassword = () => {
    let input = document.getElementById("senha").type = "text";
}

const hiddenPassword = () => {
    let input = document.getElementById("senha").type = "password"
}