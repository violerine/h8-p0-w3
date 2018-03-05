function kelompokbinatang(animals){
    animals.sort()
    var binatang=[]
    cobaindex=0
    for(var i=0; i<animals.length; i++){
        if(animals[i+1].charAt(0)!==animals[i].charAt(0)){
            
            cobaindex++
            //ini bikin array baru
            binatang[cobaindex]=[]
        }
        console.log(binatang)
        console.log(animals[i])
        // binatang[cobaindex].push(animals[i])
    }
   return binatang

}
console.log(kelompokbinatang(['cacing', 'ayam', 'kuda', 'anoa', 'kancil']));