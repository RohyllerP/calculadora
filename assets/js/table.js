const table = document.querySelector('.table-flex');

const data = [
    {
        id: 1,
        title: '/',
    },
    {
        id: 2,
        title: '+',
    },
    {
        id: 3,
        title: '-',
    },
    {
        id: 4,
        title: ' ',
    },
    {
        id: 5,
        title: '7',
    },
    {
        id: 6,
        title: '8',
    },
    {
        id: 7,
        title: '9',
    },
    {
        id: 8,
        title: 'X',
    },
    {
        id: 9,
        title: '4',
    },
    {
        id: 10,
        title: '5',
    },
    {
        id: 11,
        title: '6',
    },
    {
        id: 12,
        title: '%',
    },
    {
        id: 13,
        title: '1',
    },
    {
        id: 14,
        title: '2',
    },
    {
        id: 15,
        title: '3',
    },
    {
        id: 16,
        title: 'C',
    },
    {
        id: 17,
        title: ' ',
    },
    {
        id: 18,
        title: '0',
    },
    {
        id: 19,
        title: '.',
    },
    {
        id: 20,
        title: '=',
    },
]

data.forEach(e => {
    const div = document.createElement('div');
    const p = document.createElement('p');

    div.classList.add('table-div');
    div.style.backgroundColor = "#E7E7E7";
    div.setAttribute('id',`div-${e.id}`);
    if(!isNaN(e.title) && e.title != " "){
        div.classList.add(`div-number`);
    }
    if(e.title == "+" || e.title == "/" || e.title == "-" || e.title == "X" ){
        div.classList.add('div-operation');
    }
    p.innerHTML = e.title
    p.classList.add('table-p');
    if(e.id == 4){
        p.innerHTML = '<img src="assets/img/flecha.png" alt=""/>';
    }
    div.appendChild(p);
    table.appendChild(div);
})