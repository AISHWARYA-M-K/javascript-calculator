const addbtn = document.getElementById("addButton");
const subtractbtn = document.getElementById("subtractButton");
const multiplybtn = document.getElementById("multiplyButton");
const dividebtn = document.getElementById("divideButton");


function getNumbers(){
    let num1 = document.getElementById("num1").value;
    let num2 = document.getElementById("num2").value;
    return { num1, num2 };
}

addbtn.addEventListener("click", function() {

    const { num1, num2 } = getNumbers();
    let sum = parseFloat(num1) + parseFloat(num2);

    document.getElementById("addresult").value = sum;
});

subtractbtn.addEventListener("click", function() {

    const { num1, num2 } = getNumbers();

    let difference = parseFloat(num1) - parseFloat(num2);

    document.getElementById("subtractresult").value = difference;
});

multiplybtn.addEventListener("click", function() {

    const { num1, num2 } = getNumbers();
    
    let product = parseFloat(num1) * parseFloat(num2);

    document.getElementById("multiplyresult").value = product;
});

dividebtn.addEventListener("click", function() {
    const { num1, num2 } = getNumbers();

    let quotient = parseFloat(num1) / parseFloat(num2);

    document.getElementById("divideresult").value = quotient;
});
