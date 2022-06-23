const dataBaseProducts = [
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
        productName: "Suporte Bloco De Madeira Para Facas De Cozinha Böker",
        productPrice: "R$ 336,90",
        productImage: "assets/images/produtos/suporte_bloco_de_madeira_para_facas_de_cozinha_boker.png"
    },
]

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
    let amount = elements.length

    if (amount > dataBaseProducts.length) {
        amount = dataBaseProducts.length
    }

    let productsObjects = getProducts(elements.length)

    for (let i = 0; i < amount; i++) {
        let elem = elements[i]

        let h4 = elem.querySelector("h4")
        if (h4 != undefined) {
            h4.innerHTML = productsObjects[i].productName
        }

        let p = elem.querySelector("p")
        if (p != undefined) {
            p.innerHTML = productsObjects[i].productPrice
        }

        let img = elem.querySelector("img")
        if (img != undefined) {
            img.src = productsObjects[i].productImage
        }
    }
}
//#endregion


/*
getProducts()
setProducts()
*/

//Chamar as funções aqui
setProducts("moldura")