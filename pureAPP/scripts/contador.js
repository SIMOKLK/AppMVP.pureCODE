function getPlato(arrayaRecorrer, idPlato) {
    let plato = arrayaRecorrer.find(function(item) {
        return item.id == idPlato;
    });
    return plato;
}

function suma(objeto) {
    let idPlato = objeto.parentElement.dataset.numero;
    let objetoPlato = getPlato(listaPlatos, idPlato);
    objetoPlato.cantidad++;
    addToCart(objetoPlato);

    objeto.parentElement.querySelector("p").innerHTML = objetoPlato.cantidad;

    let elemento = document.querySelector(`[data-numero ="${idPlato}"]`);
    elemento.querySelector("p").innerHTML = objetoPlato.cantidad;

    imprimirPrecio()
}

function resta(objeto) {
    let idPlato = objeto.parentElement.dataset.numero;
    let objetoPlato = getPlato(listaPlatos, idPlato);
    if (objetoPlato.cantidad > 0) {
        objetoPlato.cantidad--
        borrarItem(objetoPlato)

        objeto.parentElement.querySelector("p").innerHTML = objetoPlato.cantidad;
        
        let elemento = document.querySelector(`[data-numero ="${idPlato}"]`);
        elemento.querySelector("p").innerHTML = objetoPlato.cantidad;
        if (objetoPlato.cantidad === 0){
            imprimirCarrito();
        }
        imprimirPrecio()
    }
}

function addToCart(itemPlato) {
    let idPlato = itemPlato.id;
    let platoEnCarrito = getPlato(carritoDeCompra, idPlato);

    if (platoEnCarrito === undefined) {
        carritoDeCompra.push(itemPlato);
    }
    return;
}

function borrarItem(itemPlato) {
    let idPlato = itemPlato.id;
    let platoEnCarrito = getPlato(carritoDeCompra, idPlato);

    let indice = carritoDeCompra.indexOf(itemPlato);
    
    if (platoEnCarrito.cantidad == 0) {
        carritoDeCompra.splice(indice, 1);
    }
}

function eliminarItem(objeto) {
    let idPlato = objeto.dataset.numero
    let platoEnCarrito = getPlato(carritoDeCompra, idPlato);
    let indice = carritoDeCompra.indexOf(platoEnCarrito);
    carritoDeCompra.splice(indice, 1);
    imprimirCarrito();

    let plato = getPlato(listaPlatos, idPlato);
    plato.cantidad = 0;

    let elemento = document.querySelector(`[data-numero ="${idPlato}"]`);
    elemento.querySelector("p").innerHTML = plato.cantidad;

    imprimirPrecio()
}
