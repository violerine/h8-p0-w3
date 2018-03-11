function angkaPalindrom(num){
    var strNum=num.toString()
    var revNum=''
    while(strNum!=revNum){
        num++
        strNum=num.toString()
        //buat reverse 
        //kenapa ada variable di dalem for loop ini, biar dia ke reset terus
        // kalo gw masukin langsung ke rev numnya, dia ga ke reset, malah nambah terus. gabisa
        var reset =''
        for(var j=strNum.length-1; j>=0; j--){
            reset+=strNum[j]
            //disini dia ganti value revnum, sama value reset which is input yang udah di balik
            revNum=reset
        }//sampe disini while loopnya jalanin lagi, ketika revnumnya msh blom sama dengan strNUM
    
        
    }
    return parseInt(revNum)
}


console.log(angkaPalindrom(123))// console.log(angkaPalindrom(8)); // 9
console.log(angkaPalindrom(10)); // 11
console.log(angkaPalindrom(117)); // 121
console.log(angkaPalindrom(175)); // 181
console.log(angkaPalindrom(1000)); // 1001