window.onload = FizzBuzz(100);

function FizzBuzz(length){
    for(var i=1; i<length; i++){
        var String = "";
        if(i%3 == 0) String = String + "Fizz";
        if(i%5 == 0) String = String + "Buzz";
        if(String == ""){
            console.log(i);
        }else{
            console.log(String);
        }
    }
}