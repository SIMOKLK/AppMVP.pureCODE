let elementos = "";

function platosImprimir() {
    for (let i = 0; i < listaPlatos.length; i++) {
        elementos += `
        <div class="elemento">
            <img src="${listaPlatos[i].imgPLato}" alt=" ">
            <div class="texto ">
                <p>${listaPlatos[i].precioPlato}&#8364</p>
                <h5>${listaPlatos[i].nombrePlato}</h5>
                <h6>${listaPlatos[i].descripcionPlato}</h6>
            </div>
            <div class="contador" data-numero="${listaPlatos[i].id}">
                <button onClick="resta(this)" class="resta">-</button>
                <p class="quantity">${listaPlatos[i].cantidad}</p>
                <button onClick="suma(this)" class="suma">+</button>
            </div>
        </div>`
    }
}

platosImprimir();
document.querySelector(".elementosMenu1").innerHTML = elementos;