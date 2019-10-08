function showAddAddress() {
    var formAddress = document.getElementById('form-address');
    var bodyFilter = document.getElementById('body-filter');
    formAddress.style.display = 'block';
    bodyFilter.style.display = 'block';
}
function filterHidden() {
    var formAddress = document.getElementById('form-address');
    var bodyFilter = document.getElementById('body-filter');
    formAddress.style.display = 'none';
    bodyFilter.style.display = 'none';
}

function addAddress() {
    var formAddress = document.getElementById('form-address');
    var bodyFilter = document.getElementById('body-filter');
    
    var idDel = Math.random();

    const divmae = document.getElementById("divmae");
    const divQtd =  document.getElementsByClassName('box-address').length;

    var newBox = document.createElement('div');
    var newInfo = document.createElement('div');
    var newEndereco = document.createElement('p');
    var newLogr = document.createElement('span');
    var newCep = document.createElement('span');
    var newNum = document.createElement('span');
    var newBairro = document.createElement('span');
    var newCidade = document.createElement('span');
    var newUf = document.createElement('span');
    var newCompl = document.createElement('span');
    var newbr = document.createElement('br');
    var newbr2 = document.createElement('br');
    var newbr3 = document.createElement('br');
    var newB = document.createElement('b');
    var newBtnBox = document.createElement('div');
    var newDivFlex = document.createElement('div');
    var newBtn = document.createElement('button');
    var newBtn2 = document.createElement('button');
    var newVirg = document.createElement('span');
    var newTraco = document.createElement('span');
    var newTraco2 = document.createElement('span');

    const fields = document.getElementsByClassName('field-form');
    const show = [newCep, newLogr, newNum, newBairro, newCidade, newUf, newCompl];

    newBox.setAttribute('class', 'box-address client-address');
    newBox.setAttribute('id', idDel);
    newBox.setAttribute('onclick', 'mainAddress(id)');
        newInfo.setAttribute('class', 'info-address');
            newEndereco.setAttribute('p', 'endereco');
        // itens dentro de info-address adicionados no for

        newBtnBox.setAttribute('class', 'btn-box');
            newDivFlex.setAttribute('class', 'div-flex div-flex-h');
                newBtn.setAttribute('type', 'button');
                newBtn.setAttribute('class', 'btn-editar');
                newBtn2.setAttribute('type', 'button');
                newBtn2.setAttribute('id', idDel);
                newBtn2.setAttribute('onclick', 'deleteAddress(id)');
                newBtn2.setAttribute('class', 'btn-del btn btn-danger');


    if (divQtd < 4){
        newBtn.innerHTML = "Editar";
        newBtn2.innerHTML = "Excluir";
        newB.innerHTML = "CEP: ";
        newVirg.innerHTML = ", ";
        newTraco.innerHTML = " - ";
        newTraco2.innerHTML = " - ";
        // newbr.innerHTML = "\n";

        divmae.appendChild(newBox);
        newBox.appendChild(newInfo);
        newInfo.appendChild(newEndereco);
        for (var i = 0; i < fields.length; i++) {
            show[i].innerHTML = fields[i].value;
            show[i].setAttribute('class', 'info');
        }
        newEndereco.appendChild(newB);
        newEndereco.appendChild(show[0]);
        newEndereco.appendChild(newbr2);
        newEndereco.appendChild(show[1]);
        newEndereco.appendChild(newVirg);
        newEndereco.appendChild(show[2]);
        newEndereco.appendChild(newTraco2);
        newEndereco.appendChild(show[3]);
        newEndereco.appendChild(newbr3);
        newEndereco.appendChild(show[4]);
        newEndereco.appendChild(newTraco);
        newEndereco.appendChild(show[5]);
        newEndereco.appendChild(newbr);
        newEndereco.appendChild(show[6]);

        for (var i = 0; i < fields.length; i++) {
            fields[i].value = "";
        }
        newBox.appendChild(newBtnBox);
        newBtnBox.appendChild(newDivFlex);
        newDivFlex.appendChild(newBtn);
        newDivFlex.appendChild(newBtn2);

        formAddress.style.display = 'none';
        bodyFilter.style.display = 'none';
    }
}

function deleteAddress(del) {
    
    var coiso = document.getElementById(del);
    var a = coiso.parentNode.parentNode.parentNode;
    const divQtd =  document.getElementsByClassName('box-address').length;
    if (divQtd > 2)
        a.remove();
    else alert('você não pode remover todos seus endereços');
}

function mainAddress(id) {
    var boxAddress = document.getElementById(id);
    var boxes = [... document.getElementsByClassName('client-address')];
    var borderBlue = "3px #19abfa solid"

    for (var i = 0; i < boxes.length; i++){
        // alert('por enquanto ta tudo tranquilo')  
        if (boxes[i].style.border = borderBlue) {
            boxes[i].style.border = "2px #ddd solid";
        }
        boxAddress.style.border = borderBlue;
    }
    // boxAddress.style.border = border;
}

function editAddress(){
    showAddAddress();
    const fields = document.getElementsByClassName('field-form');
}