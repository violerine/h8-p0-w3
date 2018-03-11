function pasanganTerbesar(num){
    var pembanding = 0
    var num= num.toString()
    for(var i=0; i<num.length; i++){
            var sort=""
            sort+= num.charAt(i) + num.charAt(i+1)
            if(pembanding<parseInt(sort)){
                pembanding = parseInt(sort)
            }
    }
    return pembanding
}
console.log(pasanganTerbesar(641573)) 