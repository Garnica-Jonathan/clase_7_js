/*
const impuestoPais = (producto) => producto * 0.30
const impuestoRetenciones = (producto) => producto * 0.35
const impuestoIva = (producto) => producto * 0.21
const impuestoX = (producto) => producto * 0.10

function calcularImpuestos(producto){
    return producto + impuestoPais(producto) + impuestoRetenciones(producto) + impuestoIva(producto) + impuestoX(producto)

}

let precioFinal = calcularImpuestos(100)

console.log(precioFinal)


class persona {
    constructor(nombre, apellido, edad, sueldo) {
        this.nombre = nombre
        this.apellido = apellido
        this.edad =edad
        this.sueldo = sueldo

    }
}

const persona1 = new persona(prompt("ingrese un nombre"), prompt("ingrese apellido"),
parseInt(prompt("ingrese una edad")), parseFloat(prompt("ingrese un sueldo")))

console.log(persona1)*/

/*
class persona {
    constructor(id, nombre, apellido, edad, sueldo) {
        this.id = id
        this.nombre = nombre
        this.apellido = apellido
        this.edad =edad
        this.sueldo = sueldo

    }
}

const persona1 = new persona(1, "jonathan", "garnica", 24, 60000)
const persona2 = new persona(3, "mabel", "diaz", 46, 70000)
const persona3 = new persona(4, "lauriana", "garnica", 20, 20000)
const persona4 = new persona(5, "gustavo", "garnica", 49, 80000)


const perosonas = [persona1, persona2, persona3, persona4]

perosonas.forEach(persona =>{
    persona.sueldo *= 1.30
    console.log(persona)
})
*/
/*
class persona {
    constructor(id, nombre, apellido, edad, sueldo) {
        this.id = id
        this.nombre = nombre
        this.apellido = apellido
        this.edad =edad
        this.sueldo = sueldo

    }
}

const persona1 = new persona(1, "jonathan", "garnica", 24, 10000)
const persona2 = new persona(3, "mabel", "diaz", 46, 70000)
const persona3 = new persona(4, "lauriana", "garnica", 20, 20000)
const persona4 = new persona(5, "gustavo", "garnica", 49, 80000)


const personas = [persona1, persona2, persona3, persona4]

console.log(personas.find(persona => persona.nombre == "gustavo"))// el metodo find sirve para buscar dentro de una array a alguien especificamente y solo devuelve a primer oque cumpla con la condicion si aparece alguienn con el mismo nombre

console.log(personas.filter(persona => persona.sueldo > 12000))*/ // el metodo filter devuelve todos los objetos que cumplan con la condicion
/*
class persona {
    constructor(id, nombre, apellido, edad, sueldo) {
        this.id = id
        this.nombre = nombre
        this.apellido = apellido
        this.edad =edad
        this.sueldo = sueldo

    }
}

const persona1 = new persona(1, "jonathan", "garnica", 24, 10000)
const persona2 = new persona(3, "mabel", "diaz", 46, 70000)
const persona3 = new persona(4, "lauriana", "garnica", 20, 20000)
const persona4 = new persona(5, "gustavo", "garnica", 49, 80000)


const personas = [persona1, persona2, persona3, persona4]

console.log(personas.some(persona => persona.sueldo > 12000))//una manera de usar some. Me devuelve verdadero o falso si existe o no un objecto dentro del codigo

let consulta = personas.some(persona => persona.sueldo > 200000)//otra manera de usar some

if(consulta){
    console.log(personas.filter(personas => personas.sueldo > 200000))
}else{
    console.log("no encontrado")
}

class persona {
    constructor(id, nombre, apellido, edad, sueldo) {
        this.id = id
        this.nombre = nombre
        this.apellido = apellido
        this.edad =edad
        this.sueldo = sueldo

    }
}

const persona1 = new persona(1, "jonathan", "garnica", 24, 10000)
const persona2 = new persona(3, "mabel", "diaz", 46, 70000)
const persona3 = new persona(4, "lauriana", "garnica", 20, 20000)
const persona4 = new persona(5, "gustavo", "garnica", 49, 80000)


const personas = [persona1, persona2, persona3, persona4]

const sueldos = personas.map(persona => persona.sueldo)//con el map se crea un array modificado sin modificar el original

console.log(sueldos)

console.log(sueldos.reduce((prev, act) => prev + act, 0))// el deduce sirve para mostrar en un array de numeros hacer una operacion para mostrar un unico valor


class persona {
    constructor(id, nombre, apellido, edad, sueldo) {
        this.id = id
        this.nombre = nombre
        this.apellido = apellido
        this.edad =edad
        this.sueldo = sueldo

    }
}

const persona1 = new persona(1, "jonathan", "garnica", 24, 10000)
const persona2 = new persona(3, "mabel", "diaz", 46, 70000)
const persona3 = new persona(4, "lauriana", "garnica", 20, 20000)
const persona4 = new persona(5, "gustavo", "garnica", 49, 80000)


const personas = [persona1, persona2, persona3, persona4]

const sueldos = personas.map(persona => persona.sueldo)

console.log(sueldos.sort((a, b) => a-b)) //ordena el array de menor a mayor o de mayor a menor (en estos casos solo hace falta hacer (b-a))
*/

class Familia{
    constructor(nombre = " ", apellido = " ", edad = 0){
        this.nombre = nombre
        this.apellido = apellido
        this.edad = edad
    }
}

function buscarNombre(familias){
    let buscarNombre = prompt("ingre un nombre")

    let nombreBuscado = familias.find(familia => familia.nombre == buscarNombre)

    if(nombreBuscado == undefined){
        console.log("nombre no encontrado")
    }else{
        console.log(nombreBuscado)
    }
}

function buscarApellido(familias){
    let buscarApellido = prompt("ingrese el apellido")

    let apellidoBuscado = familias.find(familia => familia.apellido == buscarApellido)

    if(apellidoBuscado == undefined){
        console.log("apellido no encontrado")
    }else{
        console.log(apellidoBuscado)
    }
}

function buscarEdad(familias){
    let buscarEdad = parseInt(prompt("ingrese una edad"))

    edadBuscado = familias.filter(familia => familia. edad ==  buscarEdad)

    if(edadBuscado.length == 0){
        console.log("no personas con dicha edad")
    }else{
        console.log(edadBuscado)
    }
}

const familias =[]

let nombre, apellido, edad, empezarDeNuevo, agregarFamilia, buscar


do{
    do{
        nombre = prompt("ingrese el nombre del familiar que quiere registrar en el registro familiar").toLowerCase()
        apellido = prompt("ingrese el apellido del familiar que quiere reguistrar en el registro familiar").toLowerCase()
    }while(nombre.length == 0 || apellido.length == 0)

    do{
        edad = parseInt(prompt("ingrese la edad del familiar que quiere reguistrar en el registro familiar"))
    }while((isNaN(edad)) || (edad <= 0))
        
    const famili = new Familia(nombre, apellido, edad)
    agregarFamilia = familias.push(famili)
    empezarDeNuevo = prompt("Quiere agregar mas Familiares?").toLowerCase()
}while(empezarDeNuevo != "no")


do{
    buscar = parseInt(prompt(`presione 1 para :
    1. para buscar por nombre
    2. para buscar por apellido
    3. para buscar por edad
    `))
}while(buscar < 1 && buscar > 3)

switch(buscar){
    case 1:
        buscarNombre(familias)
        break
    case 2:
        buscarApellido(familias)
        break
    case 3:
        buscarEdad(familias)
        break
    default:
    alert("opcion no valida")
}

console.log(familias)


/*  
class producto{
    constructor(nombre = " ", marca = " ", precio = 0, stock = 0){
        this.nombre = nombre
        this.marca = marca
        this.precio = precio
        this.stock = stock
    }
}

const productos = []

let precio, stock, nombre, marca, continua

do{
    nombre = prompt("ingrese el nombre del producto").toLowerCase()
    marca = prompt("ingrese la marca del producto").toLowerCase()
    do{
        precio = parceFloat(prompt("ingrese un precio del producto"))
        stock = parceint(prompt("ingrese stock del producto"))
    }while((isNaN(precio) || isNaN(stock)) || (precio <= 0 || stock <= 0))

    continua = prompt("desea continuar")
}while(continua !=no)

*/














