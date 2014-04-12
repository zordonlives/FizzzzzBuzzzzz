//FizzBuzz awesomeness brought to you by Andrew Benavides 
// This code was inspired by the good folks at rosettacode.org
// it is less code by using the ? and : operators and concatinating "fizz" and "buzz"

var num = prompt("Hi there! Please be a gem and enter a number!")

for (var i=1; i<=num; i+=1) console.log( (i % 3 === 0 ? 'Fizz' : '') + (i % 5 === 0 ? 'Buzz' : '') || i );
