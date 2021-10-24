function enviada() {
    // criada as variaveis que armazenam o valor do campo
    var nome = document.getElementById("nome").value;
    var rg = document.getElementById("rg").value;
    var cpf = document.getElementById("cpf").value;
    //se os campos estiverem limpos a mensagem não é exibida.
    if (nome == "" || rg == "" || cpf == "" ) {
        return;
    } else {
        alert("Enviado com sucesso!");
    }
}

/*
function formatarText(text){
    text.value = formatarCPF(text.value);
}

function formatarCPF(valor) {
    return valor.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/g,"\$1.\$2.\$3\-\$4");
}
*/