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
    producto=prompt("Ingrese nuevamente un producto entre los siguientes: Beacon - Cheese - Smosh");
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
//PARTE 2
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
const ingredientes=["pan","carne","lechuga","tomate","pepino","cheddar","dambo","sesamo"]



function especial(){
    alert("Vamos a crear tu propia Hamburguesa")
    let carnes=prompt("¿Cuantas Carnes queres en tu burger?Max 5")
    while((carnes>5)||(carnes<1)){
        alert("Carnes Mal Seleccionada!")
        carnes=prompt("¿Cuantas Carnes queres en tu burger?Max 5")
    }
    console.log("eligimo carne")    
}

function busqueda(arr,filtro){
    const este=arr.find((servicio)=>{
        return servicio.nombre.includes(filtro);
    })
    return este
}

function sup(){
    contra=prompt("ingrese contraseña")
    while(contra!=contraseña){
        alert("Contraseña Incorrecta");
        contra=prompt("ingrese contraseña");
    }
    const opciones=["1)Agregar Producto","2)Eliminar producto","3)Filtrar Producto"]
    switch(parseInt(prompt("Sup,que desea hacer? " + opciones ))){
        case 1:{
            console.log("Agregar Producto")
            const burgerNew= new productos(prompt("Ingrese Hamburguesa"),parseInt(prompt("Precio")),prompt("Ingrese salsa"),parseInt(prompt("Ingrese Carnes")));
            carta.push(burgerNew)
            console.log(burgerNew);
            break;
        }
        case 2:{
            console.log("¿Cual producto desea quitar?"+ carta)
            carta.splice(parseInt(prompt("Menu N°")),1)
            break;
        }
        case 3:{
            let usuario=prompt("ingrese criterio de busqueda")
            const buscar=busqueda(carta,usuario)
            console.log(buscar)
            break;
        }
        default:{
            console.log("Opcion Incorrecta")
            break;
        }
    }
    inicio();    
}
function inicio(){
    const opciones=["1) Ver Menu","2) Hacer Pedido","3) Pedido Especial","4) Modo Sup","5)Bye bye"]
    switch(parseInt(prompt("Bienvenidos,que desea hacer? " + opciones ))){
        case 1:
            {console.log("Ver MENU")
                verMenu();
                break;};
        case 2:{console.log("Hacer Pedido")
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
        case 5:{alert("Gracias , adios.")
                break;}
        default:{
            alert("Opcion incorrecta, Elegir nuevamente")
            inicio();
        }
    };
}

//PARTE 3


function verMenu(){
    for(const menu of carta){
        console.log("#"+menu.nombre+" Precio: "+ menu.precio)}
}


let boton=document.getElementById('btnPrincipal');
boton.addEventListener('click',()=>{
verMenu();
})