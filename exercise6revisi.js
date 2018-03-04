// number = 121

// var angkaPalindrome= function(num) {
//     var kebalik=""
//     var num = num.toString()
//     for(i=num.length-1; i>=0; i--){
//         kebalik += num.charAt(i)
//     }

//     var kebalik=parseInt(kebalik)

//     var checker = kebalik+1
    
//     while(num!=checker){
//         num++
//         kebalik=0
//         input= num
//         while(input>0){
//             kebalik+=10
//             kebalik+=input%10
//             input=parseInt(input/10)
//         }
//         checker=kebalik
//     }
//     return num

// }



number =123
function findPalindrome(x){
    output=0
    input=x
    while(input>0){
        output*=10
        output+=input%10
        input=parseInt(input/10)
    }
    console.log(output)
    comparison=output+1
    while(x!=comparison){
        x++
        output=0
        input=x
        while(input>0){
            output*=10
            output+=input%10
            input=parseInt(input/10)

        }
        comparison=output
    }
    return x
}

console.log(findPalindrome(number))