1. It will print 3 by the i run in the for loop until the prices.length. The prices.length by [100,200, 300] is 3. Since the i inside the loop is var variable, it could be used after the loop. 
2. It will print 150 since the discountedPrice is also var variable could used after the for loop. The discountedPrice is the 300*(0.5). After the loop. the discountPrice will update by the last data in prices. 
3. It will print 150. It could return the last data of the variable since it is var and constuct in whole function. The last discountPrice is 150, the last finalPrice will be 150 also after the math round. 
4. The function will return a array including all the discounted price by the prices in array with discountrate. The return array looks like [50. 100. 150].
5. It will given ReferenceError: i is not defined. Since the i is defined as a let variable, it cannot be used after the for loop anymore. 
6. As similar to the Q5, it will given ReferenceError: discountedPrice is not defined since the let variable cannot used after the for loop.  
7. It will print the 150 as the Q3 since the finalPrice is construct before the for loop. The finalPrice is also let variable but blocj-scoped for whole function. 
8. The return array is as same as the Q4 for [50. 100. 150]. Since the i and discountedPrice will not be used after the for loop and discountedPrice is stored in the array inside the forloop. let variable will not effect the result as long as the discounted array does not construct inside the for loop. 
9. It will given a ReferenceError: i is not defined. As similar to Q5, the i constuct as a let variable in for loop block-scoped. It cannot be used after the loop. 
10. It will print the 3 as the length of prices. Since the length is constract initial as prices.length in whole function blocj-scoped, it could be used after the for loop and set as 3 always.  
11. The function will return the same array as before like [50, 100, 150]. The let and const variable change des?????????
12. 
    1.  a:student.name  
    2.  b:student['Grad Year']  
    3.  c:student.greeting();   
    4.  d:student['Favorite Teacher'].name  
    5.  e:student.courseLoad[0]
13. When is numer/string conver?????????
    1.  A: 32 since the integers map to there exact string representation
    2.  B: 1 since the '3' converted to number 3. 
    3.  C: 3 since the null is 0 in the numeric conversion rules when used - operator
    4.  D: 3null since the null converted to exact string representation
    5.  E: 4 since the true is 1 in the numeric conversion rules
    6.  F: 0 since false and null are both 0 in conv rules
    7.  G: 3undefined since the underfined converted to exact string representation 
    8.  H: NaN since the undefinded is NaN in numberic conversion rules when used - operator
14. 
    1. true since the the '2' becomes a number 2
    2. false since the '2' letter is less than the first letter '1' in '12. 
    3. true since the '2' becomes a number 2. 
    4. false since the === is the stric quality operator checks the quality without type conversion. 
    5. false since the true is 1 in the boolean conversion. 
    6. true since the boolean(2) is true in boolean by coversion before compare. 
15. The === is a stric quality operator that compare the quality without type conversion. Then, each variable cannot used any string, numeric, or boolean conversion in the compare. As the 14.D, it will be false. However, the boolean(2) in 14.F is conversion before compare which the variable is boolean already. They are compare with true and true which is true as result. 
16. Show in the part2-question16.js
17. The result will be [2, 4, 6]. The doSomething is a function that could mutiple the variable by 2. Since we call the modifyArray with the function doSomething. The modifyArrat will constract a new array to stored the data geting by doSomething for each data in array. Therefore, they will mutipl each data to 2 and return. 
18. Show in the part2-question18.js
19. The output will be 4 3 2 in sepearate line.