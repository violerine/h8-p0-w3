var input = [
    ["0001", "Roman Alamsyah", "Bandar Lampung", "21/05/1989", "Membaca"],
    ["0002", "Dika Sembiring", "Medan", "10/10/1992", "Bermain Gitar"],
    ["0003", "Winona", "Ambon", "25/12/1965", "Memasak"],
    ["0004", "Bintang Senjaya", "Martapura", "6/4/1970", "Berkebun"]
]

function dataHandling(array){
    var nampung =""
    for(i=0; i<array.length; i++){
       data = array[i]
       nampung+=
        "Nomor ID: " + data[0] +
        "\nNama Lengkap: " + data[1] + 
        "\nTTL: " + data[2] + data[3]+
        "\nHobi: " + data[4] +"\n"+"\n"
    }
    return nampung
    
}

console.log(dataHandling(input))