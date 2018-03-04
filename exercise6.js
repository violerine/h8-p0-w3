number = 121

function cek(x){
function angkaPalindrome(num)  {
    var kebalik=""
    var num = num.toString()
    for(i=num.length-1; i>=0; i--){
        kebalik += num.charAt(i)
    }
    
    return kebalik

}

    checker = angkaPalindrome(x)+1
    while(x!=checker){ 
        x++;
        checker=angkaPalindrome(x)
    }
    return x

}

console.log(cek(123))
// console.log(angkaPalindrome(8)); // 9
// console.log(angkaPalindrome(10)); // 11
// console.log(angkaPalindrome(117)); // 121
// console.log(angkaPalindrome(175)); // 181
// console.log(angkaPalindrome(1000)); // 1001
  