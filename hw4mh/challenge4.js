var mealCost = document.querySelector(".input-field-steven"); //variables from the textfield
var calculateButton = document.querySelector(".calculateSure");  //variables from the button
var result = document.querySelector(".result"); //variables from the html
var statement = document.querySelector(".result-statement"); //variables from the html
var tip; // declaring the variable in the function below

calculateButton.addEventListener("click", ()=>{ // this is what happens when the button is clicked
    mealCostPreTip = mealCost.value; //changing the value to a variable
    
    if (mealCostPreTip <= 300 && mealCostPreTip >= 50){ //if else statement to determine how the results are printed
    tip = mealCostPreTip*.15;
    statement.innerText = `The tip for this meal is $${tip}`;
    }
    else {
        tip = mealCostPreTip*.20;
        statement.innerText = `The tip for this meal is $${tip}`;
    }
})