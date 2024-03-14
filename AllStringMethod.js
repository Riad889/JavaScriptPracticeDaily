let x="Hello Buddy";
console.log(x.length); // print the length;

let char=x.charAt(4);
console.log(char); // print the character in that position

let charCode=x.charCodeAt(0);
console.log(charCode); //print the The method returns a UTF-16 code (an integer between 0 and 65535).

let charLetter=x.at(3);
console.log(charLetter); // print the letter in that position

let str="HelloBrotherHowAreYou";
let slicePart=str.slice(-13,-5);//therHowA
console.log(slicePart);//therHowA

let subString=str.substring(3,6);
console.log(subString); // loB

let subLength=str.substr(3,9);//loBrother
console.log(subLength);

