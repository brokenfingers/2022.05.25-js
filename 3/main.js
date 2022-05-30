let playersArr = [{ vardas: 'Tomas', pavarde: 'Petrauskas', greitis: 5, ugis: 1.75, amzius: 18, pilnasVardas: function () { return this.vardas + ' ' + this.pavarde } },
{ vardas: 'Antanas', pavarde: 'Kazlauskas', greitis: 5, ugis: 1.97, amzius: 18, pilnasVardas: function () { return this.vardas + ' ' + this.pavarde } },
{ vardas: 'Vytas', pavarde: 'Stasiulis', greitis: 4, ugis: 1.98, amzius: 18, pilnasVardas: function () { return this.vardas + ' ' + this.pavarde } },
{ vardas: 'Marius', pavarde: 'Pavardenis', greitis: 11, ugis: 1.77, amzius: 18, pilnasVardas: function () { return this.vardas + ' ' + this.pavarde } },
{ vardas: 'Algis', pavarde: 'Peckurys', greitis: 12, ugis: 1.89, amzius: 18, pilnasVardas: function () { return this.vardas + ' ' + this.pavarde } },
{ vardas: 'Natalija', pavarde: 'Maxim', greitis: 2, ugis: 1.88, amzius: 18, pilnasVardas: function () { return this.vardas + ' ' + this.pavarde } },
{ vardas: 'Jonis', pavarde: 'Kazlėkas', greitis: 3, ugis: 1.91, amzius: 18, pilnasVardas: function () { return this.vardas + ' ' + this.pavarde } },
{ vardas: 'Lukas', pavarde: 'Lukauskis', greitis: 13, ugis: 1.75, amzius: 18, pilnasVardas: function () { return this.vardas + ' ' + this.pavarde } },
{ vardas: 'Virginijus', pavarde: 'Ivanovas', greitis: 5, ugis: 1.79, amzius: 18, pilnasVardas: function () { return this.vardas + ' ' + this.pavarde } },
{ vardas: 'Simonas', pavarde: 'Gedgaudas', greitis: 6, ugis: 1.95, amzius: 18, pilnasVardas: function () { return this.vardas + ' ' + this.pavarde } },
{ vardas: 'Kazys', pavarde: 'Petrauskas', greitis: 7, ugis: 1.86, amzius: 18, pilnasVardas: function () { return this.vardas + ' ' + this.pavarde } },
{ vardas: 'Tomas', pavarde: 'Grybauskas', greitis: 10, ugis: 1.98, amzius: 18, pilnasVardas: function () { return this.vardas + ' ' + this.pavarde } },
{ vardas: 'Jovanis', pavarde: 'Paulauskas', greitis: 4, ugis: 1.85, amzius: 18, pilnasVardas: function () { return this.vardas + ' ' + this.pavarde } },
{ vardas: 'Abdul', pavarde: 'Ahmed', greitis: 6, ugis: 1.95, amzius: 18, pilnasVardas: function () { return this.vardas + ' ' + this.pavarde } },
{ vardas: 'Fredis', pavarde: 'Povilaitis', greitis: 7, ugis: 1.82, amzius: 18, pilnasVardas: function () { return this.vardas + ' ' + this.pavarde } }]


const listByName = document.createElement('div')
const fastest = document.createElement('div')

const main = document.querySelector('body')
main.appendChild(fastest);
main.appendChild(listByName);

(function () {

    let html = '<ul>'
    let arrCopy = [...playersArr]

    // Pagal varda ir pavarde
    // arrCopy.sort((a, b) => a.vardas.localeCompare(b.vardas))
    //     .map(itm => html += `<li>${itm.pilnasVardas()}  ${itm.greitis}  ${itm.ugis}</li>`)

    // Pagal greiti
    // arrCopy.sort((a, b) => b.greitis - a.greitis)
    //     .map(itm => html += `<li>${itm.pilnasVardas()}  ${itm.greitis}  ${itm.ugis}</li>`)
    // Greiciausias
    // let rslt = arrCopy.reduce((a, b) => a.greitis > b.greitis ? a : b)
    // html += `<li>${rslt.pilnasVardas()}  ${rslt.greitis}  ${rslt.ugis}</li>`



    html += '<ul>'
    listByName.innerHTML = html;

})()



