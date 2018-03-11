var input =["0001", "Roman Alamsyah", "Bandar Lampung", "21/05/1989", "Membaca"]

function dataHandling2(array){

   
    var pop = array.pop();
    array.push("Pria","SMA Internasional Metro");
    array.splice(2,0,"Elsharawy","Provinsi");
    var slicee= array.slice(1,3).join(" ")
    var slicee2 = array.slice(3,5).join(" ")
    array.splice(1,4,slicee,slicee2)
   console.log(array)

//split tanggal

   var splitt = array[3].split("/")
   var splitt2 = array[3].split("/")
   
 

//buat bulan

   var bulan=splitt[1]

   switch(bulan){
    case '01': 
    date ="Januari" ;break
    case '02': 
    date="Februari";break
    case '03': 
    date ="Maret" ;break
    case '04': 
    date ="April" ;break
    case '05': 
    date ="Mei" ;break
    case '06': 
    date ="Juni" ;break
    case '07': 
    date ="July" ;break
    case '08': 
    date ="Agustus";break
    case '09': 
    date ="September" ;break
    case '10': 
    date ="Oktober" ;break
    case '11': 
    date ="November"; break
    case '12': 
    date ="Desember" ;break
    default:
    date = "none"
}

//Sort & Join tanggal
var sortTanggal= splitt.sort(function(a,b){return b-a})
console.log(sortTanggal)
var joinTanggal=splitt2.join("-")
console.log(joinTanggal)

var sliceNama=array[1].slice(0,15)
console.log(sliceNama)



}
dataHandling2(input)



