function sumar(){
    let num1 = parseFloat(document.getElementById("num1").value);
    let num2 = parseFloat(document.getElementById("num2").value);

    if (isNaN(num1) || isNaN(num2)){
        alert("Por favor, ingresa números válidos en ambos campos.");
        return;
    }

    let suma = num1 + num2;
    let resultadoElement = document.getElementById("resultado");
    resultadoElement.innerHTML = "La suma es: " + suma;
    resultadoElement.classList.add("mostrar");
    if (suma > 10){
        resultadoElement.className = "alert alert-success mostrar";
    }  else{
        resultadoElement.className ="alert alert-danger mostrar";
    }
}

document.getElementById("calcularBtn").addEventListener("click",sumar);