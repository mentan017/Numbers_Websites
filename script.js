function GetPrimes(){
    document.getElementById("Results").innerHTML = "";
    var totalPrimes = document.getElementById("NumberOfPrimesInput").value;
    if(totalPrimes != ""){
        var primes = [2];
        var currentNumber = 3;
        while(primes.length < totalPrimes){
            var IsNumberPrime = (IsPrime(currentNumber))[0];
            if(IsNumberPrime == true) primes.push(currentNumber);
            currentNumber = currentNumber + 2;
        }
        for(var i=0; i<primes.length; i++){
            document.getElementById("Results").innerHTML = document.getElementById("Results").innerHTML + `<p>${primes[i]}</p>`
        }
    }
}
function IsNumberPrime(){
    document.getElementById("Results").innerHTML = "";
    var Number = document.getElementById("PrimeNumberInput").value;
    var IsNumberPrime = IsPrime(Number);
    if(IsNumberPrime[0] == true){
        document.getElementById("Results").innerHTML = `<p>The number ${Number} is prime</p>`;
    }else{
        document.getElementById("Results").innerHTML = `<p>The number ${Number} is not prime, it's a multiple of ${IsNumberPrime[1]}</p>`;
    }
}
function IsPrime(Number){
    var IsPrime = true;
    var i=2;
    while((IsPrime == true) && (i<Math.floor(Math.sqrt(Number))+1)){
        if((Number % i) == 0) IsPrime = false;
        i++;
    }
    return [IsPrime, i-1];
}