const numeroPropietario = 34675497944;
let pedidoFinal = "Pedido: ";
let totalFactura = 0;

function imprimirPrecio() {
    let subtotal = 0;
    for (let i = 0; i < carritoDeCompra.length; i++) {
        let precioItem = carritoDeCompra[i].precioPlato * carritoDeCompra[i].cantidad;
        subtotal += precioItem;
    }

    let tasas = 0.10;
    let totalTasas = subtotal * tasas;
    totalFactura = subtotal + totalTasas;
    document.getElementById("subtotal").innerHTML = subtotal + "&#8364";
    document.getElementById("tasas").innerHTML = totalTasas.toPrecision(2) + "&#8364";
    document.getElementById("delivery").innerHTML = "FREE";
    document.getElementById("total").innerHTML = totalFactura + "&#8364";

}

function botonEnviarPedido() {
    messaggeBuilder();
    window.location.href = "https://api.whatsapp.com/send/?phone=" + numeroPropietario + "&text=" + pedidoFinal + "&app_absent=0";
}

function messaggeBuilder() {
    for (let i = 0; i < carritoDeCompra.length; i++) {
        let textopedido = carritoDeCompra[i].nombrePlato + " x (" + carritoDeCompra[i].cantidad + ") --"
        pedidoFinal += textopedido;
    }
    pedidoFinal += "Total de factura: " + totalFactura + "€";
}