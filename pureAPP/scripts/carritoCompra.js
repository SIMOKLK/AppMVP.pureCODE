function imprimirCarrito() {
    let texto = "";
   
for (let i = 0; i < carritoDeCompra.length; i++) {
    texto += `
    <div class="elemento" data-numero="${[i]}">
        <img src="${carritoDeCompra[i].imgPLato}" alt=" ">
        <div class="texto ">
            <p>${carritoDeCompra[i].precioPlato}&#8364</p>
            <h5>${carritoDeCompra[i].nombrePlato}</h5>
            <h6>${carritoDeCompra[i].descripcionPlato}</h6>
        </div>
        <div class="contador" data-numero="${carritoDeCompra[i].id}">
            <button onClick="resta(this)" class="resta">-</button>
            <p class="quantity">${carritoDeCompra[i].cantidad}</p>
            <button onClick="suma(this)" class="suma">+</button>
        </div>
        <button onClick="eliminarItem(this)" class="botonEliminar" data-numero="${carritoDeCompra[i].id}">x</button>
    </div>`
    }

    document.querySelector(".elementosMenu2").innerHTML = texto;
}
