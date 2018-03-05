function groupAnimals(animals){
    animals.sort()
    var binatang=[]
    index = 0
    binatang[0] = [animals[0]]
    console.log(animals)
    console.log("binatang nol adalah " + binatang[0])
    for(var i=1; i<animals.length; i++){
        if(animals[i-1].charAt(0)!==animals[i].charAt(0)){
            index++;
            binatang[index]=[];
        }
        console.log(binatang)
        binatang[index].push(animals[i])

    }
    return binatang
}


console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil']));
console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil', 'unta', 'cicak' ]));
