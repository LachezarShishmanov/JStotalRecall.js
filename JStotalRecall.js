
// 1ST VARIABLE & DATATYPES


//   A Q + A 
/* 
1. How do we assign a value to a variable?
    * Using the assignment operator ( = )
    * You can assign a value to a variable using the = operator when you 
     declare it or after the declaration and before accessing it. 
    * Ways to declare a JS variable
      Using LET
      Using CONST
      Using VAR - not a good practice

2. How do we change the value of a variable?
   * You can change a value of a variable by assigning a different value.
   * Once defining a Constant ( const ) you cannot change its value. 
   
3. How do we assign an existing variable to a new variable?
    After a value is assigned to a variable using the assignment operator, 
    you can assign the value of that variable to another variable using the assignment operator.  
    
    We can simply reassign the new value to the variable.

4. Remind me, what are declare, assign, and define?
   * Declare - declaring a variable always creates a new variable within the current scope. 
   
   * Assign - Assign values to JavaScript variables. 'Assignment' gives a variable a specific 
     value at that location in the code. Assignment can happen as many times as desired, but only 
     affects the most 'closely-declared' variable
   
   * Define - To define something is to give it a meaning. 
     We define a variable by assigning it a value.


5. What is pseudoCoding and why should you do it?
   * Pseudocode is an artificial and informal language that helps programmers develop algorithms.


6. What percentage of time should be spent thinking about how you're 
   going to solve a problem vs actually typing in code to solve it 
   * 80% thinking vs 20% coding.
*/

// B STRINGS

// For all other questions that involve writing code, you can solve them via the following instructions.

// 1. Create a variable called firstVariable
// 2. Assign it the value of the string "Hello World"
// 3. Change the value of this variable to some number
// 4. Store the value of firstVariable in a new variable called secondVariable
// 5. Change the value of secondVariable to any string.
// 6. What is the value of firstVariable?
// 7. Create a variable called yourName and set it equal to your name as a string. 
//    Then, write an expression that takes the string "Hello, my name is " and the variable yourName so 
//    that it returns a new string with them concatenated.

// ex: Hello, my name is Jean Valjean

let firstVariable = `Hello World`
    firstVariable = 10
    secondVariable = firstVariable
    secondVariable = `How are yo today`
    // console.log(firstVariable)
// The value of the firstVariable is 10
let lachezarShishmanov = `Lachezar Shishmanov`    
    // console.log(lachezarShishmanov)
    // console.log(`Hello, my name is `  + lachezarShishmanov + `.`)
    console.log(`Hello my name is ${lachezarShishmanov}.`)


// C. Booleans

/* Using the provided variable definitions, replace the blanks so that all log statements print true 
in the console. Answers should be all be valid JS syntax and not weird things that don't make sense but 
happen to print true to the console. 
*/

  const a = 4;
  const b = 53;
  const c = 57;
  const d = 16;
  const e = 'Kevin';

  console.log(a != b);
  console.log(c != d);
  console.log('Name' == 'Name');
  // FOR THE NEXT TWO, USE ONLY && OR ||
  console.log(true || false);
  console.log(false && false && false && false && false || true);
  console.log(false == false)
  console.log(e === 'Kevin');
  console.log(a + b == c); // note: a < b < c is NOT CORRECT (and is not a valid JS expression, think about using other math operations)
  console.log(a * a == d); // note: the answer is a simple arithmetic equation, not something "weird"
  console.log(48 == '48');



  // D. The farm

/* 1. Declare a variable animal. Set it to be either "cow" or something else
   2. Write code that will print out "mooooo" if the it is equal to cow
   3. Change your code so that if the variable animal is anything other than a cow, it will print "Hey! You're not a cow."
   4. Commit
*/
   let animal = `cow`
    // animal = `bull`
   if (animal === `cow` ){
    console.log(`mooooo`)
   }
    else {console.log(`Hey! You're not a cow.`)
    }


    // E. Driver's Ed
/*
   1. Make a variable that holds a person's age; be semantic
   2. Write code that will print out "Here are the keys!", if the age is 16 years or older, or, 
   if the age is younger than 16, a message should print "Sorry, you're too young."
*/

  let Ed = 15
  if (Ed >= 16){
    console.log(`Here are the keys!`)
  }
  else {
    console.log(`Sorry, you're too young.`)
  }
      


  // 2ND  LOOPS

// Remember: USE let when you initialize your for loops!
/*
   This is GOOD: for(let i = 0; i < 100; i++)
   This is NO GOOD: for(i = 0; i < 100; i++)
*/

// A. The basics

// 1. Write a loop that will print out all the numbers from 0 to 10, inclusive
    for (let i=0; i<=10; i++){
    //console.log(i)
    }
// 2. Write a loop that will print out all the numbers from 10 up to and including 400
for (let i=10; i<=400; i++){
    //console.log(i)
    }
// 3. Write a loop that will print out every third number starting with 12 and going no higher than 4000
for (let i=12; i<=4000; i+=3){
    //console.log(i)
    }

//  B. Get even

// 1. Print out the numbers that are within the range of 1 - 100
// 2. Adjust your code to add a message next to even numbers only that says: "<-- is an even number"
for (let i=1; i<=100; i++){
   if (i % 2 === 0){
//    console.log(`${i} <-- is an even number`)
  }
   else {
//    console.log(i)
   }
}

/* C. Give me Five

  1. For the numbers 0 - 100, print out "I found a number. High five!" if the number is a multiple of five
  Example Output:
   - I found a 5. High five!
   - I found a 10. High five!
*/
for ( let num = 0; num <= 100; num ++ ) {
    let checkForFive = num % 5;
    let checkForThree = num %3;
    if (checkForFive==0 && checkForThree == 0)
    console.log(`I found a ${num}. High five! Three is a crowd`)
    else if (checkForFive == 0)
        console.log(`I found a ${num}. High five!`);
    else if (checkForThree == 0)
        console.log(`I found a ${num}. Three is a crowd`)
    
    else
      console.log( num )
}

/*  2. Add to the code from above to print out "I found a number. Three is a crowd" if the number is a multiple of three.

  Example Output:
  1. I found a 3. Three is a crowd
  2. I found a 5. High five!
  3. I found a 6. Three is a crowd
  4. I found a 9. Three is a crowd
  5. I found a 10. High five!

  3. For numbers divisible by both three and five, be sure your code prints both messages
  */


  // III. Arrays & Control flow.

  // 1. What are the things in an array called?
  //    The position of an element in the array are known as indexes 

  // 2. Do Arrays guarantee those things will be in order?
  //    It does not guarantee order

  // 3. What real-life thing could you model with an array?
  // Books in library




  // IV. Functions

  //E. getTwoLengths

  // Write a function getTwoLengths that accepts two parameters (strings). 
  //The function should return an array of numbers where each number is the length of the 
  // corresponding string.
   
   function getTwoLengths(string1, string2) {
   const list = [string1.length, string2.length]
   console.log(list)
   }
   getTwoLengths("red", "blue")

   // F get Multiple Lengths.
   function getMultipleLengths(array) {
      const list = [array[0].length, array[1].length, array[2].length, array[3].length, array[4].length]
      console.log(list)
   }
   getMultipleLengths(["hello", "what", "is", "up", "dude"]);



   // OBJECTS
   // A. Make a user object
   const user = {
      name: 'Bill', 
      email: 'bill@yahoo.com',
      age: 36,
      purchased: [],
   }

   // B. Update the user
   user.email = 'billsmith@yahoo.com'
   console.log(user.email)
   
   let newAge = user.age
   console.log(newAge+1)


   
