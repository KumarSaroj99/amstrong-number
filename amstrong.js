function checkAmstrong()
{
    var number=parseInt(f1.num.value);
    var para=document.getElementById("para");
    if (isArmstrongNumber(number)) {
        para.innerHTML=`The given number ${number} is a Amstrong number`;
    } else {
        para.innerHTML=`The given number ${number} is not a Amstrong number`;
    }
}
function isArmstrongNumber(num) {
    let sum = 0;
    let temp = num;
    const numDigits = num.toString().length;

    while (temp > 0) {
        let digit = temp % 10;
        sum += Math.pow(digit, numDigits);
        temp = Math.floor(temp / 10);
    }

    return sum === num;
}
