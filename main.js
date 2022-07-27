const birras = [
   {estilo: "ipa", precio: "500"},
   {estilo: "golden", precio: "330"},
   {estilo: "stout", precio: "420"},
   {estilo: "scotch", precio: "340"},
   {estilo: "honey", precio: "360"}
];

let pedido =[];
let control = prompt ("Queres hacer un pedido? si/no");

   
if (control == "si"){
        let carta = birras.map ((birra)=> birra.estilo + " "+ birra.precio + " pesitos");
        alert(carta.join (" - "));
 }else{
     alert ("Esta bien, gracias.");
 }


while(control!="no"){
    let eleccion = prompt ("Elija su cerveza");
    let valor = 0;

    if(eleccion == "ipa"|| eleccion == "golden"|| eleccion == "stout"||eleccion == "scotch"|| eleccion == "honey"){
        switch(eleccion){
            case "ipa":
                precio = 500;
                break;
            case "golden":
                precio=330;
                break;
            case "stout":
                precio= 420;
                break;
            case "scotch":
                precio = 340;
                break;
            case "honey":
                precio= 360;
                break;
        }
    
    let cantPintas = parseInt(prompt ("Cuantas pintas van a ser?"));

    pedido.push ({eleccion, cantPintas,precio});
    }else{
        alert ("Pruebe de nuevo.");
    }
    control = prompt ("Quiere hacer otro pedido?");

}

const cuenta = pedido.reduce((acc, el)=> acc+ el.precio* el.cantPintas, 0);

alert("Sue cuenta es del total de " + cuenta + " pesitos");