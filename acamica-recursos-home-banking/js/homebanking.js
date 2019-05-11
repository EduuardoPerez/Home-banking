//Declaración de variables
var nombreUsuario = 'Eduardo Perez'
var saldoCuenta = 3800
var limiteExtraccion = 15000
var costoAgua = 350
var costoTelefono = 425
var costoLuz = 210
var costoInternet = 570


//Ejecución de las funciones que actualizan los valores de las variables en el HTML.
window.onload = function() {
    cargarNombreEnPantalla();
    actualizarSaldoEnPantalla();
    actualizarLimiteEnPantalla();
}


//Funciones que realizan operaciones necesarias
function sumarSaldo(dinero){
	saldoCuenta += dinero
}

function restarSaldo(dinero){
	saldoCuenta -= dinero
}

function haySaldoDisponible(){
	if (saldoCuenta>0)
		return true
}

//Funciones que tenes que completar
function cambiarLimiteDeExtraccion() {
	var nuevolimiteExtraccion = parseInt(prompt('Ingresar el nuevo limite de extracción'))
	limiteExtraccion = nuevolimiteExtraccion
	actualizarLimiteEnPantalla()
	alert('Su nuevo limite de extracción es: '+limiteExtraccion)
}

function extraerDinero() {
	if(haySaldoDisponible()){
		var dineroAExtraer = parseInt(prompt('Ingresar el monto a retirar'))
		if(dineroAExtraer<=saldoCuenta){
			if (dineroAExtraer<=limiteExtraccion){
				var resto = dineroAExtraer%100
				if(resto==0){
					var saldoAnterior = saldoCuenta
					restarSaldo(dineroAExtraer)
					actualizarSaldoEnPantalla()
					alert('Ha retirado: '+dineroAExtraer+'\n'+
								'Saldo anterior: '+saldoAnterior+'\n'+
								'Saldo actual: '+saldoCuenta)
				} else {
					alert('Solo puedes extraer billetes de 100')
				}
			} else {
				alert('La cantidad de dinero que deseas extraer es mayor a tu límite de extraccion')
			}
		} else {
			alert('No hay saldo disponible en tu cuenta para extraer esa cantidad de dinero')
		}
	} else {
		alert('No hay saldo disponible para realizar extracciones')
	}
}

function depositarDinero() {
	var dineroADepositar = parseInt(prompt('Ingresar el monto a depositar'))
	var saldoAnterior = saldoCuenta
	sumarSaldo(dineroADepositar)
	actualizarSaldoEnPantalla()
	alert('Ha depositado: '+dineroADepositar+'\n'+
				'Saldo anterior: '+saldoAnterior+'\n'+
				'Saldo actual: '+saldoCuenta)
}

function pagarServicio() {
	var servicioAPagar = parseInt(prompt('Ingresa el número que corresponda con el servicio que quieres pagar:'+'\n'+
																			 '1 - Agua'+'\n'+
																			 '2 - Luz'+'\n'+
																			 '3 - Internet'+'\n'+
																			 '4 - Teléfono'+'\n'))

	var saldoAnterior = saldoCuenta

	switch(servicioAPagar){
		case 1:
			if(saldoCuenta>=costoAgua){
				saldoCuenta-=costoAgua
				alert('Ha pagado el servicio de agua'+'\n'+
							'Saldo anterior: '+saldoAnterior+'\n'+
							'Dinero descontadoo: '+costoAgua+'\n'+
							'Saldo actual: '+saldoCuenta)
			} else {
				alert('No hay saldo suficiente para pagar el servicio')
			}
			break

		case 2:
			if(saldoCuenta>=costoLuz){
				saldoCuenta-=costoLuz
				alert('Ha pagado el servicio de luz'+'\n'+
						'Saldo anterior: '+saldoAnterior+'\n'+
						'Dinero descontadoo: '+costoLuz+'\n'+
						'Saldo actual: '+saldoCuenta)
			} else {
				alert('No hay saldo suficiente para pagar el servicio')
			}
			break

		case 3:
			if(saldoCuenta>=costoInternet){
				saldoCuenta-=costoInternet
				alert('Ha pagado el servicio de internet'+'\n'+
						'Saldo anterior: '+saldoAnterior+'\n'+
						'Dinero descontadoo: '+costoInternet+'\n'+
						'Saldo actual: '+saldoCuenta)
			} else {
				alert('No hay saldo suficiente para pagar el servicio')
			}
			break

		case 4:
			if(saldoCuenta>=costoTelefono){
				saldoCuenta-=costoTelefono
				alert('Ha pagado el servicio de teléfono'+'\n'+
						'Saldo anterior: '+saldoAnterior+'\n'+
						'Dinero descontadoo: '+costoTelefono+'\n'+
						'Saldo actual: '+saldoCuenta)
			} else {
				alert('No hay saldo suficiente para pagar el servicio')
			}
			break

		default:
			alert('No existe el servicio que ha seleccionado')
	}

	actualizarSaldoEnPantalla()
}

function transferirDinero() {

}

function iniciarSesion() {

}

//Funciones que actualizan el valor de las variables en el HTML
function cargarNombreEnPantalla() {
    document.getElementById("nombre").innerHTML = "Bienvenido/a " + nombreUsuario;
}

function actualizarSaldoEnPantalla() {
    document.getElementById("saldo-cuenta").innerHTML = "$" + saldoCuenta;
}

function actualizarLimiteEnPantalla() {
    document.getElementById("limite-extraccion").innerHTML = "Tu límite de extracción es: $" + limiteExtraccion;
}