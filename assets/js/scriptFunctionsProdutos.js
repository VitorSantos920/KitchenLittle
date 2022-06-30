const dataBaseProducts = [
    //Utensílios
    //Facas
    {
        productName: "Conjunto com 3 facas Churrasco Belize Preto",
        productPrice: "R$ 8,90",
        productImage: "assets/images/produtos/conjunto_com_3_facas_churrasco_belize_preto.png"
    },
    {
        productName: "Conjunto Facas Cook Tolls Preto - 4 Peças",
        productPrice: "R$ 49,90",
        productImage: "assets/images/produtos/conjunto_facas_cook_tolls_preto_4_pecas.png"
    },
    {
        productName: "Conjunto De Facas Para Queijos Reggio Com Cabo Em Madeira Legnoart",
        productPrice: "R$ 439,90",
        productImage: "assets/images/produtos/conjunto_de_facas_para_queijos_reggio_com_cabo_em_madeira.png"
    },
    {
        productName: "Conjunto de Facas Ichef Polishop - Professional Cut - Shark Series - Red",
        productPrice: "R$ 170,94",
        productImage: "assets/images/produtos/faca-polishop.png"
    },

    //Colheres
    {
        productName: "Jogo De Colher Inox E Plástico Modelo Bambu 6 Peças - Mimo",
        productPrice: "R$ 34,59",
        productImage: "assets/images/produtos/jogo_de_colher_inox_e_plastico_modelo_bambu_6_pecas_mimo.png"
    },
    {
        productName: "Kit Jogo 06 Colheres De Mesa Tramontina Cosmos Em Aço Inox",
        productPrice: "R$ 60,90",
        productImage: "assets/images/produtos/kit_jogo_06_colheres_de_mesa_tramontina_cosmos_em_aco_inox.png"
    },
    {
        productName: "Jogo De Colheres Para Café Em Inox Wolff Pisa 6 Peças Preto",
        productPrice: "R$ 119,90",
        productImage: "assets/images/produtos/jogo_de_colheres_para_cafe_em_inox_wolff_pisa_6_pecas_preto.png"
    },
    {
        productName: "Jogo Colheres Para Chá Inox Bon Gourmet Music 4 Peças Dourado",
        productPrice: "R$ 68,31",
        productImage: "assets/images/produtos/jogo_colheres_para_cha_inox_bon_gourmet_music_4_pecas_dourado.png"
    },

    //Garfos
    {
        productName: "Conjunto Com 12 Garfos De Mesa Inox Biona - Oxford",
        productPrice: "R$ 48,90",
        productImage: "assets/images/produtos/conjunto_com_12_garfos_de_mesa_inox_biona_oxford.png"
    },
    {
        productName: "Jogo De Garfos Para Sobremesa Lugano Inox 6 Peças - Wolff",
        productPrice: "R$ 78,99",
        productImage: "assets/images/produtos/jogo_de_garfos_para_sobremesa_lugano_inox_6_pecas_wolff.png"
    },

    //Outros
    {
        productName: "Descascador Ichef Polishop - Blue",
        productPrice: "R$ 47,48",
        productImage: "assets/images/produtos/descascador.png"
    },



    //Panelas e relacionados
    {
        productName: "Panela Ichef Polishop - Sauté Petit - 20Cm - Shark Series - Azul",
        productPrice: "R$ 170,83",
        productImage: "assets/images/produtos/frigideira01.png"
    },
    {
        productName: "Panela Polishop - Sauté Petit - 20Cm - Vermelha",
        productPrice: "R$ 284,89",
        productImage: "assets/images/produtos/frigideira02.png"
    },
    {
        productName: "Tampa de Vidro Polishop - 24Cm - Vermelha",
        productPrice: "R$ 132,95",
        productImage: "assets/images/produtos/tampa01.png"
    },
    {
        productName: "Espátula de Silicone Ichef Polishop - Blue",
        productPrice: "R$ 75,96",
        productImage: "assets/images/produtos/espatula.png"
    },
    {
        productName: "Chapa Antiaderente Teppanyaki - Ichef Shark Series - 49Cm - Azul",
        productPrice: "R$ 341,89",
        productImage: "assets/images/produtos/chapa.png"
    },
    {
        productName: "Tábua de Corte Dupla Face Ichef Polishop - Smart Cut - Blue",
        productPrice: "R$ 113,96",
        productImage: "assets/images/produtos/tabua.png"
    },
    {
        productName: "Tampa de Vidro Polishop - 28Cm - Cobre Color",
        productPrice: "R$ 142,45",
        productImage: "assets/images/produtos/tampa02.png"
    },

    //Eletronicos **********************************************************************************************************
    {
        productName: "Churrasqueira Elétrica - Fast Grill Philco - 1200W",
        productPrice: "R$ 284,89",
        productImage: "assets/images/produtos/churras-eletro.png"
    },
    {
        productName: "Fritadeira Elétrica - Airfryer Ichef Polishop - AllSpace - Carmim - Vermelho",
        productPrice: "R$ 949,96",
        productImage: "assets/images/produtos/airfrier.png"
    },
    {
        productName: "Máquina de Waffle Oster Perform 180",
        productPrice: "R$ 319,90",
        productImage: "assets/images/produtos/waffle.png"
    },
    {
        productName: "Cuisinart Cafeteira Elétrica DCC3200W Branca 110V",
        productPrice: "R$ 2.030,13",
        productImage: "assets/images/produtos/cafeteira.png"
    },

    //Outros
    {
        productName: "Suporte Bloco De Madeira Para Facas De Cozinha Böker",
        productPrice: "R$ 336,90",
        productImage: "assets/images/produtos/suporte_bloco_de_madeira_para_facas_de_cozinha_boker.png"
    },
    {
        productName: "Suporte Bloco De Madeira Para Facas De Cozinha Böker",
        productPrice: "R$ 336,90",
        productImage: "assets/images/produtos/suporte_bloco_de_madeira_para_facas_de_cozinha_boker.png"
    },
    //Adiciona de 12 em 12 em
]

//ta sendo meio inutil
// var inCart = JSON.parse(localStorage.getItem("produtosNoCarrinho"))
var inCart

let email = localStorage.getItem("loginAtual")
if (email != null) {
    let allLogins = JSON.parse(localStorage.getItem("allLogins"))

    for (let i = 0; i < allLogins.length; i++) {
        if (email == allLogins[i].emailCliente) {
            inCart = allLogins[i].carrinhoCliente
            break
        }
    }
} else {
    inCart = []
}

localStorage.setItem("produtosNoCarrinho", JSON.stringify(inCart))

//#region funções
/**
 * 
 * @param {*} amount Define a quantidades de produtos que a função retorna - Padrão: 1
 * @returns Um array com objetos
 */
function getProducts(amount = 1) {
    if (amount > dataBaseProducts.length) {
        amount = dataBaseProducts.length
    }

    let arrayProducts = []
    let productsRemaining = [...dataBaseProducts]

    for (let i = 0; i < amount; i++) {
        let rNumber = Math.floor(Math.random() * productsRemaining.length)

        arrayProducts.push(productsRemaining[rNumber])
        productsRemaining.splice(rNumber, 1)
    }

    return arrayProducts
}

/**
 * 
 * @param {*} elementClass Classe do elemento
 * @Description Coloca imagem, nome e preço em todos os elementos contendo a classe passada.
 */
function setProducts(elementClass) {
    let elements = document.getElementsByClassName(elementClass)
    let pagina = document.getElementById("pagina")

    for (let i = 12 * (parseInt(pagina.innerHTML) - 1); i < 12 * parseInt(pagina.innerHTML); i++) {
        let elem = elements[i - 12 * (parseInt(pagina.innerHTML) - 1)]

        let h4 = elem.querySelector("h4")
        if (h4 != undefined) {
            h4.innerHTML = dataBaseProducts[i].productName
        }

        let p = elem.querySelector("p")
        if (p != undefined) {
            p.innerHTML = dataBaseProducts[i].productPrice
        }

        let img = elem.querySelector("img")
        if (img != undefined) {
            img.src = dataBaseProducts[i].productImage
        }

        elem.setAttribute("onclick", "addItemToCart(this)")

        inCart.forEach(element => {
            if (dataBaseProducts[i].productName == element.productName) {
                elem.className += " no-carrinho"
                elem.setAttribute("onclick", "removeItemOfCart(this)")
            }
        })
    }
}

function addItemToCart(elem) {
    let email = localStorage.getItem("loginAtual")
    if (email != null) {
        let nome = elem.querySelector("h4").innerHTML

        for (let i = 0; i < dataBaseProducts.length; i++) {
            if (nome == dataBaseProducts[i].productName) {
                inCart.push(dataBaseProducts[i])
                break
            }
        }

        elem.className += " no-carrinho"
        elem.setAttribute("onclick", "removeItemOfCart(this)")

        let sus = JSON.stringify(inCart)
        localStorage.setItem("produtosNoCarrinho", sus)
    } else {
        alert("Faça login primeiro para poder adicionar itens no carrinho")
    }
}

function removeItemOfCart(elem) {
    let nome = elem.querySelector("h4").innerHTML

    for (let i = 0; i < inCart.length; i++) {
        if (nome == inCart[i].productName) {
            inCart.splice(i, 1)
            break;
        }
    }

    elem.classList.remove("no-carrinho")
    elem.setAttribute("onclick", "addItemToCart(this)")

    let sus = JSON.stringify(inCart)
    localStorage.setItem("produtosNoCarrinho", sus)
}


function mudarPagina(valor) {
    if (parseInt(document.getElementById("pagina").innerHTML) + valor >= 1 && parseInt(document.getElementById("pagina").innerHTML) + valor <= 2) {
        document.getElementById("pagina").innerHTML = parseInt(document.getElementById("pagina").innerHTML) + valor
        setProducts("moldura")
    }
}
//#endregion



/*
getProducts()
setProducts()
addItemToCart
*/


setProducts("moldura")

