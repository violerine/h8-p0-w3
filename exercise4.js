var input =["0001", "Roman Alamsyah", "Bandar Lampung", "21/05/1989", "Membaca"]

function dataHandling2(array){
    var pop = array.pop();
    array.push("Pria","SMA Internasional Metro");
    array.splice(2,0,"Elsharawy","Provinsi");
    var slicee= array.slice(1,3).join(" ")
    var slicee2 = array.slice(3,5).join(" ")
    array.splice(1,4,slicee,slicee2)

    return array
}
console.log(dataHandling2(input))

function splitTanggal(a){
    var next = a.slice(3,4)
    var tostring = next.toString()
    var splitt = tostring.split("/")
    return splitt
    
}

console.log(splitTanggal(dataHandling2(input)))

var answer = splitTanggal(dataHandling2(input))
console.log(answer)

var tanggal = answer[0]
console.log(tanggal)
var bulan = answer[1]
console.log(bulan)
var tahun = answer[2]
console.log(tahun)

// function switchcase(datee){
    console.log("====> ",bulan)
switch(bulan){
    
    case '01': 
    date = tanggal + " Januari " + tahun ;break
    case '02': 
    date= tanggal + " Februari " + tahun;break
    case '03': 
    date = tanggal + " Maret " + tahun ;break
    case '04': 
    date = tanggal + " April " + tahun ;break
    case '05': 
    date = tanggal + " Mei " + tahun ;break
    case '06': 
    date = tanggal + " Juni " + tahun ;break
    case '07': 
    date = tanggal + " July " + tahun ;break
    case '08': 
    date = tanggal + " Agustus " + tahun;break
    case '09': 
    date = tanggal + " September " + tahun ;break
    case '10': 
    date = tanggal + " Oktober " + tahun ;break
    case '11': 
    date = tanggal + " November " + tahun; break
    case '12': 
    date = tanggal + " Desember " + tahun ;break
    default :
    date = "none"
    }
//     return date
// }

// console.log(switchcase(answer))
console.log(date)



// var next = dataHandling2(input).slice(3,4)
// var tostring = next.toString()
// var split = tostring.split("/")

