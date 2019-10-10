window.onload = function onload(){
    loadAddresses(['06567000,Avenida qJosé Lavechia,62,Bairro,São Paulo,SP,apto 102 c']);
}

function loadAddresses(address) {
    var cep = document.getElementById('cep_cli');
    var logradouro = document.getElementById('logradouro_cli');
    var numero = document.getElementById('numero_cli');
    var bairro = document.getElementById('bairro_cli');
    var cidade = document.getElementById('cidade_cli');
    var uf = document.getElementById('uf_cli');
    var complemento = document.getElementById('complemento_cli');

    var campos1 = address[0].split(',');

    cep.innerHTML = campos1[0];
    logradouro.innerHTML = campos1[1];
    numero.innerHTML = campos1[2];
    bairro.innerHTML = campos1[3];
    cidade.innerHTML = campos1[4];
    uf.innerHTML = campos1[5];
    complemento.innerHTML = campos1[6];

    if (address.length == 2){
        var campos2 = address[1].split(',');

        
    }
}

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

var aux = 0;
function addAddress() {
    var btn = document.getElementById('btn-add-address');
    const fields = document.getElementsByClassName('field-form');

    if (btn.innerHTML != "Salvar Alterações"){
        
        var idDel = Math.random();
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
            for (var i = 0; i < fields.length; i++) {
                show[i].innerHTML = fields[i].value;
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

            for (var i = 0; i < fields.length; i++) {
                fields[i].value = "";
            }
            newBox.appendChild(newBtnBox);
            newBtnBox.appendChild(newDivFlex);
            newDivFlex.appendChild(newBtn);
            newDivFlex.appendChild(newBtn2);

            filterHidden();
        }
    }else{
        const words = document.getElementsByClassName(aux);
        for (var i = 0; i < words.length; i++){
            
            words[i].innerHTML = fields[i].value;
        }
        btn.innerHTML = "Adicionar endereço";
        filterHidden();
    }
}

function deleteAddress(del) {
    var coiso = document.getElementById(del);
    var a;
    if (del == 2)
        a = coiso.parentNode.parentNode.parentNode;
    else a = coiso;
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

function editAddress(boxId){
    const words = document.getElementsByClassName(boxId);
    const fields = document.getElementsByClassName('field-form');
    
    for (i = 0; i < fields.length; i++){
        fields[i].value = words[i].innerHTML;
    }
    showAddAddress();
    var btn = document.getElementById('btn-add-address');
        btn.innerHTML = "Salvar Alterações";
    aux = boxId;
    // // alert (fields.length)
    // alert (words[0].innerHTML);
    // alert (fields[0].placeholder);
}