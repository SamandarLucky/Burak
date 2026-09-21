//============================================================
                                                    //MITASK K


function reverseSentence(sentence: string): string {
    return sentence
        .split(" ")
        .map(word => word.split("").reverse().join(""))
        .join(" ");
}

console.log(reverseSentence("we like coding!"));
console.log(reverseSentence("My name is Sam, currently I am working in B2C"));
console.log(reverseSentence("HEH"));
// console.log("Hello World!");