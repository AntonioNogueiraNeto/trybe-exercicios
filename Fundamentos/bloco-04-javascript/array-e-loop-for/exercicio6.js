let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

let evenNumber = 0;
//6

for (let index = 0; index < numbers.length; index += 1){
    if (numbers[index] % 2 !==0){
        evenNumber += 1
    }
}

if (evenNumber === 0){
    console.log('nenhum valor ímpar encontrado')
} else{
    console.log(evenNumber);
}