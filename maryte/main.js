let maryte = 7
let jonukas = 10
let vaisiai = ['Obuolys', 'Kriaušė', 'Bananas', 'Apelsinas', 'Citrina', 'Ananasas']

let suma = maryte + jonukas;
console.log(suma)

suma += 5
suma -= 1

if (maryte > jonukas) {
    console.log("Maryte turi daugiau obuoliu")
} else if (jonukas > maryte) {
    console.log("Jonukas turi daugiau obuoliu")
} else {
    console.log("Atiduokim obuolius Editai")
}

switch (maryte) {
    case 5:
        console.log('Turi tiek obuoliu kiek ant rankos pirstų')
        break
    case 7:
        console.log('Tavo tašej obuolių - kiek savaitėje dienų')
        break;
    default:
        console.log('Nebsurimuoju pagal tai kiek turi obuoliu')
}
