//this is for reversing the word
let str = "dinesh budhathoki";
const reverseString = (str) => {
  return str.split(" ").reverse().join(" ");
};
console.log(reverseString(str));
