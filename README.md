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

##FizzBuzz
This app doesn't have any user interface. 
This app print all the numbers from 1 to n, but when a number is multiple of 3, it prints Fizz, when it's a multiple of 5, it prints Buzz, and when it's a multiple of 3 and 5, it prints FizzBuzz.
To run the program, you can type FizzBuzz(n) in the console of dev tools (F12), where n is the amount of numbers you want to display in the console.

##C++ Folder
This is a folder with c++ applications. They are not linked to the web pages

###String to Number
This app converts a string (word) into a number. The logic is the following:
a=1
z=26
aa=27
az=52

For example, hello = 3752127
To run the program, execute the StringToNumber.exe file, and choose the mode 1.
Your input can only container characters from the english alphabet. It cannot contain upper case characters.

###Number to String
This app converts a number into a string following the logic above
To run the program, execute the StringToNumber.exe file, and choose the mode 2
Your input has to be an integer ranging from 0 to 18,446,744,073,709,551,615

If there are any questions, contact me at mentan017@gmail.com
