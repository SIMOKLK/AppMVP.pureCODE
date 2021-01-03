/* Al hacer click en el botón (.cardSlider) que realice la funcion filtrar, que consiste en:
buscar por el objeto 1 (listaPlatos) el elemento con nombre (nombreCategoria) que coincida con el nombre de la categoria clickeada
luego imprimir el objeto en forma de html
*/

function filtrar(objeto){
    let idPlato = document.querySelector(".elementosMenu1 .contador").dataset.numero
    let objetoPlato = getPlato(listaPlatos, idPlato);

    for(let i = 0; i < listaPlatos.length; i++){;
        if (objetoPlato.nombreCategoria === objeto.id){
            objetoPlato.splice(idPlato,1)
        }
        listaPlatos.splice(1,1)
    }
    platosImprimir()
}


