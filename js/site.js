function getString(){
    document.getElementById("alert").classList.add("invisible");
    let userString = document.getElementById("userString").value;
    let rString = reverseString(userString);
    displayString(rString);
}

function reverseString(string){
    let rString = [];
    for(let index = string.length - 1; index >= 0; index--){
        rString += string[index];
    }
    return rString;
}

function displayString(rString){
    document.getElementById("msg").innerHTML = `Your string reversed is: ${rString}`;
    document.getElementById("alert").classList.remove("invisible");
}