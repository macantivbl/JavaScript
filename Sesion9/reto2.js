const data = [
    { name: "Kilimanjaro", height: 5895, place: "Tanzania" },
    { name: "Everest", height: 8848, place: "Nepal" },
    { name: "Mount Fuji", height: 3776, place: "Japan" },
    { name: "Vaalserberg", height: 323, place: "Netherlands" },
    { name: "Denali", height: 6168, place: "United States" },
    { name: "Popocatepetl", height: 5465, place: "Mexico" },
    { name: "Mont Blanc", height: 4808, place: "Italy/France" }
];

const mountains = document.getElementById('mountains');
const tabla = document.createElement('table');
const titleRow = document.createElement('tr');

for (title of Object.keys(data[0])) {
   const head = document.createElement('th');
   head.appendChild(document.createTextNode(title));
   titleRow.appendChild(head); 
}
tabla.appendChild(titleRow);

for (m of data) {
    const mountainRow = document.createElement('tr')
    
    for (title of Object.keys(data[0])) {
        let mountainData = document.createElement('td');
        mountainData.appendChild(document.createTextNode(m[title]))
        mountainRow.appendChild(mountainData);
    }
    tabla.appendChild(mountainRow);
    /*
    tabla.style['textAlign'] = 'justified';
    */
    mountains.appendChild(tabla);
}
