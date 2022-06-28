
var obj_allLogins = localStorage.getItem("allLogins")

if(obj_allLogins == null){
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

    if (objPessoa != null) {

    }
}