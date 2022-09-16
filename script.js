function GetPrimes(){
    document.getElementById("Results").innerHTML = "";
    var totalPrimes = document.getElementById("NumberOfPrimesInput").value;
    if(totalPrimes != ""){
        var primes = [2];
        var currentNumber = 3;
        while(primes.length < totalPrimes){
            var IsPrime = true;
            var i=1;
            while((primes[i] < Math.floor(Math.sqrt(currentNumber))+1) && (IsPrime == true)){
                if((currentNumber%primes[i]) == 0) IsPrime = false;
                i++;
            }
            if(IsPrime == true) primes.push(currentNumber);
            currentNumber = currentNumber+2;
        }
        console.log(primes);
        for(var i=0; i<primes.length; i++){
            document.getElementById("Results").innerHTML += `<p>${primes[i]}</p>`
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