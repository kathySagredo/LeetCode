let nums = prompt("Ingresa un array de numeros enteros separandolo por espacio").split(" ")
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
console.log("La maxima suma es ", maxSuma)
