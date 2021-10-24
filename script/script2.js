function enviada2() {
    // criada as variaveis que armazenam o valor do campo
    var rua = document.getElementById("rua").value;
    var bairro = document.getElementById("bairro").value;
    var cidade = document.getElementById("cidade").value;
    var numero = document.getElementById("numero").value;
    var estado = document.getElementById("Estado").value;
    var cep = document.getElementById("cep").value;
    var phone = document.getElementById("phone").value;
    //se os campos estiverem limpos a mensagem não é exibida.
    if (rua == "" || bairro == "" || cidade == "" || numero == "" || estado == "" || cep == "" || phone == "" ) {
        return;
    } else {
        //campos preenchhidos mensagem acionada.
        alert("Enviado com sucesso!");
    }
}