function groupAnimals(animals){
    animals.sort()
    var binatang=[]
    index = 0
    //yang ini di isi dulu arraynya, pake isi array multidimensi yang pertama, kalo ga di declare, dia ga bisa ke push
    binatang[0] = [animals[0]]
    //gini, jadi disini kalo misal ada nemu binatang yg huruf depannya beda kan dia bkin array baru,
    //disini indexnya langsung nambah 1 kalo misal ada perbedaan. kalo engga ada beda, dia masuk ke
    //binatang[indexnya], index awal 0. kalo dia ga ada beda sama yg sblomnya which is anoa, yg pertama kali
    //udah di declare di atas, ya dia indexnya ga nambah, ttp ke push ke index array multidm yg 0
    for(var i=1; i<animals.length; i++){
        if(animals[i-1].charAt(0)!==animals[i].charAt(0)){
            index++;
            binatang[index]=[];
        }
        
        binatang[index].push(animals[i])
        

    }
    return binatang
}

console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil']));
// console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil', 'unta', 'cicak' ]));
