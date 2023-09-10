const calculateButton = document.querySelector("#calculate-button")


function calcularIMC() {
    const inputWeight = document.querySelector("#input-weight").value
    const inputHeight = document.querySelector("#input-height").value
    const valueImc = document.querySelector("#value-imc")
    const situation = document.querySelector("#situation")

    const imc = inputWeight / (inputHeight * inputHeight)

    valueImc.innerHTML = "Seu IMC é de: " + imc.toFixed(1)

    if (imc <= 18.5) {
        situation.innerHTML = "Abaixo do Normal. Procure um médico. Algumas pessoas têm um baixo peso por características do seu organismo e tudo bem. Outras podem estar enfrentando problemas, como a desnutrição. É preciso saber qual é o caso."
    }
    else if (imc >= 18.6 && imc <= 24.9) {
        situation.innerHTML = "Normal. Que bom que você está com o peso normal! E o melhor jeito de continuar assim é mantendo um estilo de vida ativo e uma alimentação equilibrada."
    } else if (imc >= 25.0 && imc <= 29.9) {
        situation.innerHTML = "Sobrepeso. Ele é, na verdade, uma pré-obesidade e muitas pessoas nessa faixa já apresentam doenças associadas, como diabetes e hipertensão. Importante rever hábitos e buscar ajuda antes de, por uma série de fatores, entrar na faixa da obesidade pra valer"
    } else if (imc >= 30.0 && imc <= 34.9) {
        situation.innerHTML = "Obesidade grau I. Sinal de alerta! Chegou na hora de se cuidar, mesmo que seus exames sejam normais. Vamos dar início a mudanças hoje! Cuide de sua alimentação. Você precisa iniciar um acompanhamento com nutricionista e/ou endocrinologista."
    } else if (imc >= 35.0 && imc <= 39.9) {
        situation.innerHTML = "Obesidade grau II. Mesmo que seus exames aparentem estar normais, é hora de se cuidar, iniciando mudanças no estilo de vida com o acompanhamento próximo de profissionais de saúde."
    } else if (imc > 40.0) {
        situation.innerHTML = "Obesidade grau III. Aqui o sinal é vermelho, com forte probabilidade de já existirem doenças muito graves associadas. O tratamento deve ser ainda mais urgente."
    }

}





calculateButton.addEventListener("click", calcularIMC)