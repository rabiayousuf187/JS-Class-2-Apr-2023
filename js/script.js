// Reivew: Chapter# 24          Strings: Finding a character at a location
// Chapter# 24          Strings: Finding a character at a location

// console.log(`Chapter#23 , Strings:  Finding segments`);
// let text = `The New Yorker magazine doesn't allow the phrase "World War II. "`;
// console.log("Actual text ==== ", text);
// for (var i = 0; i < text.length; i++) {
//     if (text.slice(i, i + 12) === "World War II") {
//     text = text.slice(0, i) + "the Second World War" + text.slice(i + 12);
//     }
// }
// console.log("Updated text ==== ", text);
    
// IndexOf & lastIndexOf

// let text = "To be or not to be.";
// console.log("Actual text ==== ", text, text.length);

// let segIndexOF = text.indexOf("be");
// console.log("be ==== ", segIndexOF, );

// let segLastIndexOf = text.lastIndexOf("be");
// console.log("be ==== ", segLastIndexOf);

//////////////////////////////////////////////////////////////////

// Chapter# 24          Strings: Finding a character at a location
console.log("Chapter# 24          Strings: Finding a character at a location");
let text = `The New Yorker magazine doesn't allow the phrase World War II.`;
console.log("Actual text ==== ", text);

let firstChar = text.slice(0,1);
console.log("Fisrt Char using Slice === ",firstChar);

console.log("Fisrt Char using charAt(n) === ",text.charAt(0));

console.log("To get LAst Char from String using charAt(n.length-1)", text.charAt(text.length-1) );