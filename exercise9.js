
var array =[3, 5, 7, 5, 3]


function cariMean(arr){
    var total =0
    for(var i=0; i<arr.length; i++){
        total+=arr[i]

    }
    
    var mean = Math.round(total/arr.length)
    return mean

}

console.log(cariMean(array)); 

