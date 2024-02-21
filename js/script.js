const age = document.getElementById("age");
const height = document.getElementById("height");
const weight = document.getElementById("weight");
const male = document.getElementById("male");
const female = document.getElementById("female");
const submitBtn = document.getElementById("submit");
const resetBtn = document.getElementById("reset");
const resultEle = document.getElementById("bmi-result");
const comment = document.getElementById("comment");

function calculate(){
    if(age.value === "" || height.value === "" || weight.value === "" || male.checked === false && female.checked === false){
        alert("All fields are required");
    }else{
        var bmi = (weight.value) / (height.value / 100) ** 2

        var result = "";

        if(bmi < 18.5){
            result = "Underweight";
        }else if(bmi >= 18.5 && bmi <= 24.9){
            result = "Healthy";
        }else if(bmi >=25 && bmi <= 29.9){
            result = "Overweight";
        }else if(bmi >=30 && bmi<=34.9){
            result = "Obese";
        }else if(bmi >=35){
            result = "Extremely obese";
        }
        resultEle.innerHTML = Math.round(bmi * 100) / 100;
        comment.innerHTML = result.toUpperCase();
    }
}

submitBtn.addEventListener("click", calculate);

resetBtn.addEventListener("click", function(){
    age.value = "";
    height.value = "";
    weight.value = "";
    male.checked = false;
    female.checked = false;
    resultEle.innerHTML = "00.00";
    comment.innerHTML = "";
})