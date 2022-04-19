function palindrome(str) {
  str = str.toLowerCase().replace(/[\W_]/gm, "");
  let reverse = str.split("").reverse().join("");
  if (reverse === str) {
    return true;
  } else {
    return false;
  }
}
console.log(palindrome("Somos"));
