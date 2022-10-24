Part 1 
1. 20
2. 20
3. 20
4. Error: Uncaught ReferenceError: result is not defined. the let keyword gives variables block scope, meaning they are only accessible in the block they're declared in. Since we try to access this variable outside of the function it was declared and defined in, this results in an error returned.
5. Code returns an error due to the fact that const variables cannot be reassigned, and we have attemped to reassign this variable when performing the addition to it in the next line, resulting in a TypeError.
6. Returns an error due to the fact that const variables have a block scope, meaning they cannot be accessed outside of the function they were declared in. This is why we get an error since this line tries to access it outside of the function it was declared in. 

**Part 2: A Little More of a Challenge**

1. Line 12 prints variable i (var) to the console, and since the for loop above declares this variable starting from 0 to the length of the prices array, the loop terminates once var i is less than 3. Once i increments to 3, that condition is false and will print 3. Line 12 does not cause an error since var variables are accessible anywhere in the function scope, which includes outside of the for loop.
2. The last element in the prices array is 300, so entering the for loop, discountedPrice is created again and set to 150 since 300 * (1-1/2) = 150. At the end of the loop, the value 150 is printed at line 13 and does not cause an error since var variables are accessible anywhere within the scope of the function. 
3. Line 14 will print 150 because since discountedPrice is 150 in this last loop iteration, we multiply and divide by 100 which gives us 150. var variables can be reassigned and accessed anywhere within the scope of the function, so there is no error returned. 
4. This function will return an array consisting of [50,100,150] after the computations are performed inside the for loop. At each iteration, the value is pushed into this array, and returned after the loop finishes execution. 
5. Line 12 causes an error because our variable i is of type let, which only has a block scope, meaning since it was declared inside of the for loop, it is only accessible inside the loop. Trying to access it outside will throw a ReferenceError, saying i is not defined.
6. Line 13 causes an error because our variable discountedPrice is of type let, which only has a block scope, meaning since it was declared inside of the for loop, it is only accessible inside the loop. Trying to access it outside will throw a ReferenceError, saying discountedPrice is not defined.
7. The function prints 150, since finalPrice is declared inside the function, its block scope is within this function so printing the value of finalPrice within this function will produce no errors as it is able to be accessed. 
8. This function will return the values that were added to the discount array, and cause no errors since outside of the function scope we do not try to access this variable discount, just assign its content to another variable (or in our case no variable)
9. since variable i is of type let, it only has a block scope which means it can only be accessed within the for loop where it was declared otherwise there will be a ReferenceError.
10. Line 12 will print the length variable which was declared inside the function with prices.length which is 3. It will not cause an error because this value was not ever modified, and was printed within the block scope of this variable.
11. This function will return an array with values [50,100,150]. It could not cause an error because even though this is a const array, as long as we dont reassign discount to a different variable, then we are still able to reassign its elements. We are still able to reassign the elements of a constant array, thus yielding no errors. 