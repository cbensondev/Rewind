//get values from page
//Controller Function
function getValue(){

    document.getElementById("alert").classList.add("invisible");
    let userString = document.getElementById("userString").value;
    let revString = reverseString(userString);
    displayString(revString);

}

//Reverse the string
//Logic Function
function reverseString(userString){

    let revString = [];

    //reverse a string using a for loop
    for (let i = userString.length-1; i >= 0; i--) {
        revString += userString[i];
    }
    return revString;

}

//Display the message
//View Function
function displayString(userString){

    //write to the page
    document.getElementById("message").innerHTML = `Your String Reversed is: ${userString}`
    //show the alert box
    document.getElementById("alert").classList.remove("invisible");

}

//Clear the message pane and hide the alert
function clearDisplay(){
    document.getElementById("message").innerHTML = "";
    document.getElementById("alert").classList.add("invisible");
}