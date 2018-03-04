while (x>0){ 
    output *= 10 
    output += x%10 
    x = parseInt(x/10) 
}


number = 123
output = 0

while (number>0){
    output = (output + number%10)*10
    number= parseInt(number/10)
}
output /=10



x = 123 
output = 0 

output = output * 10    //0*10 = 0 
output = output + 123%10   // 0+3 = 3 
x = parseInt(x/10)      //123dibagi10 = 12.3(parseInt jadi 12) 

 
x = 12 
output = 3 

output = output * 10    //3*10 = 30 
output = output + 12%10   // 30+2 = 32 
x = parseInt(x/10)      //12dibagi10 = 1.2(parseInt jadi 1) 

x = 1 
output = 32 

output = output * 10    //32*10 = 320 
output = output + 1%10 // 320+1 = 321 
x = parseInt(x/10)      //1dibagi10 = 0.1(parseInt jadi 0) 

 
OUTPUT == 321