
function encriptar(){
    let texto = document.getElementById('texto');
    console.log(texto.value);
    
    if (texto.value.length > 0){
        let textoFinal= codificador(texto.value);
        document.getElementById('text2').style.display = "none";
        document.getElementById('imagen').style.display = "none";
        let textoCodificado = document.getElementById('text1');
        textoCodificado.innerText = textoFinal;
        texto.value = '' ;
        finalizar(textoFinal);
    } else {
        textoFinal = '';
    }
    
    
    

}

function codificador(texto){
    let segundoTexto = "";
    for(var i=0; i < texto.length; i++){
        //console.log(i);
        if(texto[i] == 'a'){
            segundoTexto += "ai" ;
        }
        else if(texto[i] == 'e'){
            segundoTexto += "enter";
        }
        else if(texto[i] == 'i'){
            segundoTexto += "imes"; 
        }
        else if(texto[i] == 'o'){
            segundoTexto += "ober"; 
        }
        else if(texto[i] == 'u'){
            segundoTexto += "ufat"; 
        }
        else{
            segundoTexto += texto[i];
        }
        
    }
    //console.log(segundoTexto);
    return segundoTexto;
}

function desencriptar(){
    let texto = document.getElementById('texto');
    if (texto.value.length > 0){ 
        let textoFinal= descodificador(texto.value);
        document.getElementById('text2').style.display = "none";
        document.getElementById('imagen').style.display = "none";
        let textoCodificado = document.getElementById('text1');
        textoCodificado.innerText = textoFinal;
        texto.value = '' ;
        
        finalizar(textoFinal);
    } else {
        textoFinal = '';

    }
    
    
}

function descodificador(texto){
    let segundoTexto = "";
    for(var i=0; i < texto.length; i++){
        console.log(i);
        if(texto[i] == 'a') {
            segundoTexto += "a" ;
            i++;
        }
        else if(texto[i] == 'e'){
            segundoTexto += "e";
            i += 4;
        }
        else if(texto[i] == 'i'){
            segundoTexto += "i"; 
            i +=3;
        }
        else if(texto[i] == 'o'){
            segundoTexto += "o";
            i += 3; 
        }
        else if(texto[i] == 'u'){
            segundoTexto += "u"; 
            i += 3;
        }
        else{
            segundoTexto += texto[i];
        }
        //console.log(segundoTexto);
    }
    //console.log(segundoTexto);
    return segundoTexto;
}

function finalizar(texto){
    let boton = document.getElementById('botonCopia');
    boton.style.display = "block";
    

    /*boton.addEventListener("click", e => { 
        texto.select();
        document.execCommand('copy');
    })*/ 
    
}
function copiar(){
    let textoCodificado = document.getElementById('text1');
    navigator.clipboard.writeText(textoCodificado.innerHTML);

}