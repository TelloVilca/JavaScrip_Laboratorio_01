
//* DECLARACION DE VARIABLE 
let producto = parseInt(prompt("Escriba el producto que desea comprar: "));
let precioProducto;


switch (producto) {
    case 1:
        precioProducto = 70.99;
        break;
    case 2:
        precioProducto = 78.99;
        break;
    case 3:
        precioProducto = 100.99;
        break;
    case 4:
        precioProducto = 58.50;
        break;
    case 5:
        precioProducto = 35;
        break;

    default:
        precioProducto = 0
        alert("Genero un codigo valido")
        break;
}

let cantidad;
let descuento;

if (producto > 0){

    cantidad = parseInt(prompt("Indique la cantidad: "));

    if (cantidad < 10){
        descuento = 0.035;
    } else if(cantidad >= 10 && cantidad <=20){
        descuento = 0.07;
    } else if (cantidad > 20){
        descuento = 0.095;
    }

    //* DECLARACION DE VARIABLES
    let descuentoTotal = (precioProducto*cantidad)*descuento;
    let txt = document.querySelector("#parrafo");

    //* 
    document.write("<p>Producto Seleccionado: " + producto + "</p>");
    document.write("<p>Precio del Producto: " + precioProducto + "</p>");
    document.write("<p>Cantidad: " +cantidad+ "</p>");
    document.write("<p>Descuento por la cantidad seleccionada: " +descuento+ "</p>");
    document.write("<p>Valor de descuento producto: " +descuentoTotal+ "</p>");
    document.write("<p>Precio Total: S/1" +((precioProducto*cantidad) - descuentoTotal)+ "</p>");

}
