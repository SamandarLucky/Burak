//============================================================
                                    // MITASK S

function missingNumber(arr: number[]): number {
    for (let i = 0; i <= arr.length; i++) {
        if (!arr.includes(i)) {
            return i;
        }
    }
    return -1;
}

console.log(missingNumber([3, 0, 2, 1]));   // bu array ichidagi birinchi missing sonni return qiladi 
console.log(missingNumber([3, 0, 1])); 

//============================================================
/* VALIDATIONS

Frontend validation: Pipe validation
Backend validation
Database validation


*/
//============================================================
                                    // MITASK R

// function calculate(str: string): number {
//     return eval(str);
// }

// console.log(calculate("1 + 3")); 
// console.log(calculate("10 - 3"));
// console.log(calculate("5 * 4")); 
// console.log(calculate("20 / 5")); 


//============================================================
                                    // MITASK Q
// function hasProperty(obj: object, property: string): boolean {
//     return obj.hasOwnProperty(property);
// }

// console.log(hasProperty({ name: "BMW" }, "name")); 
// console.log(hasProperty({ name: "Sam" }, "ismi"));

//============================================================

/*
Traditional API
Rest API
GraphQL API


Traditional Fronted Development  => BSSR => EJS framework
Modern Frontend Development => SPA => REACT 
*/

//============================================================
                                        // MITASK P


// function objectToArray(obj: any): any[] {
//     return Object.entries(obj);       
// }

// console.log(objectToArray({ a: 1, b: 20 }));

//============================================================
                                                    //MITASK O
// function calculateSumOfNumbers(arr: any[]): number {
//     let sum = 0;

//     for (let i = 0; i < arr.length; i++) {
//         if (typeof arr[i] === "number") {
//             sum += arr[i];
//         }
//     }

//     return sum;
// }

// console.log(
//     calculateSumOfNumbers([10, "10", { son: 10 }, true, 35, 'Sam10', 1])
// );                      //num. str.   obj.      boolean  num.

//============================================================

/* Project Standarts:
    - Logging standarts
    - Naming Standarts
        (function, method, variable) => CAMEL Case              goHome
        (class => PASCAL Case)                                  MemberService
        (folder => KEBAB Case)
        (CSS => SNAKE Case)                                     button_style

    - Error handling

    Traditional API 
    Rest API
    GraphQL API
*/
//============================================================
                                                    // MITASK M

// function palindromCheck(str: string): boolean {
//     const reversed: string = str.split("").reverse().join("");

//     return str === reversed;
// }

// console.log(palindromCheck("mom"));   
// console.log(palindromCheck("hello")); 
// console.log(palindromCheck("level")); 

//============================================================
                                                    // MITASK M


// function getSquareNumbers(arr: number[]) {
//     return arr.map(number => ({
//         number,
//         square: number * number
//     }));
// }

// console.log(getSquareNumbers([3, 2, 6]));
// console.log(getSquareNumbers([-3, -2, 0]));

//============================================================
                                                    //MITASK K


// function reverseSentence(sentence: string): string {
//     return sentence
//         .split(" ")
//         .map(word => word.split("").reverse().join(""))
//         .join(" ");
// }

// console.log(reverseSentence("we like coding!"));
// console.log(reverseSentence("My name is Sam, currently I am working in B2C"));
// console.log(reverseSentence("HEH"));
// console.log("Hello World!");