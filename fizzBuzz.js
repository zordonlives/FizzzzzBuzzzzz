//FizzBuzz awesomeness brought to you by Andrew Benavides 

var num = prompt("Hi there! Please be a gem and enter a number!")

for (var i=1; i<=num; i++) console.log( (i % 3 === 0 ? 'Fizz' : '') + (i % 5 === 0 ? 'Buzz' : '') || i );
