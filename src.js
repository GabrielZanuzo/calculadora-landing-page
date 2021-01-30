const CalculaAd = (evento) => {
     evento.preventDefault()

     document.getElementById("p-ad").className += "collapse.show" // apresenta o collapse de da adição

    const inputPrimeiroNumero = document.querySelector('[data-form-input1]') 
    const valor1 = parseInt(inputPrimeiroNumero.value)
    const inputSegundoNumero = document.querySelector('[data-form-input2]')
    const valor2 =  parseInt(inputSegundoNumero.value)
    const res = valor1 + valor2 

    const calc = document.querySelector('[data-form-res]')
    
    const conteudo = `<p class = "content">${res}</p>`
    calc.innerHTML = conteudo

    const SectionData = document.querySelector('[data-form-infoSection]')
    const info1 = document.createElement('p')
    info1.innerHTML = "Comutatividade : independente da forma que são somados os números , o resultado é o mesmo, portanto " + valor1 + "+" + valor2  + " é o mesmo que " + valor2 + "+" + valor1
    SectionData.appendChild(info1)
    const info2 = document.createElement('p')
    const valor2info2 = valor2 - 1
    info2.innerHTML = "Associação : esse propriedade nos diz que independente da forma em que somarmos as parcelas o resultado é o mesmo, portanto " + valor1 + "+(" + valor2info2 + "+ 1) = " + res
    SectionData.appendChild(info2)
    const info3 = document.createElement('p')
    info3.innerHTML = "Elemento neutro : a parcela 0 (zero) não altera o resultado das demais parcelas. O zero é denominado como o elemento neutro da adição."
    SectionData.appendChild(info3)
}

const CalculaSub = (evento) => {
    evento.preventDefault()

    document.getElementById("p-sub").className += "collapse.show";
    const inputPrimeiroNumero = document.querySelector('[data-form-input1]') 
    const valor1 = parseInt(inputPrimeiroNumero.value)
    const inputSegundoNumero = document.querySelector('[data-form-input2]')
    const valor2 =  parseInt(inputSegundoNumero.value)
    const res = valor1 - valor2 

    const calc = document.querySelector('[data-form-res]')
    
    const conteudo = `<p class = "content">${res}</p>`
    calc.innerHTML = conteudo

    const SectionData = document.querySelector('[data-form-infoSection]')
    const info1 = document.createElement('p')
    info1.innerHTML = "A subtração não possui comutatividade : a operação depende da forma que os números são colocados portanto " + valor1 + "-" + valor2  + " NÃO é o mesmo que " + valor2 + "-" + valor1
    SectionData.appendChild(info1)
    const info2 = document.createElement('p')
    info2.innerHTML = "A subtração não possui propriedade associativa : o resultado da operação está ligado a ordem em que os números estão colocados, portanto " + "(" + valor1  + "-" + valor2 + ")- 1  NÃO é a mesma coisa que " + valor1 + "-" +"(" + valor2 + "-1)"
    SectionData.appendChild(info2)
    
}

const CalculaMulti = (evento) => {
    evento.preventDefault()

    document.getElementById("p-multi").className += "collapse.show";
    const inputPrimeiroNumero = document.querySelector('[data-form-input1]') 
    const valor1 = parseInt(inputPrimeiroNumero.value)
    const inputSegundoNumero = document.querySelector('[data-form-input2]')
    const valor2 =  parseInt(inputSegundoNumero.value)
    const res = valor1 * valor2 

    const calc = document.querySelector('[data-form-res]')


    const conteudo = `<p class = "content">${res}</p>`
    calc.innerHTML = "o resultado é " + conteudo

    const SectionData = document.querySelector('[data-form-infoSection]')
    const info1 = document.createElement('p')
    info1.innerHTML = "Comutatividade : tal propriedade garante que em uma multiplicação a ordem dos fatores não altera o produto " + valor1 + "x" + valor2  + "  é o mesmo que " + valor2 + "x" + valor1
    SectionData.appendChild(info1)
    const info2 = document.createElement('p')
    info2.innerHTML = "Associativa : Quando multiplicamos três ou mais fatores podemos escolher a ordem para a resolução, o resultado será o mesmo" + "(" + valor1  + "x" + valor2 + ")x2 é a mesma coisa que " + valor1 + "x" +"(" + valor2 + "x2)"
    SectionData.appendChild(info2)
    const info3 = document.createElement('p')
    info3.innerHTML = "Elemento nulo = Quando multiplicamos qualquer valor por zero o resultado será sempre zero"
}

const CalculaDiv = (evento) => {
    evento.preventDefault()

    document.getElementById("p-div").className += "collapse.show";
    const inputPrimeiroNumero = document.querySelector('[data-form-input1]') 
    const valor1 = parseInt(inputPrimeiroNumero.value)
    const inputSegundoNumero = document.querySelector('[data-form-input2]')
    const valor2 =  parseInt(inputSegundoNumero.value)
    const res = valor1 / valor2 

    const calc = document.querySelector('[data-form-res]')


    const conteudo = `<p class = "content">${res}</p>`
    calc.innerHTML = "o resultado é " + conteudo

    const SectionData = document.querySelector('[data-form-infoSection]')
    const info1 = document.createElement('p')
    info1.innerHTML = "A divisão não possui comutatividade : A ordem dos fatos está diretamente ligada ao resultado da divisão, portanto " + valor1 + "/" + valor2  + " NÃO é o mesmo que " + valor2 + "/" + valor1
    SectionData.appendChild(info1)
    const info2 = document.createElement('p')
    info2.innerHTML = "A divisão não é associativa : O resultado da divisão depende da forma em que os números estão apresentados" + "(" + valor1  + "/" + valor2 + ")/2 NÃO é a mesma coisa que " + valor1 + "/" +"(" + valor2 + "/2)"
    SectionData.appendChild(info2)
    const info3 = document.createElement('p')
    info3.innerHTML = "Elemento Neutro = O número um (1) é o elemento neutro na divisão, dividir um número por 1 terá sempre como resultado o próprio número"
    SectionData.appendChild(info3)
    const info4 = document.createElement('p')
    info4.innerHTML = "Elemento Nulo = O número zero anulo o resultado quando dividido por qualquer número real"
    SectionData.appendChild(info4)

}

const Clear = (evento) => {
    document.getElementById("p-ad").className = "collapse"
    document.getElementById("p-sub").className = "collapse"
    document.getElementById("p-multi").className = "collapse"
    document.getElementById("p-div").className = "collapse"

    const resultado = document.querySelector('[data-form-res]')
    resultado.innerHTML = "Resultado"
    
   const SectionData = document.querySelector('[data-form-infoSection]')
    var SectionP = SectionData.getElementsByTagName('p')
   
    while (SectionP.length >= 0) {
        SectionData.removeChild(SectionP[0])
    }
    
  
    

}

const btnAd = document.querySelector('[data-form-ad]') // programando o botão de adição
btnAd.addEventListener('click',CalculaAd)

const btnSb = document.querySelector('[data-form-sub]') // programando o botão de subtração
btnSb.addEventListener('click',CalculaSub)

const btnMulti = document.querySelector('[data-form-multi]') // programando o botão de multiplicação
btnMulti.addEventListener('click',CalculaMulti)

const btnDiv = document.querySelector('[data-form-div]') // programando o botão de multiplicação
btnDiv.addEventListener('click',CalculaDiv)

const btnClear = document.querySelector('[data-form-clear]')
btnClear.addEventListener('click',Clear)

