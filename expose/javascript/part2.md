-12.
A. student.name
B. student.major['Grad Year']
C. student.greeting()
D. student.greeting['Favorite Teacher'].name
E. student.courseLoud[0]

-13.
A. '3' + 2
'32'
Addition operator's default will concatenate a string and a number, so 2 will be converted to a string and then concatenated to the string '3', resuting in '32'.
B. '3' - 2
1
Because of type coercion, the subtraction operator will convert string to a number, perform that operation and return that number.
C. 3 + null
3
Null gets converted to 0 because the addition operator recognizes the 3 as a number and will perform addition and not contatenation, causing null to be converted to 0.
D. '3' + null
'3null'
Since we have '3' as a string, type coercion will concatenate '3' and null by turning null into a string form
E. true + 3
4
For addition, true gets converted to 1 as that is its representation, and since 3 is a number, addition will be performed here rather than the default concatenation
F. false + null
0
We are performing an addition operator, and since false converts to 0 here, null will also translate to 0 and 0+0=0.
G. '3' + undefined
'3undefined'
Undefined will convert to a string and both will be concatenated
H. '3' - undefined
NaN
Subtraction operator only works with numbers, so a string converts to not a number (NaN) and so does undefined, and NaN - NaN is NaN.
I. '2' > 1
true
'2' will convert to a number 2, and the > operator will perform, resulting in a boolean true value
J. '2' < '12'
false
Both strings will convert to a number and be compared with the < operator, resulting in 2 < 12 = false.
K. 2 == '2'
true
The equality operator converts the string '2' to a number and compares both numbers, resulting in a true
L. 2 === '2'
false
The identity operator is a strict check and does no conversions, resulting in a false since a number does not equal a string.
M. true == 2
false
true converts to 1 here, resulting in a equality comparison between the numbers 1 and 2 which is false.
N. true === Boolean(2)
true
Boolean(2) will result in a true since it falls under "truthy" values, and an equality comparison between true and true will result in true.

15. == and === are different because === is an identity operator, comparing the current data type AND value type to see if they equal eachother, and is a strict comparison this way with no type coercion conversions. The equality operator, ==, on the other hand, will convert data types and compare based on the value type conversion, and need not be a strict comparison of the same types. For example, null and 0 will return true since null will convert to 0. 

17. When we call modifyArray, we pass in an array as well as a function. Then modifyArray will iterate through our array parameter, invoking our second function parameter, and pushing the return value our doSomething(num) function to a local array in our modifyArray. Then we simply return our newArr array back to the caller. This function call within a function call multiplies every number in our array [1,2,3] by 2, storing that new value in newArr and finally returning [2,4,6].
-19.
1
4
3
2
