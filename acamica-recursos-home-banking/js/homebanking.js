//Declaración de variables
var nombreUsuario = 'Eduardo Perez'
var saldoCuenta = 3800
var limiteExtraccion = 15000
var costoAgua = 350
var costoTelefono = 425
var costoLuz = 210
var costoInternet = 570
var cuentaAmiga1 = 1234567
var cuentaAmiga2 = 7654321
var codigoDeSeguridad = 1111


//Ejecución de la funcion encargada del inicio de sesión y de las funciones que actualizan los valores de las variables en el HTML.
window.onload = function() {
		//iniciarSesion() //Se comenta para realizar pruebas de manera mas rapida
    cargarNombreEnPantalla()
    actualizarSaldoEnPantalla()
    actualizarLimiteEnPantalla()
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

function isNotNaN(number){
	if(isNaN(number))
		alert('Por favor introduzca un valor numérico')
	else
		return true;
}


//Funciones que tenes que completar
function cambiarLimiteDeExtraccion() {
	var nuevolimiteExtraccion = parseInt(prompt('Ingresar el nuevo limite de extracción'))
	if(isNotNaN(nuevolimiteExtraccion)){
		limiteExtraccion = nuevolimiteExtraccion
		actualizarLimiteEnPantalla()
		alert('Su nuevo limite de extracción es: '+limiteExtraccion)
	}
}

function extraerDinero() {
	if(haySaldoDisponible()){
		var dineroAExtraer = parseInt(prompt('Ingresar el monto a retirar'))
		
		if(isNotNaN(dineroAExtraer)){
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
		}
	} else {
		alert('No hay saldo disponible para realizar extracciones')
	}
}

function depositarDinero() {
	var dineroADepositar = parseInt(prompt('Ingresar el monto a depositar'))

	if(isNotNaN(dineroADepositar)){
		var saldoAnterior = saldoCuenta
		sumarSaldo(dineroADepositar)
		actualizarSaldoEnPantalla()
		alert('Ha depositado: '+dineroADepositar+'\n'+
					'Saldo anterior: '+saldoAnterior+'\n'+
					'Saldo actual: '+saldoCuenta)
	}
}

function pagarServicio() {
	var servicioAPagar = parseInt(prompt('Ingresa el número que corresponda con el servicio que quieres pagar:'+'\n'+
																			 '1 - Agua'+'\n'+
																			 '2 - Luz'+'\n'+
																			 '3 - Internet'+'\n'+
																			 '4 - Teléfono'+'\n'))

	if(isNotNaN(servicioAPagar)){
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
	}
	actualizarSaldoEnPantalla()
}

function transferirDinero() {
	var montoATransferir = parseInt(prompt('Favor ingresar el monto que desea transferir'))

	if(isNotNaN(montoATransferir)){
		if(montoATransferir<=saldoCuenta){
			var cuentaATransferir = parseInt(prompt('Favor ingresar el numero de cuenta al que desea transferir el dinero'))

			if(isNotNaN(cuentaATransferir)) {
				if(cuentaATransferir===cuentaAmiga1 || cuentaATransferir===cuentaAmiga2){
					restarSaldo(montoATransferir)
					alert('Se han transferido: $'+montoATransferir+'\n'+
								'Cuenta destino: '+cuentaATransferir)
					actualizarSaldoEnPantalla()
				} else {
					alert('Solo puede transferirse dinero a una cuenta amiga')
				}
			}
		} else {
			alert('No se puede transferir la cantidad de dinero ingresada. Su saldo es menor al que intenta transferir')
		}
	}
}

function iniciarSesion() {
	var codigoIngresado = parseInt(prompt('Por favor ingrese el código de seguridad de su cuenta'))

	if (isNotNaN(codigoIngresado)){
		if(codigoIngresado===codigoDeSeguridad){
			alert('Bienvenido/a '+nombreUsuario+' ya puedes comenzar a realizar operaciones')
		} else {
			saldoCuenta = 0
			alert('Código incorrecto. Tu dinero ha sido retenido por cuestiones de seguridad')
			actualizarSaldoEnPantalla()
		}
	} else {
		saldoCuenta = 0
		actualizarSaldoEnPantalla()
	}
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