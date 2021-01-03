let listaCategorias = [

    {
        imgCategoria: "./img/slider/tapas.svg",
        nombreCategoria: "Tapas",
    },

    {
        imgCategoria: "./img/slider/breakfast.svg",
        nombreCategoria: "Desayunos",
    },

    {
        imgCategoria: "./img/slider/salad.png",
        nombreCategoria: "Ensaladas",
    },

    {
        imgCategoria: "./img/slider/fastfood.svg",
        nombreCategoria: "Almuerzos",
    },

    {
        imgCategoria: "./img/slider/dinner.svg",
        nombreCategoria: "Cena",
    },

    {
        imgCategoria: "./img/slider/desert.svg",
        nombreCategoria: "Postres",
    },

    {
        imgCategoria: "./img/slider/bebidas.svg",
        nombreCategoria: "Bebidas",
    },

    {
        imgCategoria: "./img/slider/all.svg",
        nombreCategoria: "Todos",
    },
];



let cardSlider = "";

function categoriasImprimir() {
    for (let i = 0; i < listaCategorias.length; i++) {
        cardSlider += `
        <div id="${listaCategorias[i].nombreCategoria}" class="cardSlider" onClick="filtrar(this)">
            <img src="${listaCategorias[i].imgCategoria}" alt=" ">
            <p>${listaCategorias[i].nombreCategoria}</p>
        </div>`
    }
}

categoriasImprimir();
document.querySelector(".slider").innerHTML = cardSlider;


/*
OJO: hay un onClick en cardSlider que se debe cambiar cuando cambie el contenido de la función, si amerita
*/

