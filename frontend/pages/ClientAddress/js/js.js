window.onload = function onload(){
    loadAddresses(['1,06567000,Avenida qJosé Lavechia,62,Bairro,São Paulo,SP,apto 102 c,', '2,06567000,Avenida qJosé Lavechia,62,Bairro,São Paulo,SP,apto 102 c', '3,06567000,Avenida qJosé Lavechia,62,Bairro,São Paulo,SP,apto 102 c']);
    // loadAddresses(['1,06567000,Avenida qJosé Lavechia,62,Bairro,São Paulo,SP,apto 102 c,', '2,06567000,Avenida qJosé Lavechia,62,Bairro,São Paulo,SP,apto 102 c']);
    // loadAddresses(['3,06567000,Avenida qJosé Lavechia,62,Bairro,São Paulo,SP, 102ca,']);
}

function loadAddresses(address) {
    var cep = document.getElementById('cep_cli');
    var logradouro = document.getElementById('logradouro_cli');
    var numero = document.getElementById('numero_cli');
    var bairro = document.getElementById('bairro_cli');
    var cidade = document.getElementById('cidade_cli');
    var uf = document.getElementById('uf_cli');
    var complemento = document.getElementById('complemento_cli');
    var id_init = document.getElementById('dos');

    var campos1 = address[0].split(',');
    var id1 = campos1[0];
    id_init.id = id1;
    mainAddress(id1);
    localStorage.setItem('id_end', id1);
    cep.innerHTML = campos1[1];
    logradouro.innerHTML = campos1[2];
    numero.innerHTML = campos1[3];
    bairro.innerHTML = campos1[4];
    cidade.innerHTML = campos1[5];
    uf.innerHTML = campos1[6];
    complemento.innerHTML = campos1[7];

    
    // var id2;
    if (address.length == 2){
        var campos2 = address[1].split(',');
        var id2 = campos2[0];
        campos2 = campos2.slice(1,campos2.length);
        createElement(campos2, id2);
    }
    else if (address.length == 3) {
        var campos2 = address[1].split(',');
        var campos3 = address[2].split(',');

        var id2 = campos2[0];
        campos2 = campos2.slice(1,campos2.length);
        // alert(campos2);
        var id3 = campos3[0];
        campos3 = campos3.slice(1,campos3.length);
        createElement(campos2, id2);
        createElement(campos3, id3);
    }
}

function createElement(info, id) {
    // var idDel = Math.random()+1;
    var idDel = id;
    var boxId = 'end' + idDel;

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
                newBtn.setAttribute('onclick', "editAddress('"+boxId+"')")
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
        for (var i = 0; i < info.length; i++) {
            if (info[i].tagName == "INPUT") show[i].innerHTML = info[i].value;
            else show[i].innerHTML = info[i];
            show[i].setAttribute('class', 'info '+boxId);
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

        newBox.appendChild(newBtnBox);
        newBtnBox.appendChild(newDivFlex);
        newDivFlex.appendChild(newBtn);
        newDivFlex.appendChild(newBtn2);
    }
}

function showAddAddress() {
    var formAddress = document.getElementById('form-address');
    var bodyFilter = document.getElementById('body-filter');
    formAddress.style.display = 'block';
    bodyFilter.style.display = 'block';
    
    var btnAdd = document.getElementById('btn-add-address');
    var btnEdit = document.getElementById('btn-edit-address');
    btnAdd.style.display = "block";
    btnEdit.style.display = "none";

}
function filterHidden() {
    var formAddress = document.getElementById('form-address');
    var bodyFilter = document.getElementById('body-filter');
    formAddress.style.display = 'none';
    bodyFilter.style.display = 'none';

    const fields = document.getElementsByClassName('field-form');
    for (i = 0; i < fields.length; i++){
        fields[i].value = "";
    }
}

var aux = 0;
function addAddress() {
    const fields = document.getElementsByClassName('field-form');

    var id = Math.random()+1;
    createElement(fields, id);

    for (var i = 0; i < fields.length; i++) {
        fields[i].value = "";
    }
    filterHidden();
        
}

// function showCard(del) {
//     var card = document.getElementById('card-confirm');
//     card.style.display = "block";

//     deleteAddress(del);
// }
// function confirmExclud(del) {

// }


function deleteAddress(del) {
    var coiso = document.getElementById(del);
    var boxaddress = document.getElementsByClassName('box-address');
    
    var a;
    if (del == "doss")
        a = coiso.parentNode.parentNode.parentNode;
    else a = coiso;
    const divQtd =  document.getElementsByClassName('box-address').length;
    
    localStorage.setItem('id_erase', del);
    if (divQtd > 2){
        a.remove();
    }
    else alert('Você não pode remover todos seus endereços.');
    if (coiso.style.border == '3px solid rgb(25, 171, 250)'){
        boxaddress[1].style.border = '3px solid rgb(25, 171, 250)';
    }
}

function mainAddress(id) {
    var boxAddress = document.getElementById(id);
    var boxes = [... document.getElementsByClassName('client-address')];
    var borderBlue = "3px #19abfa solid"
    localStorage.setItem('id_end', id);
    for (var i = 0; i < boxes.length; i++){
        // alert('por enquanto ta tudo tranquilo')  
        if (boxes[i].style.border = borderBlue) {
            boxes[i].style.border = "2px #ddd solid";
        }
        boxAddress.style.border = borderBlue;
    }
    // boxAddress.style.border = border;
}

function editAddress(boxId){
    const words = document.getElementsByClassName(boxId);
    const fields = document.getElementsByClassName('field-form');
    
    for (i = 0; i < fields.length; i++){
        fields[i].value = words[i].innerHTML;
    }
    showAddAddress();
    
    var btnAdd = document.getElementById('btn-add-address');
    var btnEdit = document.getElementById('btn-edit-address');
    btnAdd.style.display = "none";
    btnEdit.style.display = "block";
    aux = boxId;

    // alert('aaaa');
}
    

function saveEditions() {
    var pseudo_id = localStorage.getItem('id_end')

    updateAddress(pseudo_id);
    const words = document.getElementsByClassName(aux);
    const fields = document.getElementsByClassName('field-form');
    for (var i = 0; i < words.length; i++){
        
        words[i].innerHTML = fields[i].value;
    }
    filterHidden();
}