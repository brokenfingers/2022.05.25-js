//1 ----------------------------------------------------------------------
const resultHolder = document.createElement('h2')
const body = document.querySelector('body')
body.appendChild(resultHolder)
const button1 = document.createElement('button')
button1.textContent = 'Rodyti žinutę'
button1.addEventListener('click', showMessage)
body.appendChild(button1)


function showMessage() {
    resultHolder.textContent = 'Mėgstu programuoti.Yey'
}





//2 ----------------------------------------------------------------------

const button2 = document.createElement('button')
button2.textContent = 'Apskaiciuoti'
body.appendChild(button2)
button2.addEventListener('click', () => countPrice('obuoliai', 0.7))

function countPrice(title, price) {
    resultHolder.textContent = `5 x ${title} = ${price * 5}`
}

//3 ----------------------------------------------------------------------

const button3 = document.createElement('button')
button3.textContent = 'Apskaiciuoti2'
body.appendChild(button3)
button3.addEventListener('click', countPrice2)


const input1 = document.createElement('input')
input1.type = 'text';
input1.placeholder = 'Vaisiaus pavadinimas'
const input2 = document.createElement('input')
input2.type = 'text';
input2.placeholder = 'Kaina'
const input3 = document.createElement('input')
input3.type = 'text';
input3.placeholder = 'kiekis'
body.appendChild(input1)
body.appendChild(input2)
body.appendChild(input3)

function countPrice2() {
    if (input1.value == '' || input2.value == '' || input3.value == '') {
        alert("uzpildyti langelius")
        return
    }
    resultHolder.textContent = `${+input3.value} x ${input1.value}(${+input2.value}) = ${+input2.value * +input3.value}`
}


//4 ----------------------------------------------------------------------
const heroeHolder = document.createElement('div')


const heroesArr = [{ name: 'pelene', properties: 'dazniausiai be vieno bato' },
{ name: 'Miegancioji gražuolė', properties: 'pirmadieniais į mokyklą neatvyksta, nes pramiega' },
{ name: 'Septyni nykštukai', properties: 'stiprūs kol vaikšto septyniese' },
{ name: 'Ragana', properties: 'nera linkusi į gerus darbus' },
{ name: 'Pinokis', properties: 'pasakų pirikūpas' },
{ name: 'Karlsonas', properties: 'pastoviai išskridęs' }]



const button4 = document.createElement('button')
button4.textContent = 'Herojai'
body.appendChild(button4)
button4.addEventListener('click', showHeroes)
body.appendChild(heroeHolder)

function showHeroes() {
    let html = '<ul>';

    heroesArr.forEach((itm, i) => {
        html += `<li style="background-color:${i % 2 == 0 ? 'blue' : 'none'}; color: ${i % 2 == 0 ? 'white' : 'black'}">${itm.name}  -  ${itm.properties}</li>`
    })
    html += '</ul>'
    heroeHolder.innerHTML = html;
}