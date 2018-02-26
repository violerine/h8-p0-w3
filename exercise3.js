var input = [
    ["0001", "Roman Alamsyah", "Bandar Lampung", "21/05/1989", "Membaca"],
    ["0002", "Dika Sembiring", "Medan", "10/10/1992", "Bermain Gitar"],
    ["0003", "Winona", "Ambon", "25/12/1965", "Memasak"],
    ["0004", "Bintang Senjaya", "Martapura", "6/4/1970", "Berkebun"]
]


function dataHandling(array){
    var hasil = ""
    for(i=0; i<array.length; i++){
        for(j=0; j<array[i].length; j++){
            if(array[i][j]===array[i][0]){
             hasil+= "Nomor Id : " + array[i][j] + "\n"
            }
            if(array[i][j]===array[i][1]){
                hasil+= "Nama Lengkap : " + array[i][j]+ "\n"
               }
            if(array[i][j]===array[i][2]){
             hasil+= "TTL : " + array[i][j] + " "
            }
            if(array[i][j]===array[i][3]){
                hasil+= array[i][j]+ "\n"
               }
            if(array[i][j]===array[i][4]){
             hasil+= "Hobby : " + array[i][j] + "\n"+ "\n"
            }
        }
    }
    return hasil
}

console.log(dataHandling(input))