let producto;
let coutas;
let cantidad;
let monto= 0;
let interes;
const IVA=1.21;
let i=1;
let bandera1
let precioFinal=0;

function compra(){
producto=prompt("Ingrese un combo : Beacon - Cheese - Smosh ");
elegir();
while(bandera1){
    alert("No contamos con el producto seleccionado" )
    producto=prompt("Ingrese nuevamente un producto entre los siguientes:  Beacon Deluxe - CheeseBurger - Smosh");
    elegir()
}
cantidad=prompt("¿Cuantas unidades quieres?")
cuotas=parseInt(prompt("Ingrese cuotas disponibles: 1-3-6-12"))
    switch(cuotas){
    case 1:
        interes=1
        break;
    case 3:
        interes=1.15
        break;
    case 6:
        interes=1.3
        break;
    case 12:
        interes=1.45
        break;
    default:
        alert("cantidad de cuotas incorrectas")
    }
}
function elegir(){
    if((producto=="Beacon")||(producto=="Cheese")||(producto=="Smosh")){
        bandera1=false}
    else{
        bandera1=true;
    }
}
function eleccion(){
    if(producto=="Beacon"){
        monto=1000 * IVA*interes*cantidad;
        return monto;
    }
    else if(producto=="Cheese"){
        monto=1250 * IVA*interes*cantidad;
        return monto;
    }
    else if(producto=="Smosh"){
        monto=1500 * IVA*interes*cantidad;
        return monto;
    }
}
function finalizar(){
    let parcial= eleccion()
    precioFinal= precioFinal + parcial
    alert("El monto Actual es: " + parcial)
    let finaliza=prompt("¿Desea seguir comprando? SI/NO")
    while(finaliza=="SI"){
        alert("¿Que quiere sumar?")
    compra();
    parcial= eleccion()
    precioFinal= precioFinal + parcial
    alert("El monto Actual es " + precioFinal)
    finaliza=prompt("¿Desea seguir comprando? SI/NO")
    i=i+1
}
    alert("Pedido finalizado,el total de pedidos es " + i)
    alert("El monto total es de " + precioFinal)
}
compra();
eleccion();
finalizar();

