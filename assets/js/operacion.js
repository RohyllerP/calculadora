const calcular = document.querySelector('#div-20');
const result = document.querySelector('#id-result');
const deleteAll = document.querySelector('#div-16');
const delet = document.querySelector('#div-4');
const coma = document.querySelector('#div-19');
const porcent = document.querySelector("#div-12");

//Seleccionas todos los elementos con clase div-number
let divNumb = document.getElementsByClassName("div-number");
let divOpera = document.getElementsByClassName("div-operation");


// eliminación
deleteAll.onclick = function(){
    result.innerText = 0;
    valNumber = 0;
    valNumberAux = 0;
    valOpera = "";
    cal = 0;
}
let auxDelete = false;
delet.onclick = function(){
    let newDelet = `${result.innerText}`;
    if(newDelet.length > 1){
        newNum = newDelet.slice(0,-1)
        result.innerText = newNum; 
        valNumber = newNum;
    }else{
        result.innerText = 0;
        valNumber = 0;
        cal = 0;
    }
}
// ,
coma.onclick = function(){
    valNumber += ".";
}

//Recorrer la lista de elementos seleccionados
var valNumber = 0;
var valNumberAux = 0;
for (var i = 0; i < divNumb.length; i++) {
    //Añades un evento a cada elemento
    divNumb[i].addEventListener("click", function () {
        let h = this.firstChild.innerHTML;
        if (valOpera == "") {
            if (valNumber == 0) {
                valNumber = h;
            } else {
                valNumber += h;
            }
            result.innerText = valNumber;
        } else {
            if (valNumberAux == 0) {
                valNumberAux = h;
            } else {
                valNumberAux += h;
            }
            result.innerText = `${valNumber} ${valOpera} ${valNumberAux}`;
        }

    });
}

// Recorrer la lista de elementos seleccionados
var valOpera = "";
for (var i = 0; i < divOpera.length; i++) {
    //Añades un evento a cada elemento
    divOpera[i].addEventListener("click", function () {
        let h = this.firstChild.innerHTML;
        valOpera = h
        if(cal != 0){
            valNumber = cal;
        }   
        if(h != "%" && valOpera != "%"){
            result.innerText = `${valNumber} ${valOpera}`;
        }
    });
}

// modificar %
porcent.onclick = function(){
    let h = this.firstChild.innerText;
    if(valOpera == "" && valNumber != 0){
        valNumber = valNumber / 100;
        result.innerText = `${valNumber}`;
        return true;
    }
    if(valNumberAux != 0){
        valNumberAux = valNumberAux / 100;
        result.innerText = `${valNumber} ${valOpera} ${valNumberAux}`;
        return true;
    }
}


// funcion para verificar el dato
var cal = 0;
let auxHistorial = 0;
calcular.onclick = operar;
function operar() {
    if (valNumber != 0 && valOpera != "" && valNumberAux != 0) {
        switch (valOpera) {
            case '/':
                if(valNumber - Math.floor(valNumber) == 0){
                    cal = (Number(valNumber) / Number(valNumberAux));
                }else{
                    cal = (new Decimal(valNumber) / new Decimal(valNumberAux));
                }
                result.innerText = cal.toFixed(2);
                break;
            case 'X':
                if(Number.isInteger(valNumber)){
                    cal = (Number(valNumber) * Number(valNumberAux));
                }else{
                    let auxNum = (new Decimal(valNumber) * new Decimal(valNumberAux));
                    cal = auxNum;
                }
                result.innerText = cal;
                break;
            case '+':
                if(Number.isInteger(valNumber)){
                    cal = (Number(valNumber) + Number(valNumberAux));
                }else{
                    let auxNum = (new Decimal(valNumber) * new Decimal(valNumberAux));
                    cal = auxNum.toFixed(2);
                }
                result.innerText = cal;
                break;
            case '-':
                cal = (Number(valNumber) - Number(valNumberAux));
                result.innerText = cal;
                break;
        }
        ++auxHistorial;
        if(auxHistorial < 5){
            createHistorial(cal);
        }
        valNumber = 0;
        valNumberAux = 0;
        valOpera = "";
    }
}

// PARTE DEL HISTORIAL
const divHistorial = document.querySelector('#div-historial');
function createHistorial(calculo){
    const div = document.createElement('div');
    const p = document.createElement('p');
    if(Number.isInteger(calculo)){
        p.innerText = `${valNumber} ${valOpera} ${valNumberAux}: ${calculo}`;
    }else{
        p.innerText = `${valNumber} ${valOpera} ${valNumberAux}: ${calculo.toFixed(2)}`
    }
    
    
    div.appendChild(p);
    div.classList.add('historial-hijo');
    divHistorial.appendChild(div);
}