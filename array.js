/**
 * autor Carlos Caceres Ochoa
 * Escrito el dia 29 de Septiembre de 2021
 */

/**
 * función que contiene arrays de frutas
 */

const getfrutas = () => {

    return ["Piña", "Fresa", "Manzana", "Uva", "Pera", "Manzana"]

}

/**
 * 
 * devuelve un arrays de frutas filtrado por la condición de Manzana 
 */
const filtroFrutas = (frutas) => {
    return frutas.filter(fruta => fruta === "Manzana")
}
/**
 * 
 * devuelve un arrays de frutas filtrado por las frutas que tengan mas de 4 caracteres
 */
const filtroFrutaLetra = (frutas) => {
    return frutas.filter(fruta => fruta.length > 4)
}
const tamFruta = (frutas) => {
    return frutas.length
}

/**
 * map sirve para hacer una operación con una función, numero de caracteres de cada fruta
 */

const mapFruta=(frutas)=>{
    return frutas.map(fruta=>tamFruta(fruta))
}

const iterarFrutas=(frutas)=>{
    for(const [key,value] of frutas.entries()){
        console.log(`key ${key} y valor es ${value}`)
    }

}

const buscarFruta=(frutab,frutas)=>{
    return frutas.find(fruta=>fruta===frutab)
}

const buscarIndexFruta=(frutab,frutas)=>{
    return frutas.findIndex(fruta=>fruta===frutab)
}



/**
 * función principal para llamado de otras funciones
 */
const main = () => {
    let frutas = getfrutas()
    let filtrofrutas = filtroFrutas(frutas)
    let numletras=mapFruta(frutas)
    let tam = tamFruta(frutas)
    console.log(frutas)
    console.log(filtrofrutas)
    console.log(numletras)
    console.log("Tamaño Fruta " + tam)
    iterarFrutas(frutas)
    console.log(buscarFruta("Manzana",frutas))
    console.log(buscarIndexFruta("Manzana",frutas))
}
/**
 * invocar Main
 */
main()