let num = 0;
let index = 0;

console.log("---------Laço de repetição com While");

while(index < 10){
    num++
    index++
    console.log("valor de num: " + num);
    console.log("valor de index: " + index);
}
// NumFinal = 10 | index = 10

num = 0
index = 0

console.log("---------Laço de repetição com DoWhile");
do{
    
    num++ 
    index++ 
    console.log("valor de num: "+num);
    console.log("valor de index: "+index);
}while(index <= 10)
// numFinal = 11 | index = 11

num = 0

console.log("---------Laço de repetição com for");
for(let i = 0;i < 10; i++){
    num+=2
    console.log(`Valor de  ${num}`) // template string são feitas colocando dois acentos graves, como se fossem aspas,e nela podesse inserir variaveis ou expressoes usando ${}
}// index é definido com 0

