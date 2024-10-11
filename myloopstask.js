// Create a file called mylooptask.html. console.log numbers that are only divisible by 5 and 7  and between 0 to 500.
// The output should be 35, 70, 105…..
// Hint: Use For loop and IF statements
// 1. Display numbers from 20 to 80 in console log
// 2. Improve num 1 above, only display numbers divisible by 7
// i.e 21, 28, 35...
// 3. Store the numbers divisible by 7, in an array
// 4. Display that array with all the values.
let numbersdivisible=[]
for(i=1;i<=500;i++){
    if (i%5==0 && i%7==0){
        numbersdivisible.push(i)
    }
}
console.log(numbersdivisible)
for(num=20;num<=80;num++){
    console.log(num)
}
let numbersarray=[]
for(n=20;n<=80;n++){
    if(n%7==0){
        numbersarray.push(n)
    }
}
console.log(numbersarray)

