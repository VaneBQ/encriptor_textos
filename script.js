
/* Reglas de encriptación: 
"e" es convertido para "enter" 
"i" es convertido para "imes"
"a" es convertido para "ai"
"o" es convertido para "ober"
"u" es convertido para "ufat"
Solo letras minusculas
No se permite acentuación de palabras 
*/

/* Reglas de desencriptación: 
"enter" es convertido para "e" 
"imes" es convertido para "i"
"ai" es convertido para "a"
"ober" es convertido para "o"
"ufat" es convertido para "u"
Solo letras minusculas
No se permite acentuación de palabras   
*/

var reglasEncriptacion = {'e':'enter',
'i':'imes',
'a':'ai',
'o':'ober',
'u':'ufat'}


function encriptar() {
   var objeto_input = document.getElementById("input-texto");
   cadenaSinEncriptar = objeto_input.value
   var cadenaEncriptarda = "";
   for (var i = 0; i< cadenaSinEncriptar.length; i++) {
        var caracter = cadenaSinEncriptar.charAt(i);
       if( reglasEncriptacion[caracter]  ) {
           cadenaEncriptarda += reglasEncriptacion[caracter];
            
       }  
       else {
         cadenaEncriptarda += caracter;
       }

    }
   document.querySelector('#msg').value = cadenaEncriptarda;
   objeto_input.focus();
}


function desencriptar() {
   var resultado = "";
   var objeto_input = document.getElementById("input-texto");
   cadenaEncriptada = objeto_input.value
   for (var i = 0; i< cadenaEncriptada.length; i++) {
        var caracter = cadenaEncriptada.charAt(i); 
        if( reglasEncriptacion[caracter]  ) {
            nfin = reglasEncriptacion[caracter].length -1
            i += nfin                      
        }  
        else {
           
        }
        resultado += caracter; 

    }    
    document.getElementById('msg').value = resultado;
    objeto_input.focus();
}

function copy() {
    var copyText = document.querySelector("#msg");
    copyText.select();
    document.execCommand("copy");
  }

var btn_encriptar = document.getElementById("btn-encriptar");
btn_encriptar.onclick = encriptar


var btn_encriptar = document.getElementById("btn-desencriptar");
btn_encriptar.onclick = desencriptar

var btn_copiar = document.getElementById("btn-copy");
btn_copiar.onclick = copy



