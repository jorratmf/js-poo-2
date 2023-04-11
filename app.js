// Objeto "Alex"
const cuenta = {
    titular: "Alex",
    saldo: 0,
    ingresar: function(cantidad) {
      if (cantidad <= 0 || isNaN(cantidad)) {
        return "La cantidad a ingresar debe ser mayor que cero";
      }
      this.saldo += cantidad;
      this.mostrarMovimiento("Ingresó", cantidad);
      return `Se ha ingresado ${cantidad} euros en la cuenta`;
    },
    extraer: function(cantidad) {
      if (cantidad > this.saldo) {
        return "No hay suficiente saldo en la cuenta";
      }
      else if (cantidad === 0 || isNaN(cantidad)) {
        return "La cantidad a extraer debe ser mayor que cero";
      }
      this.saldo -= cantidad;
      this.mostrarMovimiento("Retiró", cantidad);
      return `Se han retirado ${cantidad} euros de la cuenta`;
    },
    informar: function() {
      return `Titular de la cuenta: ${this.titular}<br>Saldo actual: ${this.saldo} euros`;
    },
    mostrarMovimiento: function(tipo, cantidad) {
      const movimiento = document.createElement("p");
      movimiento.innerHTML = `${tipo}: ${cantidad} euros`;
      document.getElementById("cuenta-movimientos").appendChild(movimiento);
    }
  };
  
  // Mostrar la descripción inicial de la cuenta
  document.getElementById("cuenta-info").innerHTML = cuenta.informar();
  
  // Función para ingresar dinero a la cuenta
  function ingresarDinero() {
    const cantidad = parseInt(prompt("Ingrese la cantidad de dinero a ingresar:"));
    const resultado = cuenta.ingresar(cantidad);
    document.getElementById("cuenta-info").innerHTML = cuenta.informar();
    alert(resultado);
  }
  
  // Función para extraer dinero de la cuenta
  function extraerDinero() {
    const cantidad = parseInt(prompt("Ingrese la cantidad de dinero a extraer:"));
    const resultado = cuenta.extraer(cantidad);
    document.getElementById("cuenta-info").innerHTML = cuenta.informar();
    alert(resultado);
  }  