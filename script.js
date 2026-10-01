function descuento(importe) {
    let descuento;

    if (importe < 50) {
        descuento = 0;
    } else if (importe > 50 && importe <= 99.99) {
        descuento = importe * 0.05;

    } else if (importe > 99.99 && importe <= 199.99) {
        descuento = importe * 0.10;
    } else {
        descuento = importe * 0.15;
    }
}

function examen() {

    // pedir al usuario precio y unidades
    const precio = parseInt(window.prompt("Introduce el precio:"));
    const unidades = parseInt(window.prompt("Introduce las unidades:"));
    // calcular el importe de la compra
    const importe = precio * unidades;

    //aplicar descuento
    let descuento;

    if (importe < 50) {
        descuento = 0;
    } else if (importe > 50 && importe <= 99.99) {
        descuento = importe * 0.05;

    } else if (importe > 99.99 && importe <= 199.99) {
        descuento = importe * 0.10;
    } else {
        descuento = importe * 0.15;
    }

    // precio con descuento
    const ConDescuento = importe - descuento;
    // iva
    const iva = ConDescuento * 0.21;
    // precio total
    const total = ConDescuento + iva;

    //pantalla
    console.log("total: " + importe);
    console.log("Descuento: " + descuento);
    console.log("EL precio con descuento es: " + ConDescuento);
    console.log("IVA: " + iva);
    console.log("Total: " + total);


    let acum = 0;
    let operaciones = 0;

    //bucle
    while (window.confirm("deseas continuar?")) {
        // pedir al usuario precio y unidades
        const precio = parseInt(window.prompt("Introduce el precio:"));
        const unidades = parseInt(window.prompt("Introduce las unidades:"));
        // calcular el importe de la compra
        const importe = precio * unidades;
        let descuento;

        if (importe < 50) {
            descuento =  0;
        } else if (importe > 50 && importe <= 99.99) {
            descuento = importe * 0.05;
        } else if (importe > 99.99 && importe <= 199.99) {
            descuento = importe * 0.10;
        } else {
            descuento = importe * 0.15;
        }

        const ConDescuento = importe - descuento;
        const iva = ConDescuento * 0.21;
        const total = ConDescuento + iva;

        console.log("total: " + importe);
        console.log("Descuento: " + descuento);
        console.log("EL precio con descuento es: " + ConDescuento);
        console.log("IVA: " + iva);
        console.log("Total: " + total);

        acum += total;
        operaciones++;
    }
    console.log("Precio total de la compra: " + acum);
    console.log("numero de operaciones: " + operaciones);
}

examen();