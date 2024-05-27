const comprarProductos = () => {
    let producto = '';
    let cantidad = 0;
    let precio = 0;
    let totalCompra = 0;
    let seguirComprando = false;
  
    do {
        producto = prompt ("¿Querés comprar sillones, puff, banquetas, sillas o diván?");
        cantidad = parseInt(prompt ("¿Cuántos querés comprar?"));
  
        let cantidadValidada = validarCantidad(cantidad);
  
    switch (producto) {
        case "sillón":
            precio = 500000;
        case "puff":
            precio = 70000;
            break;
        case "banquetas":
            precio = 30000;
            break;
        case "sillas":
            precio = 45000;
            break;
        case "diván":
            precio = 300000;
            break;
        default:
            alert("Alguno de los datos ingresados no es correcto");
            precio= 0;
            cantidad= 0;
    }
  
    totalCompra += precio * cantidadValidada;
    seguirComprando = confirm("¿Querés agregar otro producto?");
  
    } while (seguirComprando)
  
    return totalCompra;
  }
  
const validarCantidad = (cantidad) => {
    while (Number.isNaN(cantidad) || cantidad === 0) {
        if (cantidad !== 0) {
            alert('Deber agregar un número.')
        } else {
            alert('Debe agregar un número distinto de cero.')
        }
        cantidad = parseInt(prompt ("¿Cuántos querés comprar?"));
    }
  
    return cantidad;
  };
  
const aplicarDescuento = (totalCompra) => {
    if (totalCompra >= 70000) {
        return totalCompra * 0.80;
    } else {
        return totalCompra;
    }
  }
  
const calcularEnvio = (totalCompra) => {
    let tieneEnvioADomicilio = confirm("¿Querés envío a domicilio?");
  
    if (tieneEnvioADomicilio && totalCompra >= 70000) {
      alert("Tenés envio gratis. El total de tu compra es $" + totalCompra);
    } else if (tieneEnvioADomicilio && totalCompra < 70000 && totalCompra !== 0) {
      totalCompra += 15000;
      alert("El envío cuesta $15000. El total de tu compra es $" + totalCompra);
    } else {
      alert("El total de tu compra es $" + totalCompra);
    }
  
    return totalCompra;
  }
  
  calcularEnvio(aplicarDescuento(comprarProductos()));