var nomor1 = '';
var nomor2 = '';
var spTor = '';
var calcRes = '';
var calcText='';
window.onload = function () {
    nomor1 = document.getElementById('calcText');
    nomor2 = document.getElementById('tmp');
    spTor = document.getElementById('operator');
    calcRes = document.getElementById('calcResult');
};

function nomor(par) {
    nomor1.value += par;
}

function sepPad(par) {
    spTor.value = par;
    if (nomor1.value != '' && nomor1.value != null) {
        if (nomor2.value != '' && nomor2.value != null) {
            switch (spTor.value) {
                case '+':
                    nomor2.value = parseFloat(nomor2.value) + parseFloat(nomor1.value);
                    break;
                case '-':
                    nomor2.value = parseFloat(nomor2.value) - parseFloat(nomor1.value);
                    break;
                case '*':
                    nomor2.value = parseFloat(nomor2.value) * parseFloat(nomor1.value);
                    break;
                case '/':
                    nomor2.value = parseFloat(nomor2.value) / parseFloat(nomor1.value);
                    break;
                
            }
        } else {
            nomor2.value = nomor1.value;
        }
    }
    nomor1.value = '';
    calcRes.innerText = '';
}

function equal() {
    if (nomor1.value != '' && nomor1.value != null) {
        if (nomor2.value != '' && nomor2.value != null) {
            switch (spTor.value) {
                case '+':
                    nomor2.value = parseFloat(nomor2.value) + parseFloat(nomor1.value);
                    break;
                case '-':
                    nomor2.value = parseFloat(nomor2.value) - parseFloat(nomor1.value);
                    break;
                case '*':
                    nomor2.value = parseFloat(nomor2.value) * parseFloat(nomor1.value);
                    break;
                case '/':
                    nomor2.value = parseFloat(nomor2.value) / parseFloat(nomor1.value);
                    break;
               
                
            }
        } else {
            nomor2.value = nomor2.value;
        }
    }
    calcRes.innerHTML = nomor2.value;
    spTor.value = '';
    nomor2.value = '';
    nomor1.value = '';
}

function clearField() {
    spTor.value = '';
    nomor2.value = '';
    nomor1.value = '';
    calcRes.innerText = '';
}

