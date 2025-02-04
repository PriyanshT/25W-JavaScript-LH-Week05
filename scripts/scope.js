// STEP 1: Declare and initialize a global variable (x = 1)
var x = 1;

// STEP 2: Build a function that accepts no parameters, and also declares and intializes a variable within it (y = 2)
function fun1() {
    var y = 2;
    output(x);
    output(y);
    output(z);
}

// STEP 3: Build another function that also accepts no parameters, and also declares and intializes a variable within it (z = 3)
function fun2() {
    var z = 3;
    output(z);
}

/* STEP 4: Analyze the following function that accepts a value, 
   then creates an H2 element, injects it into the DOM, then sets the content 
   to the value of the parameter passed into it when in was called (invoked) */
function output(value) {
    var elem = document.createElement('h2'); // <h2></h2>
    document.body.appendChild(elem);
    elem.textContent = 'Value of variable is ' + value; // <h2>Value of variable is value</h2>
}
/* STEP 5: Punch the following directly into the console:
output(x)
What was the result?

output(y)
output(z)
What was the result?
*/
// STEP 6a: Add output(y); as a line inside function a(), and 
//output(z) inside function b(), and reload the page in your browser
/* STEP 6b: Type the following directly into the console:
a()
b()
What was the result?
*/
/* STEP 6b: Swap the calls output(y); and output(z); around 
between the functions a() and b() in the above script, 
reload the page in your browser, 
then type the following again into your console:
a()
b()
What was the result?
Note that variables inside functions are only available 
inside those functions, where variables inside the 
main part of the script are globally accessible
*/

{
    var abc = 100;
    let xyz = 200;
}

/* STEP 7: Calling functions within functions
Bear in mind that you can call a function from within another 
function at any time, from anywhere in your script */
// STEP 7a: Build a primary function that declares and initializes a variable, then calls up a subfunction
function mainFun() {
    var value = 500;
    subFun(value);
}

// STEP 7b: Create a sub-function that logs the value of myValue to the console
function subFun(myValue) {
    console.log(myValue);
}

// STEP 7c: Call up mainFunction() in your console directly after refreshing the page in the browser
// STEP 7d: The subfunction cannot access myValue - so pass myValue as a parameter into subFunction(), and update the function to accept the parameter, renaming it simply, 'value' - update the console.log() method as well, then reload the page and enter mainFunction() again in the browser
// Next, open up custom.html and we will look at how the accessibility of variables depends on where they are defined/initialized.
// This page inspired by and adapted from https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/Functions