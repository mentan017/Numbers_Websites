# Numbers_Websites
Small webpages that solve problems related to numbers

## Get Prime Numbers
In the first app, when trying to find the first n prime numbers, it works fine until 7500, then it starts to be slow because the computer need to display all the 
results on the screen. Therefore, when searching for 7500+ prime numbers, it is recommended to comment out the last part of the GetPrimes function.
It should look like this:

[...]
console.log(primes);
/*for(var i=0; i<primes.length; i++){
    document.getElementById("Results").innerHTML = document.getElementById("Results").innerHTML + `<p>${primes[i]}</p>`
}*/
[...]

If you want to get the last number when trying to find more than 7500 prime numbers, you can do the following modification :

[...]
console.log(primes[totalPrimes-1]);
[...]

## Check A Prime Number
This app will check if the number entered is a prime number. If it's not a prime number, it will display the smallest divisor of the number

## Fibonacci Sequence
This app will display the first n numbers of the Fibonacci Sequence. Due to floating point error, from 79 numbers, the app will lose precision in the last digits.


If there are any questions, contact me at mentan017@gmail.com
