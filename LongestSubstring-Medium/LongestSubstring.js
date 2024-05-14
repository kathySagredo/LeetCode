// Funciones
const obtenerDatos = function(){
    const s = document.getElementById("cadena").value
    lengthOfLongestSubstring(s)
}

const lengthOfLongestSubstring = function(s) {
    let caracterIndex = {};
    let maxLength = 0;
    let j = 0;

    for (let i = 0; i < s.length; i++) {
        const caracter = s[i];
        if (caracterIndex[caracter] !== undefined) {
            j = caracterIndex[caracter] + 1;
        }
        caracterIndex[caracter] = i; //Se define clave el elemento caracter con el valor del indice dentro del objeto.
        maxLength = Math.max(maxLength, i - j + 1);
    }
    escribirHTML(s, maxLength)
    return maxLength;  
};

const escribirHTML = function(s, maxLength){
    var etiqueta = document.getElementById("result");
    etiqueta.innerHTML = `<p><strong>La longitud de la subcadena más larga sin caracteres repetidos es:</strong></p>
    <pre class="ps-3"><strong>Input:</strong> cadena = "${s}"<br><strong>Output:</strong> ${maxLength}</pre>`
    document.getElementById("form").reset();
}

