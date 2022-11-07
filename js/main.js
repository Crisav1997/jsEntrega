let producto;
let coutas;
let cantidad;
let monto= 0;
let interes;
const IVA=1.21;
let i=1;
let bandera1
let precioFinal=0;
let contraseña="hola";
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
//compra();
//eleccion();
//finalizar();

//entrega2



class productos{
    constructor(nombre,precio,salsa,carnes){
        this.nombre=nombre;
        this.precio=precio;
        this.salsa=salsa;
        this.carnes=carnes;
    }
    descApp(){
        this.precio=this.precio*0,9;
    }
}
const burger1= new productos("Chesse Burger",1250,"bbq",2);
const burger2= new productos("Beacon Deluxe",1400,"mcdonals",3);
const burger3= new productos("Smosh Blend",1500,"island",2);
const carta=[];
carta.push(burger1);
carta.push(burger2);
carta.push(burger3);



function verMenu(){
    
    for(const menu of carta){
        alert("#"+menu.nombre+" Precio: "+ menu.precio)}
    inicio()  }

function especial(){
    alert("agregar algo")
}
function sup(){
        contra=prompt("ingrese contraseña")
    while(contra!=contraseña){
        alert("Contraseña Incorrecta");
        contra=prompt("ingrese contraseña");
    }
    // const carta1=carta.map((el)=>el.precio){
    //     precio=el.precio*1.5
    // }
    const burger4= new productos(prompt("Ingrese Hamburguesa"),parseInt(prompt("Precio")),prompt("Ingrese salsa"),parseInt(prompt("Ingrese Carnes")));
    console.log(burger4);    
}

const ingredientes=["pan","carne","lechuga","tomate","pepino","cheddar","dambo","sesamo"]
const opciones=["1) Ver Menu","2) Hacer Pedido","3) Pedido Especial","4) Modo Sup"]
function inicio(){
    let ingreso1;
    switch(ingreso1 = parseInt(prompt("Bienvenidos,que desea hacer? " + opciones ))){
        case 1:
            {console.log("ver menu")
                verMenu();
                break;};
        case 2:{console.log("hacer pedido")
                compra();
                eleccion();
                finalizar();
                break;}
        case 3:{console.log("Pedido Especial")
                especial();
                break;}
        case 4:{console.log("Modo Sup")
                sup();
                break;}
        default:{
            alert("opcion incorrecta, elegir nuevamente")
            inicio();
        }
    }inicio();
}
inicio();
