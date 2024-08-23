function Encriptar() {
  let textoBruto = document.getElementById("input").value;
  //console.log(`El texto es ${textoBruto}`);


  darFormatoCuadroLateral();
  encriptador(textoBruto);
}

function Desencriptar() {
  let textoBruto = document.getElementById("input").value;
  darFormatoCuadroLateral();
  desencriptador(textoBruto);
}

function darFormatoCuadroLateral() {
  document.getElementById("textoEncriptado").style.fontSize = "24px";
  document.getElementById("textoEncriptado").style.color = "#495057";
  document.getElementById("cuadroLateral").style.justifyContent = "flex-start";
  document.getElementById("imagenLateral").style.visibility = "hidden";
  document.getElementById("tituloLateral").style.visibility = "hidden";
  document.getElementById("copiar").style.visibility = "visible";
}




function encriptador(param) {
  let textoEncriptado="";

  for (let index = 0; index < param.length; index++) {
    if (param[index]==='a'){
      textoEncriptado += 'ai';
    }
    else if(param[index]==='i'){
      textoEncriptado += 'imes'
    }
    else if(param[index]==='e'){
      textoEncriptado += 'enter'
    }
    else if(param[index]==='o'){
      textoEncriptado += 'ober'
    }
    else if(param[index]==='u'){
      textoEncriptado += 'ufat'
    }else {
      textoEncriptado += param[index];
    }
    
  }

  

  document.getElementById("textoEncriptado").innerHTML = textoEncriptado;

}

function desencriptador(param) {

  let textoDesencriptado= param
    .replace(/ai/g, 'a')
    .replace(/imes/g, 'i')
    .replace(/enter/g, 'e')
    .replace(/ober/g, 'o')
    .replace(/ufat/g, 'u');
  

  document.getElementById("textoEncriptado").innerHTML = textoDesencriptado;
  console.log(textoDesencriptado);

  
}

async function Copiar() {
  let textoCopiado = document.getElementById("textoEncriptado").innerHTML;
  try {
    await navigator.clipboard.writeText(textoCopiado)
    console.log('Texto copiado!');
  } catch (error) {
    console.log('No se pudo copiar el texto')
  }
  
}



//REGLAS
// La letra "e" es convertida para "enter"
// La letra "i" es convertida para "imes"
// La letra "a" es convertida para "ai"
// La letra "o" es convertida para "ober"
// La letra "u" es convertida para "ufat"

//EJEMPLO
// Por ejemplo:
// "gato" => "gaitober"
// gaitober" => "gato"
