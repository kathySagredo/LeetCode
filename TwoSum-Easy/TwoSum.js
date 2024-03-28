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

// Variables
var nums = prompt("Ingresa una lista de valores separados por espacio:").split(" ");
nums = nums.map(function(num) {
    return parseInt(num); 
});
var target = prompt("Elige un número entero como objetivo:");

//Función
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

    return console.log(arrayIndice)
}
twoSum(nums, target)

