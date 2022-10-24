1. value added: 20
2. final result: 20
3. value added: 20
4. ReferenceError: the result is not defined. Since the result is constructed in let such that a block-scoped local variable, it cannot be used after the if(). 
5. TypeError: Assignment to constant variable. Since the result is constructed in const such that a constant variable, cannot be changed in line9 to equal the sum of num1 and num2.
6. If we did not comment the line6, it cannot run to line13. After commenting on line9, line13 still has the ReferenceError: result is not defined. Since the const variable result is constructed inside the if() which is a block-scoped local variable also, It cannot be used or called after the if(). 