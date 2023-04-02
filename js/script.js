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
// console.log("Chapter# 24          Strings: Finding a character at a location");
// let text = `The New Yorker magazine doesn't allow the phrase World War II.`;
// console.log("Actual text ==== ", text);

// let firstChar = text.slice(0,1);
// console.log("Fisrt Char using Slice === ",firstChar);

// console.log("Fisrt Char using charAt(n) === ",text.charAt(0));

// console.log("To get LAst Char from String using charAt(n.length-1)");
// console.log("Last CHar is ==== ", text.charAt(text.length-1) );

// *****************************END CHAPTER 24*************************************

// *****************************CHAPTER 25*************************************
// CHapter 25:   Strings:         Replacing characters
// console.log("CHapter 25:   Strings:         Replacing characters");

// let text = `The New Yorker magazine doesn't allow the phrase World War II.`;
// console.log("Actual text ==== ", text);

//*********** Replacing characters: Using Slice method"
// console.log("Replacing characters: Using Slice method");
// let foundIndex = text.indexOf(`World War II`);
// console.log(`World War II ====== `, foundIndex);
// console.log(text.slice(0,foundIndex) + "the Second World War" + text.slice(foundIndex + "World War II".length));

// ******   Replacing characters: Using Replace method
// console.log("Replacing characters: Using Replace method");
// console.log(text.replace(`World War II`,`the Second World War`));

// ******   `Replacing characters: Replacing all MAtched String: Using Replace method === .replace(/String/g,"string that want")`
// console.log(`Replacing all MAtched String: Using Replace method === .replace(/str/g,"string that want")`);
// let newtext = `JavaScript is the programming language of the Web. JavaScript is easy to learn. This tutorial will teach you JavaScript from basic to advanced`;
// console.log("Actual text ==== ", newtext);
// console.log("OUtput === ", newtext.replace(/JavaScript/g,`JS`));

// *****************************END CHAPTER 25*************************************

// *****************************CHAPTER 26 *************************************
// CHapter 26:   Rounding numbers
console.log("CHapter 26:   Rounding numbers");
// console.log("Math.round()");
// console.log('2.0 ==== ',Math.round(2.0));
// console.log('2.1 ==== ',Math.round(2.1));
// console.log('2.45 ==== ',Math.round(2.45));
// console.log('2.5 ==== ',Math.round(2.5));
// console.log('2.7 ==== ',Math.round(2.7));
// console.log('-2.0 ==== ',Math.round(-2.0));
// console.log('-2.1 ==== ',Math.round(-2.1));
// console.log('-2.5 ==== ',Math.round(-2.5));
// console.log('-2.8 ==== ',Math.round(-2.8));

console.log("Math.ceil()");
console.log("Always goes forward");
console.log('2.0 ==== ',Math.ceil(2.0));
console.log('2.1 ==== ',Math.ceil(2.1));
console.log('2.5 ==== ',Math.ceil(2.5));
console.log('2.7 ==== ',Math.ceil(2.7));
console.log('-2.0 ==== ',Math.ceil(-2.0));
console.log('-2.1 ==== ',Math.ceil(-2.1));
console.log('-2.5 ==== ',Math.ceil(-2.5));
console.log('-2.8 ==== ',Math.ceil(-2.8));

console.log("Math.floor()");
console.log("Always goes backward");
console.log('2.0 ==== ',Math.floor(2.0));
console.log('2.1 ==== ',Math.floor(2.1));
console.log('2.5 ==== ',Math.floor(2.5));
console.log('2.7 ==== ',Math.floor(2.7));
console.log('-2.0 ==== ',Math.floor(-2.0));
console.log('-2.1 ==== ',Math.floor(-2.1));
console.log('-2.5 ==== ',Math.floor(-2.5));
console.log('-2.8 ==== ',Math.floor(-2.8));

console.log("Math.random()");
console.log("Random Values generated b/w ==== 0 to 1");
console.log('Random Value === ',Math.random());
console.log('Random Value === ',Math.random());
console.log('Random Value === ',Math.random());
console.log('Random Value === ',Math.random());

/////// FOr DIC
// Math.ceil for 0 < n < 6
console.log('FOr DIC === ');
console.log('Random Value b/w 0 to 6 === ',Math.ceil(Math.random()*5));

