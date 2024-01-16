var pandas1 = document.querySelector(".input-field-pandas1"); //variables from the textfield
var pandas2 = document.querySelector(".input-field-pandas2"); //variables from the textfield
var pandas3 = document.querySelector(".input-field-pandas3"); //variables from the textfield
var koalas1 = document.querySelector(".input-field-koalas1"); //variables from the textfield
var koalas2 = document.querySelector(".input-field-koalas2"); //variables from the textfield
var koalas3 = document.querySelector(".input-field-koalas3"); //variables from the textfield
var calculateButton = document.querySelector(".calculateYay"); //variables from the button
var result = document.querySelector(".result"); //variables from the html
var statement = document.querySelector(".result-statement"); //variables from the html
var pandasAvg, koalasAvg  // declaring the variables in the function below

calculateButton.addEventListener("click", ()=>{ // this is what happens when the button is clicked
    pandas1 = pandas1.value; //changing the value to a variable
    pandas2 = pandas2.value; //changing the value to a variable
    pandas3 = pandas3.value; //changing the value to a variable
    koalas1 = koalas1.value; //changing the value to a variable
    koalas2 = koalas2.value; //changing the value to a variable
    koalas3 = koalas3.value; //changing the value to a variable
    pandasAvg = (pandas1+pandas2+pandas3)/3; //calculating the average score
    koalasAvg = (koalas1+koalas2+koalas3)/3; //calculating the average score

    if(pandasAvg < koalasAvg){ //if else statement to determine how the results are printed
        statement.innerText = `Pandas score is (${pandasAvg}) and Koalas score is (${koalasAvg}). Koalas win!`;    
    }else if((pandasAvg > koalasAvg)){
        statement.innerText = `Pandas score is (${pandasAvg}) and Koalas score is (${koalasAvg}). Pandas win!`;
    }else if((pandasAvg == koalasAvg)){
        statement.innerText = `Pandas and Koala's have the same score (${pandasAvg}). Its a draw!`;
    }else{
        return none
    }
})
