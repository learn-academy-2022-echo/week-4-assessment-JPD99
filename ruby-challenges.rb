# ASSESSMENT 4: Ruby Coding Practical Questions
# MINASWAN ✌️

# --------------------1) Create a method that takes in a number and determines if the number is even or odd. Use the test variables provided.
num1 = 7
# Expected output: '7 is odd'
num2 = 42
# Expected output: '42 is even'
num3 = 221
# Expected output: '221 is odd'

# PsuedoCode
# Creating a method in Ruby requires the keywords: def, and end
    # Method name is odd_and_even
# We are setting conditionals in our method to determine if a number is even or even
    #  logic uses %
    #  if, elsif, else
        #  if - else code block requires a end 
    # p -> prints string ; putsc -> prints all characters ; puts -> skips to next line and prints 
    # == is the equality operator
# Using String Interpolation (" #{varible_name} ") 
# Accepting an arguement whose data type is a number
# Returning a String Interpolation as a return




def odd_and_even numbers
    if numbers % 2 == 0 
        p "#{numbers} is even"
    elsif numbers % 2 != 0 
        p "#{numbers} is odd"
    end
end




# odd_and_even  (num1)
# # Output: "7 is odd"
# odd_and_even  (num2)
# # Output: "42 is even"
# odd_and_even  (num3)
# # Output: "221 is odd"



# -------------------2) Create a method that takes in a string and removes all the vowels from the string. Use the test variables provided. 
# HINT: Check out this resource: https://ruby-doc.org/core-2.6/String.html#method-i-delete

beatles_album1 = 'Rubber Soul'
# Expected output: 'Rbbr Sl'
beatles_album2 = 'Sgt Pepper'
# Expected output: 'Sgt Pppr'
beatles_album3 = 'Abbey Road'
# Expected output: 'bby Rd'

# PsuedoCode
# Creating a method in Ruby requires the keywords: def, and end
    # Method name is anti_vowels
# We are using conditionals to inform the method to cut off the vowels of a string
    # instead of referencing each letter indivdually, we will use a .select method to iterate through the string 
        # .select is the ruby form of a javascript .filter() => {}
            # syntax array.select do |parameter|
                # .select requires its own end
        # When we are using a .select method, we output an array
            # To fix this we will use the .join("") method to conjoin all the elements in the array to a string
# Input is a string
# Output is a shorter / modified string



# .select is not working... 
# in `anti_vowels': private method `select' called for "Rubber Soul":String (NoMethodError)
# ****** ... .select only works on arrays, ranges, and hashes *******
# took a little too long to figure that out :\



# Not Very Dynamic... 
def anti_vowels strings
# turning string to array for .select method to work properly
    strings.split("").select do |no_vowels_allowed|
# .select only allows things in its new array if the boolean is true; Here we are rejecting the letters, so we are doing the inverse of .select orginal intent 
no_vowels_allowed != "a" && no_vowels_allowed != "e" && no_vowels_allowed != "i" && no_vowels_allowed != "o" && no_vowels_allowed != "u" && no_vowels_allowed != "A" && no_vowels_allowed != "E" && no_vowels_allowed != "I" && no_vowels_allowed != "O" && no_vowels_allowed != "U"

    end 
end

# p anti_vowels(beatles_album1).join("")
# # Outputs: "Rbbr Sl"
# p anti_vowels(beatles_album2).join("")
# # Outputs: "Sgt Pppr"
# p anti_vowels(beatles_album3).join("")
# # Outputs: "bby Rd"

# Theres an array class method called .delete() where it removes the elements of an array; that will refactor code a little bit smaller





# -------------------3) Create a method that takes in a string and checks if the string is a palindrome. A palindrome is the same word spelled forward or backward. Use the test variables provided.

palindrome_tester1 = 'Racecar'
# Expected output: 'Racecar is a palindrome'
palindrome_tester2 = 'LEARN'
# Expected output: 'LEARN is not a palindrome'
palindrome_tester3 = 'Rotator'
# Expected output: 'Rotator is a palindrome'

# PseudoCode:
# Declare a fucntion called palindrome_finder
# Input is a string 
# Output is also a string; that uses string interpolation
    # With string interpolation we are using " #{varible_name} " , use snake_case notation
# Since we are calling things as what they are and not, we need a conditionals: if, elsif, else 
# Equality Operator is very strict, so it wont be able to recognize uppercase and lowercase are the same
    # use method .upcase ot .downcase 
# Logic a palindrome is a word that is the same backwards and forwards, so just check if the orginal spelling of the word is identical to the reverse version
    # use .reverse method 
# We can chain methods together to make it look more condense, but might not look as pretty 


def palindrome_finder word
    if word.reverse.downcase == word.downcase
        p "#{word} is a palindrome"
    else 
        p"#{word} is not a palindrome"
    end
end

# palindrome_finder(palindrome_tester1)
# # Outputs: "Racecar is a palindrome"
# palindrome_finder(palindrome_tester2)
# # Outputs: "LEARN is not a palindrome"
# palindrome_finder(palindrome_tester3)
# # Outputs: "Rotator is a palindrome"


