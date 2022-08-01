# Prime_Numbers_Website
Small webpages that solve problems related to prime numbers

In the first app, when trying to find the first n prime numbers, it works fine until 10 000, then it starts to be slow because the computer need to display all the 
results on the screen. Therefore, when searching for 10 000+ prime numbers, it is recommended to comment out the last part of the GetPrimes function.
It should look like this:

[...]
console.log(primes);
/*for(var i=0; i<primes.length; i++){
    document.getElementById("Results").innerHTML = document.getElementById("Results").innerHTML + `<p>${primes[i]}</p>`
}*/
[...]

If you want to get the last number when trying to find more than 10 000 prime numbers, you can do the following modification :

[...]
console.log(primes[totalPrimes]);
[...]

If there are any questions, contact me at mentan017@gmail.com
