number = 121

function cek(x){
  if(x<=8){
    return x+1
  }

function angkaPalindrome(num)  {
    //ini buat ngecek kalo palindrom apa ngga 
    var kebalik=""
    var num = num.toString()
    for(i=num.length-1; i>=0; i--){
        kebalik += num[i]
    }
    return kebalik
}
    //jadi begini, KONDISI DALEM WHILE BUAT NGESTOP PROSES WHILENYA
    //jadi kondisi x!=checker buat ngestop nih
    //disini prosesnya, ketika x nya ga sama dengan checker, checker disini tuh dia 
    //ke replace terus sama angka yang udah dibalik 
    // x itu input. checker tu angka yang udah dibalik.(angkaPalindrome(x) itu dia masukin input x, yang pertama
    // kali dimasukin, dijalanin di dalem fungsi angka palindrom, yang hasilnya kebalikannya
    //jadi disini , ketika x yang sebagai input angkanya, tidak sama dengan checker which is angka input yang
    //sudah di balik, ya udah dia jalanin while loopnya lg 
    checker = Number(angkaPalindrome(x))
    while(x!=checker){ 
        x++;
        checker=angkaPalindrome(x)
        console.log("checker"+checker)
       
    }
    return checker //or x jg bisa 
}

console.log(cek(123))
// console.log(cek(8)); // 9
// console.log(cek(10)); // 11
// console.log(cek(117)); // 121
// console.log(cek(175)); // 181
// console.log(cek(1000)); // 1001
  