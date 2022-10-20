document.getElementById("calcular").addEventListener("click", calcularImc = () =>{
    const peso = document.querySelector('#peso').value;
    const altura = document.querySelector('#altura').value;
    let imc = peso / (altura * altura)
    document.getElementById("resultado").value = imc;

    let classificacao = '';

    if(imc <= 18.9){
        classificacao = "Cuidado você está abaixo do peso";
    }else if(imc <= 24.9){
        classificacao = "Parabéns você esta com o peso normal";
    }else if(imc <= 29.9){
        classificacao = "Você está com Sobrepeso";
    }else if(imc <= 34.9){
        classificacao = "Cuidado obesidade Grau I";
    }else if(imc <= 39.9){
        classificacao = "Cuidado obesidade Grau II";
    }else{
        classificacao = "Muito Cuidado obesidade Mórbida";
    }
    document.querySelector('.classificacao').innerHTML = classificacao;
})

const validarCampos = (numero) =>{
    let er = /[^0-9.]/
    er.lastIndex = 0;
    let campo = numero;
    if(er.test(campo.value)){
        campo.value = ""
    }
}
document.getElementById('limpar').addEventListener('click', limparCampos = () =>{
    peso = document.getElementById('peso').value = '';
    altura = document.getElementById('altura').value = '';
    resultado = document.getElementById('resultado').value = '';
    classificacao = document.querySelector('.classificacao').innerHTML = '';
})
