function calcularIMC(){
  var peso;
  var estatura;
  var resultadoIMC;

  peso = document.getElementById("peso").value;
  estatura = document.getElementById("estatura").value;
  
  if(estatura != "" && peso != "") {

    estatura = parseInt(estatura) / 100;
    resultadoIMC = peso / Math.pow(estatura,2);
    document.getElementById("imc").value = resultadoIMC.toFixed(2);

  }
  
}