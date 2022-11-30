// logic for display output given user 
var outputscreen = document.getElementById('display-screen');    // stores input id in js-variable
function inputDisplay(values) {
    outputscreen.value += values;                                //a+=b a=a+b                      
    outputscreen.style.color="black";
}


// logic for all clear
function AC() {
    outputscreen.value = " ";
}


//logic for backspace
function Del() {
    outputscreen.value = outputscreen.value.slice(0, -1);
}


// logic for calculation
function calculate() {
    try {
        outputscreen.value = eval(outputscreen.value);
    } catch (error) {
        outputscreen.style.color="red";
        outputscreen.style.fontSize='35px';
        outputscreen.value = "Erorr"; 
                                                         
    }
}





