# This Readme is for back to past task
# The task will be describe below
# IVAN IS 18 YEARS OLD AND RECEIVES AN INHERITANCE THAT CONSISTS OF X AMOUNT OF MONEY AND A TIME MACHINE. HE DECIDES TO RETURN TO1800,BUT DOES NOTKNOW IF THE MONEY WILL BE ENOUGH TO LIVE WITHOUT WORKING. WRITE A PROGRAM THAT CALCULATES IF IVAN WILLHAVEENOUGHMONEYTONOT HAVETO WORK UNTIL A PARTICULAR YEAR(INCLUSIVE). ASSUMING THAT FOR EVERY EVEN(1800,1802,ETC.) YEAR HE WILL SPEND 12000 DOLLARS.FOR EVERY ODD ONE(1801, 1803,ETC.) HE WILL SPEND 12000+50 * [THE AGE HE WILL HAVE REACHED IN THE GIVEN YEAR].

# INPUT DATA
#
# The input is read from the console andcontains exactly 2 lines:
#  Inherited money–a real number in the range [1.00 … 1 000 000.00].
#  Year, until which he has to live in the past (inclusive)–integer number in the range [1801 … 1900].

# OUTPUT DATA
#
# Printon the console1 line. The sum must be formatted up to the two symbols after the decimal point:
#  If money is enough:   "Yes! He will live a carefree life and will have {N} dollars left."–where N is the money that will remain.
#  If money is NOT enough:   "He will need {М} dollars to survive."–where M is the sum that is NOT enough.


# SOLUTION TO PROBLEM
#
#

# PART 1 -MODEL A Solution
#
#

# Starting year = S
# Remaining money at the nth year = Rn
# Remaining money = R
# Ending year = E
# Total money in account = T
# Age of individual at the starting year = A
# The diffraction of each odd year from the starting year = Y
# Money that will be spent in even years = Ms
# Money that will be spent in odd years = Ms + (50* (A+Y)).

# Example: calculate money remaining after 4 years and the year starting is even
# Solution
# Use this sequential approach

# If the starting year is even then our R for a five-year model will be explained below
#
Year 1 = Ms
Year 2 = Ms + (50*(A+1))
Year 3 = Ms
Year 4 = Ms + (50*(A+3))
Year 5 = Ms
R =  T - [Ms + Ms + (50*(A+1)) + Ms + Ms + (50*(A+3)) + Ms]

# Therefore
# R = T - [5Ms + (50*(A+1)) + (50*(A+3))]

# Note: This is the pattern of the solution you can also refer to below
# R = T - [even(starting year) + (odd) + even + (odd) + even + (odd)+....+nth(ending year)].

# Your difference equation model must follow this above pattern to discover the nth term of R


# Example: if the Total money in the account (T) is 50000 and the amount of money to spend for an even year (Ms) is 12000. What will be the value of the money if the student's age (A) is 18 and the starting year (S) is 1800 and the ending year (E) is 1802

# solution
#
#
Year 1 = 12000 = Even year
Year 2 = 12000 + (50*(18 + 1)) = 12000 + 950 = Odd year
Year 3 = 12000 = Even year

R = 50000 - [12000+(12000+950)+12000]
R = 13050



# Design the model to determine the amount of the money remaining at nth year Rn for an even starting year...

# Based on each of the sequential approaches above, design the dynamical model system to determine the amount of money remaining at nth year Rn...

# Note:

# 1. You are to use the basis of the above sequential equation to determine the amount of money to remain at the nth year Rn, you are not to make it the correct answer...It is to give you a headway to what you are to do
# 2. Remember that this model is to forecast and predict the correct formula for Rn and that we don't need R as a final solution. R is to help us derive a final formula for Rn.
# 3. Never return Rn in this sequential equation but in a dynamical system equation. It will be good if you can return with a difference equation model as well.
# 4. Some principles like finding the nth of a sequence, recurrence equation, the sum of an nth of an equation etc can be of help
# 5. Ms in an even year is the same as Ms in an odd year.
# 6. Ms is constant for all the years and the variation in A is Y(that is, the addition of Y and A will give the present age of the individual)
# 7. The dynamic and difference equation must take into cognizant to start calculation from the starting year just as in the examples above
# 8. That the money spent in even years is not the same as that of the money spent in an odd year whereas we spend just Ms in an even year and [Ms + (50 * (A + Y))]. This implies that more will be spent in an odd year than in an even year.
# 9. The model is to start calculating from the starting year up until the ending year.
# 10. This dynamic equation should be able to solve for any nth year given by the users.
# 11. Use the flow pattern of the two examples above to make sure all parameters are dealt with and are involved in generating our dynamic solution or equation for the amount of money remaining at the nth year Rn. That is you are not to skip any or use less of any.



# PART 2 -WRITE THE PROGRAM BASED ON THE GIVEN MODEL
#
#

# Programming Input instruction
#
#

# You are to create an HTML input that will be based on the below
# The two inputs are to be of the type number
# The first input is for money with a range of 1 to 1000000. This money entered by the user will be the total money, T
# The second input is for the year with a range from 1800 to 2030. The year inputted by the user will be the ending year, E

# You are to write a Javascript class which takes the two inputs from the HTML as user input.
# The class is to calculate the total amount of money the user is going to spend for each year from the starting year 1800 to the Ending year which is the year entered by the user.
# The class will make sure that it started its calculation from 1800 up to the year the user enters in the HTML year input which will serve as the ending year of E

# Important instruction
#

# i. All the variables should discreetly be declared
# ii. During the outputting of the final result, Rn should either be D or it should be G as below
D = Rn
or
G = Rn
# This implies that none of these two variables will have its very own value but the value of Rn, depending on whether Rn is positive or Rn is negative

# iii. The program is not to set any parameters to 0 because all parameters not given will be calculated based on the instructions of the user

# iv. The program is to check the user's inputted year and checks the total number of even years from 1800 to it and with the inclusion of 1800 which is the starting year and sets it to "Ne".

# v. the program is to check the user's inputted year and checks the total number of odd years from 1800 to the ending year and set it to "No"
Note:
# If "ceil" or "floor" is to be used "Ne" will be the ceil while "No" will be the floor

# vi. You are to create both the HTML inputs and the JS

# The program should be able to logically decipher all parameters to get the correct output


# Important Parameters
#

# Below are the parameters for the calculation:
# Starting year = S
# Users' age at starting year = A
# Remaining money at the nth year = Rn
# Ending year = E
# Total money = T
# Debt value = D
# Good kid = G
# Total money to spend in even years = Te
# Total money to spend in even years = To
# Money that can be spent in even years = 12000
# The total number of even years from the starting year to the ending year = Ne
# The total number of odd years from the starting year to the ending year = No

# Note:

# Both "Ne" and "No" can not take definite values except those calculated based on the user ending year E and the constant starting year S

# To calculate "Ne" the starting year should be inclusive


# This is a brief pattern of the solution you can also refer to below

# Rn = T - [even(starting year) + (odd) + even + (odd) + even + (odd)+....+nth(ending year)].

# This is the formula for solving for the amount of money that will be left after the nth year below with all parameters descriptively explained above;

# Rn = T - [(Ne * Ms) + (No * Ms) + ((50 * No) * (No * A + No ** 2))]

# Te = Ne * Ms

# To =  (No * Ms) + ((50 * No) * ((No * A )+ (No ** 2))

# Therefore,
Rn = T - [Te + To]

# Output instructions
#

# There are either two outputs expected after the user's inputs have been calculated. Print on the console line. The sum must be formatted up to the two decimal points

# i. If the money will be enough then Rn will be positive:
where Rn is the money that will remain after the nth year. Therefore the Rn value is positive. If Rn is positive then Rn is equal to G. Console to the log G value as below: "Yes! He will live a carefree life and will have {G} dollars left."

# ii. If money is NOT enough then Rn will be negative:
where Rn is the sum 
that he will be remaining after the nth year. Therefore the Rn value is negative. If Rn is negative then Rn is equal to D. Console to the log D value as below: "He will need {D} dollars to survive."

# Note: if you are console logging D the negative sign must not be included
