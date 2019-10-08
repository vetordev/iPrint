function showAddAddress() {
    var formAddress = document.getElementById('form-address');
    formAddress.style.display = 'block';
}

function closeAddAddress() {
    var formAddress = document.getElementById('form-address');
    formAddress.style.display = 'none';
}

function addAddress() {
    var formAddress = document.getElementById('form-address');
    
    const divmae = document.getElementById("divmae");
    const divQtd =  document.getElementsByClassName('box-address').length;

    var newBox = document.createElement('div');
    var newInfo = document.createElement('div');
    var newLogr = document.createElement('p');
    var newCep = document.createElement('p');
    var newNum = document.createElement('p');
    var newBairro = document.createElement('p');
    var newCidade = document.createElement('p');
    var newUf = document.createElement('p');
    var newBtnBox = document.createElement('div');
    var newDivFlex = document.createElement('div');
    var newBtn = document.createElement('button');
    var newBtn2 = document.createElement('button');

    const fields = document.getElementsByClassName('field-form');
    const show = [newCep, newLogr, newNum, newBairro, newCidade, newUf];

    newBox.setAttribute('class', 'box-address client-address');
        newInfo.setAttribute('class', 'info-address');
        // itens dentro de info-address adicionados no for

        newBtnBox.setAttribute('class', 'btn-box');
            newDivFlex.setAttribute('class', 'div-flex div-flex-h');
                newBtn.setAttribute('type', 'button');
                newBtn2.setAttribute('type', 'button');
                newBtn2.setAttribute('onclick', 'deleteAddress()');
                newBtn2.setAttribute('class', 'btn-del');


    if (divQtd < 4){
        newBtn.innerHTML = "Editar";
        newBtn2.innerHTML = "Excluir";

        divmae.appendChild(newBox);
        newBox.appendChild(newInfo);    
        for (var i = 0; i < fields.length; i++) {
            show[i].innerHTML = fields[i].value;
            show[i].setAttribute('class', 'info');
            newInfo.appendChild(show[i]);
            fields[i].value = "";
        }
        newBox.appendChild(newBtnBox);
        newBtnBox.appendChild(newDivFlex);
        newDivFlex.appendChild(newBtn);
        newDivFlex.appendChild(newBtn2);

        formAddress.style.display = 'none';
    }
}

function deleteAddress() {
    alert('maoi');
    const divmae = document.getElementById("div-little-mae");
    const dels = [... document.querySelectorAll("btn-del")];

    dels.forEach(del => {
        alert('oi');
        del.addEventListener('click', event => {
            alert('cobra');
            // del.remove();
        })
    })

}