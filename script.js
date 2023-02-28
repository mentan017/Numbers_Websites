function GetPrimes(){
    document.getElementById("Results").innerHTML = "";
    var totalPrimes = document.getElementById("NumberOfPrimesInput").value;
    if(totalPrimes != ""){
        var primes = [2];
        var currentNumber = 3;
        while(primes.length < totalPrimes){
            var IsPrimeNumber = true;
            var i=1;
            while((primes[i] < Math.floor(Math.sqrt(currentNumber))+1) && (IsPrimeNumber == true)){
                if((currentNumber%primes[i]) == 0) IsPrimeNumber = false;
                i++;
            }
            if(IsPrimeNumber == true) primes.push(currentNumber);
            currentNumber = currentNumber+2;
        }
        console.log(primes);
        console.log(primes[totalPrimes-1]);
        /*for(var i=0; i<primes.length; i++){
            document.getElementById("Results").innerHTML += `<p>${primes[i]}</p>`
        }*/
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
function GetFibonacciSequence(){
    document.getElementById("Results").innerHTML = "";
    var SequenceLength = parseInt(document.getElementById("NumbersForSequenceInput").value);
    if(SequenceLength != ""){
        var Sequence = [0, 1];
        for(var i=1; i<SequenceLength+1; i++){
            Sequence.push(Sequence[i-1] + Sequence[i]);
            document.getElementById("Results").innerHTML += `<p>${Sequence[i]}</p>`
        }
    }
}
function FizzBuzz(){
    document.getElementById("Results").innerHTML = "";
    var length = document.getElementById("NumberFizzBuzzInput").value;
    if(length == "") length = 0;
    for(var i=1; i<length; i++){
        var String = "";
        if(i%3 == 0) String = String + "Fizz";
        if(i%5 == 0) String = String + "Buzz";
        if(String == ""){
            document.getElementById("Results").innerHTML += `<p>${i}</p>`;
        }else{
            document.getElementById("Results").innerHTML += `<p>${String}</p>`;
        }
    }
}
function AddLargeNumbers(){
    document.getElementById("Results").innerHTML = "";
    var Number1 = document.getElementById("AdditionNumber1").value;
    var Number2 = document.getElementById("AdditionNumber2").value;
    if((typeof (parseFloat(Number1)) == "number") && (typeof (parseFloat(Number2)) == "number")){
        if(Number1.length < Number2.length){
            var ShortNumber = Number1;
            var LongNumber = Number2;
        }else{
            var ShortNumber = Number2;
            var LongNumber = Number1;
        }
        var Buffer = ""; //Regex?
        for(var i=0; i<(LongNumber.length-ShortNumber.length); i++) Buffer += "0";
        ShortNumber = Buffer + ShortNumber;
        var Result = "";
        var Rest = 0;
        for(var i=ShortNumber.length-1; i>-1; i--){
            var currentNumber = parseInt(ShortNumber[i]) + parseInt(LongNumber[i]) + Rest;
            var CurrentDigit = currentNumber%10;
            var Result = CurrentDigit + Result;
            Rest = (currentNumber - CurrentDigit)/10;
        }
        if(Rest != 0) Result = Rest.toString() + Result;
        document.getElementById("Results").innerHTML = `<p>${Result}</p>`;
    }
}
function RandomNumber(){
    var SmallNumber = document.getElementById("RandomNumber1").value;
    var BigNumber = document.getElementById("RandomNumber2").value;
    for(var i=0; i<10; i++){
        //TODO Set a timeout
        var random = parseInt((Math.random())*(parseInt(BigNumber)-parseInt(SmallNumber)) + parseInt(SmallNumber));
        document.getElementById("Results").innerHTML = `<p>${random}</p>`;
    }
}
function GetPgcdPpcm(){
    var number1 = parseInt(document.getElementById('PGCD-1').value);
    var primeFactors1 = GetFactors(number1, []);
    var number2 = parseInt(document.getElementById('PGCD-2').value);
    var primeFactors2 = GetFactors(number2, []);
    var PGCD = GetPGCD(primeFactors1, primeFactors2);
    var PPCM = (number1*number2)/PGCD;
    document.getElementById('Results').innerHTML = (`<p>PGCD: ${PGCD}, PPCM: ${PPCM}</p>`);
}
function GetFactors(number, factors){
    var i=2;
    var found = false;
    while(i<Math.ceil(Math.sqrt(number))+1){
        if(number%i == 0){
            factors.push(i);
            found = true;
            if(number > 2) GetFactors(number/i, factors);
            i = number;
        }
        i++;
    }
    if(!found) factors.push(number);
    return(factors);
}
function GetPGCD(primes1, primes2){
    var PGCD = 1;
    while(primes1.length > 0){
        var occurences1 = GetOccurences(primes1[0], primes1);
        var occurences2 = GetOccurences(primes1[0], primes2);
        if(occurences1 < occurences2) PGCD = PGCD*(Math.pow(primes1[0], occurences1));
        else PGCD = PGCD*(Math.pow(primes1[0], occurences2));
        primes2 = DeleteOccurences(primes1[0], primes2);
        primes1 = DeleteOccurences(primes1[0], primes1);
    }
    return(PGCD);
}
function GetOccurences(element, array){
    var i=0;
    var j=0;
    while(array[i] != element && i<array.length) i++;
    while(array[i] == element) i++, j++;
    return(j);
}
function DeleteOccurences(element, array){
    var i=0;
    while(array[i] == element) array.shift();
    return(array);
}