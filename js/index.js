function calcularIMC(){
  var peso;
  var estatura;
  var resultadoIMC;
  var comentario;

  peso = document.getElementById("peso").value;
  estatura = document.getElementById("estatura").value;
  
  if(estatura != "" && peso != "") {
    estatura = parseInt(estatura) / 100;
    resultadoIMC = peso / Math.pow(estatura,2);
    document.getElementById("imc").innerHTML = resultadoIMC.toFixed(2);
  }

  if(resultadoIMC <= 15) {
    comentario = "Tu IMC es " + resultadoIMC.toFixed(2) + " - Severamente bajo peso";
  
  } else if(resultadoIMC > 15 && resultadoIMC <= 16) {
    comentario = "Tu IMC es " + resultadoIMC.toFixed(2) + " - Muy bajo peso";

  } else if(resultadoIMC > 16 && resultadoIMC <= 18.5) {
    comentario = "Tu IMC es " + resultadoIMC.toFixed(2) + " - Bajo peso";

  } else if(resultadoIMC > 18.5 && resultadoIMC <= 25) {
    comentario = "Tu IMC es " + resultadoIMC.toFixed(2) + " - Peso saludable";
  
  } else if(resultadoIMC > 25 && resultadoIMC <= 30) {
    comentario = "Tu IMC es " + resultadoIMC.toFixed(2) + " - Sobrepeso";

  } else if(resultadoIMC > 30 && resultadoIMC <= 35) {
    comentario = "Tu IMC es " + resultadoIMC.toFixed(2) + " - Moderadamente obeso";

  } else if(resultadoIMC > 35 && resultadoIMC <= 40) {
    comentario = "Tu IMC es " + resultadoIMC.toFixed(2) + " - Severamente obeso";

  } else if(resultadoIMC > 40 && resultadoIMC <= 45) {
    comentario = "Tu IMC es " + resultadoIMC.toFixed(2) + " - Muy severamente obeso";

  } else if(resultadoIMC > 45 && resultadoIMC <= 50) {
    comentario = "Tu IMC es " + resultadoIMC.toFixed(2) + " - Mórbidamente obeso";

  } else if(resultadoIMC > 50 && resultadoIMC <= 60) {
    comentario = "Tu IMC es " + resultadoIMC.toFixed(2) + " - Super obeso";

  } else if(resultadoIMC > 60) {
    comentario = "Tu IMC es " + resultadoIMC.toFixed(2) + " - Hiper obeso";
  }

  document.getElementById("comentario").innerHTML = comentario;
  
}

function limpiarInput(){
  document.getElementById("peso").value = "";
  document.getElementById("estatura").value = "";
  document.getElementById("imc").innerHTML = "";
  document.getElementById("comentario").innerHTML = "";

}

window.addEventListener("load", function() {
  estatura.addEventListener("keypress", allowNumbers, false);
  peso.addEventListener("keypress", allowNumbers, false);
});

function allowNumbers(e){
  var tecla = window.event ? e.which : e.keyCode;

  if (tecla < 48 || tecla > 57) {
    e.preventDefault();
  }
  
}