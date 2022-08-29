# ASSESSMENT 4: Interview Practice Questions

Answer the following questions.

First, without external resources. Challenge yourself to answer from memory.

Then, research the question to expand on your answer. Even if you feel you have answered the question completely on your own, there is always something more to learn. Write your researched answer in your OWN WORDS.

1. What is object-oriented programming? How is it different than functional programming?

Your answer: Object-orientated programming is a programming style where the devloper puts most of the effort in creating classes that can instatiated to become objects, this method is creating abstract or general framework to later define objects with ease. Functional programming focuses on producing functions for logic, these two are massively different as Object-orientated programming is focused on creating templates to describe an object, but functional programming is more on the side of creating logic to solve a problem. 

Researched answer:

Object-oreintated Programming is an idea that focuses on creating classes that can be instantiated as objects. The main data component of OOP is an object + its methods, all actions, and alteracations directly involves an object. Functional Programming is also an idea that focuses on creating and using funcions + varibles to solve problems. 

OOP and FP are imperative and declartive program styles, respectively: imperative tells how something should be (templates), while declarative states what something should be (behavior).

From my experience, FP is stateless, once values are created they are not changing thereafter, however when updating attributes of an object we are capable to altering the intial values of an object as many time as we want, therfore OOP has state. 

When I have used FP's style of coding (Javascript), I was abstracting the ideas of the data by creating parameters in a function, and while adding the logic I was abstracting the behavior I wanted the function to preform on the data. On the other hand, When I have used OOP's style of coding (Ruby) , I was only able to abstract the data (of objects) by creating templates.













2. What is the difference between a Float and an Integer in Ruby?

Your answer: Integers are whole numbers, with no decimals. Floats are numbers that have decimals in them. Floats and Integers do not intermingle, they do not follow coecrcion, at least within Ruby. Ruby has a strict class coercion, so whenever we type an integer next to float there is an error. 

Researched answer:

Ruby like any other programming language has access to different types of data types: String, Integers, Nil, Floats, and Array to name a few. Ruby categories these data types into classes, where Nil would be repersented in a NilClass. Normally these data types are incapable to interact with each other, we can use string interpolation to fix this exception. This face can be used to create more dynamic pieces of code for devlopers. The structure appears as: " #{varible_name} "

Floats and Integers are two differing classes that are similar as they are numeric subclasses in Ruby. Integers are whole numbers that can be positive, negative, however they cannot have a decimal. Any Integer-related-computation that would result in a remainder will only produce in an incorrect Integer answer. Likewise, any operation with a Float that would be evaluated as a whole number will displayed as whole number with a decimal. Once a data type is classified as a Integer or Float they will remain the same, unless there is some persuasive methods that can alter their data type. 















3. Ruby has an implicit return. What does that mean?

Your answer: Implicit Return is when we have a function or method produce an output without telling the function or method to return the devloper anything. 

Researched answer: 
Implicit Return is an intresting feature that allows the devloper to receive a final output without telling the function or expression to return a single thing. Ruby is one of the program that has this feature, where the last line of a method will automatically return a value without a return keyword.

This idea is slightly different to Javascript's function, where a function needs to explicitly have a return to output a value. I have made the mistake before of forgetting a return keyword for a function, and that resulted in a undefined answer. This problem is nonexistent in Ruby, as aforementioned Ruby has acesss to implicit returns. 










4. What is a block in Ruby?

Your answer: Ruby blocks are anonymous functions that can be placed in methods.

Researched answer:
Ruby Blocks are essentially anonymous functions that can take in a value and return another value, it has no name, can take in arguements, and can be called in that same method. Blocks are enclosed in do and end keywords. 

An example of a Block is seen as:

count = 1
while count < 10
count = count + 1
p "Hi, World!!!"
end

The while-end pieces are condtionals that will end the loop until the conditions is satisfied (count is bigger than 10). As this while-end is looping we have the Block that is printing the words "Hi, World!!!". If we were to run this we would see "Hi, World!!!" 10 times or so













5. What is an instance variable in Ruby?

<!-- I don't remember... -->
Your answer: An instance varible starts with @ and this varible is limited to other things 

Researched answer:

The symbol to denote a instance varible is including a @ at the stare of the varible name. The instance varible is only avaliable through a specific pbject, and is usually not shared by any other classes; the instance varible is a exclusive value. Before intializing a instance varible they will have a value of nil, and the preset value of a instance varible is private. 






## Looking Ahead: Terms for Next Week

1. PostgreSQL:
Argueably one of the best opensource database, received 30 years of active devlopment. Highly renown management system for databases, it is used data storage for web, mobile, geopstial, and analytical apps. 

2. Ruby on Rails:
Rails is a web app devlopment framework bulit for Ruby; it makes web devlopment a little more simplier

3. ORM:
QRM stands for Quality Result Management, it is another management system that stores data and possibly analyze them.

4. Active Record:
Active Records is the layer that is between the database and app, it allows devlopers to structure models for the user; basically takes care of database work 

5. Migrations:
Migration tells Rails how the devloper wants to change a piece of the database. 
