// STEP 1: Open this page in a browser tab and open up the console
// STEP 2: Build an HTML element above to contain the value of the var i (the counter inside the loop)
var p = document.querySelector("p");
for (let i = 10; i >= 0; i--) {
    setTimeout(function () {
        console.log(i);
        // STEP 3: Add a condition with an IF statement that checks if countDown is zero - and if it is, output text to the HTML element above that reads, "Blastoff!"
        if (i === 0) {
            p.textContent = "BLASTOFF!!";
        } else {
            p.textContent = i;
        }
        // STEP 4: Change the background color of the page from yellow (from 8-5) , 
        // to orange (from 4-1), to red (at 0) using a SWITCH statement
        switch (i) {
            case 8:
                document.body.style.backgroundColor = "yellow";
                break;
            case 4:
                document.body.style.backgroundColor = "orange";
                break;
            case 0:
                document.body.style.backgroundColor = "red";
        }
    }, 10000 - 1000 * i);
}