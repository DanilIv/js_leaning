function truncate(str, n){
   if (str.length <= n){
       return str
   }
   let str2 = str.substring(0,n-1);
   str2 = str2 + "..."
    return str2
}



console.log(truncate("Вот, что мне хотелось бы сказать на эту тему:", 20))

console.log(truncate("Всем привет!", 20))