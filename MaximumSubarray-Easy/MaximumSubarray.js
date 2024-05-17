/* let nums = prompt("Ingresa un array de numeros enteros separandolo por espacio").split(" ")
let maxSuma = 0

for(let i = 0; i < nums.length; i++){
    let suma = parseInt(nums[i])
    if( nums.length == 1 ){
        maxSuma = suma
        
    } else {
    for(let j = i+1; j < nums.length; j++){
        maxSuma = Math.max(maxSuma ,suma, suma+parseInt(nums[j]))
        suma = suma + parseInt(nums[j])
        }
    } 
}
console.log("La maxima suma es ", maxSuma) */


const obtenerDatos = function(){
    var nums = document.getElementById("listNums").value.split(" ")
    nums = nums.map(function(num) {
        return parseFloat(num); 
    });
    maximumSubarray(nums)
}

const escribirHTML = function(nums, maxSuma){
    const etiqueta = document.getElementById("result");
    etiqueta.innerHTML = `<p><strong>La solución del ejercicio con los parametros ingresados:</strong></p>
    <pre class="ps-3"><strong>Input:</strong> nums = [${nums}] <br><strong>Output:</strong> sum = ${maxSuma}</pre>`
    document.getElementById("form").reset();
}

const maximumSubarray = function(nums){
    let maxSuma = 0
    for(let i = 0; i < nums.length; i++){
        let suma = parseInt(nums[i])
        if( nums.length == 1 ){
            maxSuma = suma
            
        } else {
        for(let j = i+1; j < nums.length; j++){
            maxSuma = Math.max(maxSuma ,suma, suma+parseInt(nums[j]))
            suma = suma + parseInt(nums[j])
            }
        } 
    }
    escribirHTML(nums, maxSuma)
    return console.log("La máxima suma es ", maxSuma)
}

