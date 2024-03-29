/* var nums = [];
while (true){
    var num = prompt("Ingresa un valor (o deja el campo vacio para finalizar):");
    if(num === null || num === ""){
        break
    } else {
        nums.push(parseFloat(num));
    }
}
console.log(nums) */

/* var nums = prompt("Ingresa una lista de valores separados por espacio:").split(" ");
nums = nums.map(function(num) {
    return parseFloat(num); 
});
var target = prompt("Elige un número entero como objetivo:"); */

// Función
var obtenerDatos = function(){
    var nums = document.getElementById("listNums").value.split(" ")
    nums = nums.map(function(num) {
        return parseFloat(num); 
    });
    var target = document.getElementById("target").value
    twoSum(nums, target)
}
 
var twoSum = function(nums, target){
    var arrayIndice = []
    for (let i = 0; i < nums.length; i++) {
        for(let j = 0; j < nums.length-1;j++){
            if(i != j){
                suma = nums[i]+nums[j]
                if(suma == target & arrayIndice.length == 0){
                    arrayIndice.push(i,j);
                    break
                }
            }    
        }
    }
    arrayIndice = arrayIndice.sort()
    escribirHTML(nums, target, arrayIndice)
    return console.log("Los indices de los números que sumados dan el valor objetivo son: ", arrayIndice)
}

var escribirHTML = function(nums, target, arrayIndice){
    var etiqueta = document.getElementById("result");
    etiqueta.innerHTML = `<p><strong>La solución del ejercicio con los parametros ingresados:</strong></p>
    <pre class="ps-3"><strong>Input:</strong> nums = [${nums}], target = ${target}<br><strong>Output:</strong> [${arrayIndice}]</pre>`
    document.getElementById("form").reset();
}