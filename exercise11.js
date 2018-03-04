function tentukanDeretAritmatika(arr){
    
    if(arr.length>=2){
        var selisih = arr[1] - arr[0]
        for(var i=1; i < arr.length; i++){
            if(arr[i+1] === undefined){
                break;
            }
            // kalo arr[i+1] tidak sama dengan undefined
            if (selisih !== arr[i+1] - arr[i]) {
                return false;
            }
        }  
    }

    return true;
    // cek apakah panjang array lebih besar atau sama dengan dua;
    

}

console.log(tentukanDeretAritmatika([1, 2, 3, 4, 5, 6])); // true
console.log(tentukanDeretAritmatika([2, 4, 6, 12, 24])); // false
console.log(tentukanDeretAritmatika([2, 4, 6, 8])); // true
console.log(tentukanDeretAritmatika([2, 6, 18, 54])); // false
console.log(tentukanDeretAritmatika([1, 2, 3, 4, 7, 9])); // false