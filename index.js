
alert("Bienvenido a AngryKeys Teclados Mecánicos \nElija las opciones que desee y para finalizar ingrese 0")
let seleccionarProductos = parseInt(prompt( "¿Qué desea comprar?: \n 1- Melgeek Mojo 84 $30000  \n 2- Tofu60 Sushi $25000  \n 3- Nuphy Air 75% $40000  \n 4- ZSA Moonlander $50000 "))
let seleccionarCantidad;
let total = 0;


const cantidad = (cant, precio) => {
  return cant * precio
}


while (seleccionarProductos != 0) {
  switch (seleccionarProductos) {
    case 1:
      seleccionarCantidad= parseInt(prompt("El producto seleccionado es Melgeek Mojo 84, indique la cantidad"))
      total += cantidad(seleccionarCantidad, 30000)
    break;
    case 2:
      seleccionarCantidad = parseInt(prompt("El producto seleccionado es Tofu60 Sushi, indique la cantidad"))
      total += cantidad(seleccionarCantidad, 25000)
    break;
    case 3:
      seleccionarCantidad = parseInt(prompt("El producto seleccionado es Nuphy Air 75%, indique la cantidad"))
      total += cantidad(seleccionarCantidad, 40000)
    break;
    case 4:
      seleccionarCantidad = parseInt(prompt("El producto seleccionado es ZSA Moonlander, indique la cantidad"))
      total += cantidad(seleccionarCantidad, 50000)
    break;

    default:
      alert("Usted no seleccionó una opción válida");
      break;
  }
  seleccionarProductos = parseInt(prompt( "¿Qué desea comprar?: \n 1-Melgeek Mojo 84 $30000  \n 2-Tofu60 Sushi $25000  \n 3-Nuphy Air 75% $40000  \n 4-ZSA Moonlander $50000 "))
}


const envio = () => {
  if (total >= 50000) {
    alert("El envio es gratuito")
  }else if (total >0){
    total += 4000
    alert("El costo de envio es de $4000, el total es: " + total)
  }
}
envio()

alert("El total de la compra es de: $" + total)


const metodoDePago = () => {
  let metodo = prompt("Ingrese el metodo de pago: tarjeta o efectivo" );
  if (metodo == "tarjeta") {
    total += total * 0.18
    alert("El recargo por pago con tarjeta es del 18%, el total de la compra con tarjeta es: $"+ total);
  }else if ( metodo == "efectivo") {
    total -= 8000
    alert("Tenes un descuento de $8000 por pago en efectivo, el total de tu compra es: $"+ total);
  }  
}

metodoDePago()



