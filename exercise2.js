function balikString(string){
    var hasil =""
   for(i=string.length-1; i>=0; i--){
        hasil += string[i]
   }
   return hasil
}

console.log(balikString("Hello World!"))