var obj_allLogins = localStorage.getItem("allLogins")

if (obj_allLogins == null) {
    obj_allLogins = []
}

/*
Estrutura base do login
obj_allLogins [
    {
        emailCliente:
        carrinhoCliente: [
            nomeProduto, nomeProduto, ...
        ]
    }
]
*/



function loginChecker() {
    let objPessoa = localStorage.getItem("pessoaLogada")
    async function login() {
        const email = document.getElementById("email");
        const senha = document.getElementById("senha");

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
            window.location.href = "telaProdutos.html"
        } else {
            alert("Email ou senha incorretos")
            email.value = ""
            senha.value = ""
        }
    }
}