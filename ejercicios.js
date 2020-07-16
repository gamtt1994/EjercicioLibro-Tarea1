//Ejercicio 2.1
var base = 3
var altura = 4
var areadeltriangulo = (base * altura) / 2
console.log(`Ejercicio1: El área del triangulo es: ${areadeltriangulo}`)
//Ejercicio 2.2
var dineromexicano = 100
var conversiondinero = dineromexicano * 3.51
console.log(`Ejercicio2: Usted tiene ${conversiondinero} dolares`)
//Ejercicio 2.3
var FecNacimiento = 1994
var FecActual = 2020
var CalculoEdad = FecActual - FecNacimiento
console.log(`Ejercicio3: La edad del personal es: ${CalculoEdad}`)
//Ejercicio 2.4
var horas = 15
//Ejercicio 2.5
var ContenidoAPintar = 20
var m2 = 5
var CobroPorMetro = ContenidoAPintar * m2
console.log(`Ejercicio5: El presupuesto del pintado es: ${CobroPorMetro}`)

//Ejercicio 2.6
var CatetoA = 4
var CatetoB = 3
var HipotenusaTriangulo = (Math.pow(CatetoA, 2)) + (Math.pow(CatetoB, 2))
var RaizHipotenusa = Math.sqrt(HipotenusaTriangulo)
console.log(`Ejercicio6: La hipotenusa del triangulo es: ${RaizHipotenusa}`)
//Ejercicio 2.7
var KilometroViaje = 100
var CostoXKilometro = 10
var BoletoBuses = KilometroViaje * CostoXKilometro
console.log(`Ejercicio7: El costo del Boleto es: ${BoletoBuses}`)
//Ejercicio 2.8
var velocidadBicicleta = 1
var PuntoInicio = 0
var PuntoLlegada = 30
var TiempoLlegada = PuntoLlegada / velocidadBicicleta
if (TiempoLlegada >= 60) {
  var Calculo1 = Math.trunc(TiempoLlegada / 60)
  var Resto = PuntoLlegada % 60
  console.log(`Ejercicio8: El Tiempo de viaje es: ${Calculo1} Hora y ${Resto} Min`)
}
else {
  console.log(`Ejercicio8: El Tiempo de viaje es: ${TiempoLlegada} Min`)
}

//Ejercicio 2.9
var MinXLLamada = 0.20
var TiempoLLamada = 60
var SubLLamada = MinXLLamada * TiempoLLamada
console.log(`Ejercicio9: El costo es: ${SubLLamada} Soles x Min`)
//Ejercicio 2.10
var metroscubicos = 1000
var cantidaddeagua = 200
var Totalpago = metroscubicos * cantidaddeagua
console.log(`Ejercicio10: El costo es: ${Totalpago} Soles x m3`)
//Ejercicio 2.11
var consumoelectrico = 100
var Pkw = 300
var PagoConsumidor = consumoelectrico * Pkw
console.log(`Ejercicio11: El costo es: ${PagoConsumidor} Min`)
//Ejercicio 2.12
var preciopro = 1000
var descuentoproc = preciopro * 0.20
var ivaproc = preciopro * 0.15
var costoproc = preciopro - descuentoproc + ivaproc
console.log(`Ejercicio12: El costo es: ${costoproc}`)
//Ejercicio 2.13
var sueldobasico = 1500
var ahorro = sueldobasico * 0.15 * (4 * 12)
console.log(`Ejercicio13: El Ahorro es : ${ahorro}`)
//Ejercicio 2.14
var costohotel = 200
var costocomida = 30
var otrosgatos = 100

var numerodedias = 15

var MontoDelCheque = numerodedias * (otrosgatos + costocomida + costohotel)
console.log(`Ejercicio14: Monto del Cheque: ${MontoDelCheque}`)
//Ejercicio 2.15
var amperos = 15
var resistenciavoltaje = (4 * 3.14)
var Voltaje = resistenciavoltaje * 15
var PotenciaElectrica = Voltaje * amperos
console.log(`Ejercicio15: Potencia Electrica en watss: ${PotenciaElectrica}`)
console.log(`Ejercicio15: Resistenci en omhs: ${resistenciavoltaje}`)
console.log(`Ejercicio15: Voltaje: ${Voltaje}`)

//Ejercicio 2.16
console.log(`Ejercicio16: Ingresdientes a necesitar: harina,royal,leche,huevos,chocolate`)
var harinatorta = 1
var royaltorta = 1
var lechetorta = 1
var huevostorta = 6
var chocolatetorta = 1

if (harinatorta == 1 && royaltorta == 1 && lechetorta == 1 && huevostorta == 6 && chocolatetorta == 1) {
  console.log(`Ejercicio16: Torta preparada`)
}
else {
  console.log(`Ejercicio16: Falta Ingredientes`)
}


//Ejercicio 2.17
console.log(`Ejercicio17: Ingresdientes a necesitar: Talla,Largo,Ancho,Cintura,Cuello`)
var talla = L
var largo = 15
var ancho = 36
var cintura = 45
var cuello = 20

if (talla == L && largo == 15 && ancho == 36 && cintura == 45 && cuello == 20) {
  console.log(`Ejercicio17: Prenda realizada`)
}
else {
  console.log(`Ejercicio17: Prenda mal confeccionada`)
}



//Ejercicio 2.18
console.log(`Ejercicio16: Ingresdientes a necesitar: harina,royal,leche,huevos,chocolate`)
var harinatorta = 1
var royaltorta = 1
var lechetorta = 1
var huevostorta = 6
var chocolatetorta = 1

if (harinatorta == 1 && royaltorta == 1 && lechetorta == 1 && huevostorta == 6 && chocolatetorta == 1) {
  console.log(`Ejercicio18: Torta preparada`)
}
else {
  console.log(`Ejercicio18: Falta Ingredientes`)
}
//Ejercicio 2.19
var Alturacuadrado = 5
var basecuadrado = 5
var aredelcuadrado = Alturacuadrado * basecuadrado
console.log(`Ejercicio19: area del cuadrado es: ${aredelcuadrado}`)
//Ejercicio 2.20
var nota1 = 15
var nota2 = 20
var nota3 = 10
var notafinal = (nota1 * 0.25) + (nota2 * 0.25) + (nota3 * 0.50)
console.log(`Ejercicio20: La nota final es: ${notafinal}`)
//Ejercicio 2.21
var ingreseedad = 12
var mesesedad = ingreseedad * 12
var semanasedad = ingreseedad * 52.14
var diasedad = ingreseedad * 365.25
var horasedad = ingreseedad * 8765.81277
console.log(`Ejercicio21: Meses: ${mesesedad}`)
console.log(`Ejercicio21: Semanas: ${semanasedad}`)
console.log(`Ejercicio21: Dias: ${diasedad}`)
console.log(`Ejercicio21: Horas: ${horasedad}`)

//Ejercicio 2.22
var MinXLLamada = 0.20
var TiempoLLamada = 60
var SubLLamada = MinXLLamada * TiempoLLamada
console.log(`Ejercicio9: El costo es: ${SubLLamada} Soles x Min`)
//Ejercicio 2.23
var ingresaclasecuarto = 150
var clasea = 150
var claseb = 100
var clasec = 50

if (ingresaclasecuarto = 150) {
  console.log(`Ejercicio9: Usted eligio ${clasea} El costo es: ${ingresaclasecuarto} Soles`)
}
else if (ingresaclasecuarto = 100) {
  console.log(`Ejercicio9: Usted eligio ${claseb} El costo es: ${ingresaclasecuarto} Soles`)
}
else {
  console.log(`Ejercicio9: Usted eligio ${clasec} El costo es: ${ingresaclasecuarto} Soles`)
}