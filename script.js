let output_string = document.getElementById("output");
let input_string = prompt();
let myFunction = (rev) => {
  string_rev = "";
  for (i = input_string.length - 1; i >= 0; i--) {
    let char = rev[i];
    string_rev += char;
  }
  return string_rev;
};
let string = myFunction(input_string);
document.getElementById("output").innerHTML = string;
