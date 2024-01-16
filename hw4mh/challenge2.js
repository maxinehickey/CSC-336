var heightInputMark = document.querySelector(".height-input-field-mark"); //variables from the textfield
var heightInputJohn = document.querySelector(".height-input-field-john"); //variables from the textfield
var weightInputMark = document.querySelector(".weight-input-field-mark"); //variables from the textfield
var weightInputJohn = document.querySelector(".weight-input-field-john"); //variables from the textfield
var calculateButton = document.querySelector(".calculate");//variables from the button
var result = document.querySelector(".result"); //variables from the html
var statement = document.querySelector(".result-statement"); //variables from the html
var BMI, height, weight; // declaring the variables in the function below

calculateButton.addEventListener("click", ()=>{ // this is what happens when the button is clicked

    heightMark = heightInputMark.value; //changing the value to a variable
    weightMark = weightInputMark.value; //changing the value to a variable
    heightJohn = heightInputJohn.value; //changing the value to a variable
    weightJohn = weightInputJohn.value; //changing the value to a variable
    BMIMark = weightMark/(heightMark**2); //calculating the BMI
    BMIJohn = weightJohn/(heightJohn**2); //calculating the BMI

    if(BMIMark < BMIJohn){ //if else statement to determine how the results are printed
        statement.innerText = `Mark's BMI (${BMIJohn}) is lower than John's BMI (${BMIJohn})`;    
    }else if((BMIMark > BMIJohn)){
        statement.innerText = `Mark's BMI (${BMIJohn}) is higher than John's BMI (${BMIJohn})`;
    }else if((BMIMark = BMIJohn)){
        statement.innerText = "Mark and John have the same BMI";
    }else{
        return none
    }
});
