1. It will print 3 by i run in the for loop until the prices.length. The prices.length by [100,200, 300] is 3. Since the i inside the loop is var variable, it could be used after the loop. 
2. It will print 150 since the discountedPrice is also var variable that could be used after the for-loop. The discountedPrice is 300*(0.5). After the loop. the discountPrice will update by the last data in prices. 
3. It will print 150. It could return the last data of the variable since it is var and construct in the whole function. The last discountPrice is 150, the last finalPrice will be 150 also after the math round. 
4. The function will return an array including all the discounted prices by the prices in the array with a discount rate. The return array looks like [50. 100. 150].
5. It will give ReferenceError: i is not defined. Since the i is defined as a let variable, it cannot be used after the for loop anymore. 
6. As similar to the Q5, it will give ReferenceError: discountedPrice is not defined since the let variable cannot be used after the for loop.  
7. It will print the 150 as the Q3 since the finalPrice is constructed before the for loop. The finalPrice is also a let variable but block-scoped for the whole function. 
8. The return array is as same as the Q4 for [50. 100. 150]. Since the i and discountedPrice will not be used after the for loop and discountedPrice is stored in the array inside the for-loop. let variable will not affect the result as long as the discounted array does not construct inside the for-loop. 
9. It will give a ReferenceError: i is not defined. Similar to Q5, i construct as a let variable in for loop block-scoped. It cannot be used after the loop. 
10. It will print the 3 as the length of prices. Since the length is contract initial as prices.length in whole function block-scoped, it could be used after the for loop and set as 3 always.  
11. The function will return the same array as before like [50, 100, 150]. The let and const variable change des?????????
12. 
    1.  a:student.name  
    2.  b:student['Grad Year']  
    3.  c:student.greeting();   
    4.  d:student['Favorite Teacher'].name  
    5.  e:student.courseLoad[0]
13. 
    1.  A: 32 since the integers map to their exact string representation
    2.  B: 1 since the '3' converted to number 3. 
    3.  C: 3 since the null is 0 in the numeric conversion rules when used - operator
    4.  D: 3null since the null converted to an exact string representation
    5.  E: 4 since the true is 1 in the numeric conversion rules
    6.  F: 0 since false and null are both 0 in Conv rules
    7.  G: 3undefined since the undefined converted to an exact string representation 
    8.  H: NaN since the undefined is NaN in numeric conversion rules when used - operator
14. 
    1. true since the '2' becomes a number 2
    2. false since the '2' letter is less than the first letter '1' in '12. 
    3. true since the '2' becomes a number 2. 
    4. false since the === is the strict quality operator that checks the quality without type conversion. 
    5. false since the true is 1 in the boolean conversion. 
    6. true since the boolean(2) is true in the boolean by conversion before comparison. 
15. The === is a strict quality operator that compares the quality without type conversion. Then, each variable cannot use any string, numeric, or boolean conversion in the comparison. As the 14.D, it will be false. However, the boolean(2) in 14.F is conversion before comparing which the variable is boolean already. They are compared with true and true which is true as result. 
16. Show in the part2-question16.js
17. The result will be [2, 4, 6]. The doSomething is a function that could multiply the variable by 2. Since we call the modifyArray with the function doSomething. The modified array will construct a new array to store the data getting by doSomething for each data in the array. Therefore, they will multiply each data by 2 and return. 
18. Show in the part2-question18.js
19. The output will be 1 4 3 2 in a separate line. The output 1 4 3 is quick but the output 2 is slow since 3 and 2 set the time out after 1000 and 0 millisecond. 