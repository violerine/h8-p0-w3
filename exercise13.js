function targetTerdekat(arr){
    var countindexO=[]
    var countindexX=[]
    var bandingin=0
    //pertama diliat dulu ada o sama x apa engga
    if(arr.indexOf('o')== -1 || arr.indexOf('x')==-1){
        return 0
    }
    //ini mulai ngeloop arraynya
    for(var i=0; i<arr.length; i++){
        //ini buat cari o ada di index brapa
        if(arr[i]==='o'){
            countindexO.push(i)
            
        }
        //ini buat cari x ada di index brapa
        if(arr[i]==='x'){
            countindexX.push(i)
        }
    }
    //ini ngesort dari kecil ke gede, kan mikirnya kalau udah di urut nih ya, dapet yg paling kecil selisihnya
    countindexO.sort(function(a,b){return a-b})
    countindexX.sort(function(a,b){return a-b})
    var firstX = countindexX[0];
    var firstO = countindexO[0]; 
    console.log("firstx",countindexO)
    console.log("firsto",countindexX)
   
    //tapi ada case lagi, kalo x nya 0
    if(firstX == 0){
       firstX = countindexX[countindexX.length-1]
      
    }
    if(firstO>firstX){
        result=firstO-firstX 
    }
    else{
        result= firstX-firstO
    }
    
    return result 
}
console.log(targetTerdekat([' ', ' ', 'o', ' ', ' ', 'x', ' ', 'x'])); // 3
console.log(targetTerdekat(['o', ' ', ' ', ' ', 'x', 'x', 'x'])); // 4
console.log(targetTerdekat(['x', ' ', ' ', ' ', 'x', 'x', 'o', ' '])); // 1
console.log(targetTerdekat([' ', 'x', ' ', ' ', 'x', 'x', 'o', ' '])); // 1
console.log(targetTerdekat([' ', ' ', 'o', ' '])); // 0
console.log(targetTerdekat([' ', 'o', ' ', 'x', 'x', ' ', ' ', 'x'])); // 2
console.log(targetTerdekat([' ', 'x', ' ', 'o', 'o', ' ', ' ', 'o'])); // 2