1. value added: 20
2. final result: 20
3. value added: 20
4. ReferenceError: result is not defined. Since the result is decledtion in let such that a blockoscoped local variable, it cannot be used after the if(). 
5. TypeError: Assignment to constant variable. Since the result is decledtion in const such that a constant variable, it cannot be change in line9 to equal the sum of num1 and num2.
6. If we did not comment the line6, it cannot run to line13. After comment the line9, the line13 still has the ReferenceError: result is not defined. Since the const variable result is constract inside the if() which is a blockoscoped local variable also, It cannot be used or call after the if(). 