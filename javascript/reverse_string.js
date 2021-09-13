function reverseString(str) {
  //make new string
  let newStr="";
  //create for loop -beginning of loop will be last character of string, str.length-1.
  //loop goes as along as i>=0.
  //decrement after each iteration
  for(let i=str.length-1;i>=0;i--){
    newStr += str[i]; //or newStr=newStr+str[i]
  }
  return newStr;

}

if (require.main === module) {
  // add your own tests in here
  console.log("Expecting: 'cba'")
  console.log("=>", reverseString("abc"))

  console.log("Expecting: 'ih'");
  console.log("=>", reverseString("hi"));

  console.log("");

  console.log("Expecting: 'ybabtac'");
  console.log("=>", reverseString("catbaby"));
}

module.exports = reverseString;

// Please add your pseudocode to this file
// Inputs a string, outputs the string with characters in reverse order.

// And a written explanation of your solution
