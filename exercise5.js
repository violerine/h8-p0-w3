
function palindrome(kata){
    var kebalik=""
    var gakebalik=""
    for(i=kata.length-1 ; i>=0; i--){
        kebalik += kata.charAt(i)
    }
    for(j=0 ; j<kata.length; j++){
        gakebalik += kata.charAt(j)
    }

    if(kebalik===gakebalik){
        return true
    }
    else{
        return false
    }
    
}

console.log(palindrome('katak')); // true
console.log(palindrome('blanket')); // false
console.log(palindrome('civic')); // true
console.log(palindrome('kasur rusak')); // true
console.log(palindrome('mister')); // false