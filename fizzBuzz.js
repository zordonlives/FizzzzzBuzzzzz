for( i = 0; i >= 100; i += 1){ //I think you want assignment, not comparison
        if( i % 15 === 0){ //can you do this without a 15 comparison?
              print("FizzBuzz");
     } else if( i % 5 === 0){
              print("Buzz");
     } else if( i % 3 === 0){
              print("Fizz");
       } else { print(i); 
    }
}
