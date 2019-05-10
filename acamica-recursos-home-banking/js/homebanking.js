//Declaración de variables
var nombreUsuario = 'Eduardo Perez'
var saldoCuenta = 3800
var limiteExtraccion = 15000


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


//Funciones que tenes que completar
function cambiarLimiteDeExtraccion() {
	var nuevolimiteExtraccion = parseInt(prompt('Ingresar el nuevo limite de extracción'))
	limiteExtraccion = nuevolimiteExtraccion
	actualizarLimiteEnPantalla()
	alert('Su nuevo limite de extracción es: '+limiteExtraccion)
}

function extraerDinero() {
	var dineroAExtraer = parseInt(prompt('Ingresar el monto a retirar'))
	if(dineroAExtraer<=saldoCuenta){
		if (dineroAExtraer<=limiteExtraccion){
			if(true){ // Como el Home Banking maneja solo billetes de 100, verificar
						// que el monto que se quiere extraer pueda ser entregado
						// solo con esos billetes.
				var saldoAnterior = saldoCuenta
				restarSaldo(dineroAExtraer)
				actualizarSaldoEnPantalla()
				alert('Ha retirado: '+dineroAExtraer+'\n'+
							'Saldo anterior: '+saldoAnterior+'\n'+
							'Saldo actual: '+saldoCuenta)
			}
		} else {
			alert('No puede extraer un monto mayor al limite de extraccion')
		}
	} else {
		alert('No puede extraer más del saldo disponible')
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