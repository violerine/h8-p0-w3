number = 121

function reverse(x){
    output = 0
    while(x>0){
        output*=10
        output+=x%10
        x= parseInt(x/10)
    }
    return output
}
//fungsi while akan terus berjalan sampai keluar hasil "false"
//jadi kalau x == checker (alias hasilnya true) maka loopnya berhenti berjalan
function cek(x){
    checker = reverse(x)+1
    while(x!=checker){ //selama x gak sama dengan x yang sudah di reverse
        x++     //ini untuk update x, tapi checker masih reverse(x) yang lama
        checker=reverse(x) // untuk update checker menjadi angka x yang sudah di reverse
    }
    return x
}

console.log(125!=521) 
// console.log(angkaPalindrome(8)); // 9
// console.log(angkaPalindrome(10)); // 11
// console.log(angkaPalindrome(117)); // 121
// console.log(angkaPalindrome(175)); // 181
// console.log(angkaPalindrome(1000)); // 1001
  