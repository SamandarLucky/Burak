//============================================================
                                                    //MITASK O
function calculateSumOfNumbers(arr: any[]): number {
    let sum = 0;

    for (let i = 0; i < arr.length; i++) {
        if (typeof arr[i] === "number") {
            sum += arr[i];
        }
    }

    return sum;
}

console.log(
    calculateSumOfNumbers([10, "10", { son: 10 }, true, 35, 'Sam10', 1])
);                      //num. str.   obj.      boolean  num.

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