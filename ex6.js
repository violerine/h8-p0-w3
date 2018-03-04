number =121

function angkaPalindrome(num){
    var kebalik=""
    var num = num.toString()
    for(i=num.length-1; i>=0; i--){
        kebalik+=num.charAt(i)
    }
    console.log(kebalik)

    var kebalik=parseInt(kebalik)
    var comparison = kebalik+1
    
    while(num!=comparison){
        num++
        kebalik=0
        i
    }

    
}
console.log(angkaPalindrome(123))