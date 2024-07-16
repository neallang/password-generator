document.addEventListener("DOMContentLoaded", function() {
    const slider = document.getElementById("length-slider");
    const sliderVal = document.getElementById("slider-value");

    sliderVal.textContent = slider.value;
    slider.oninput = function() {
        sliderVal.textContent = this.value;
    }
});


function generatePassword() {
    const uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
    const numberChars = "0123456789";
    const symbolChars = "!@#$%^&*()_+[]{}|;:,.<>?";

    let passwordLength = document.getElementById("length-slider").value

    let upperChecked = document.getElementById("uppercase").checked
    let lowerChecked = document.getElementById("lowercase").checked
    let numberChecked = document.getElementById("number").checked
    let symbolChecked = document.getElementById("symbol").checked

    let password = document.getElementById("password")
    let errorMsg = document.getElementById("error-msg")

    let possibleChars = ""

    if (!upperChecked && !lowerChecked && !numberChecked && !symbolChecked) {
        errorMsg.textContent = "You must check at least one box."
        password.textContent = ""
    }
    else {
        if (upperChecked) possibleChars += uppercaseChars
        if (lowerChecked) possibleChars += lowercaseChars
        if (numberChecked) possibleChars += numberChars
        if (symbolChecked) possibleChars += symbolChars

        let generatedPass = ""

        for (let i = 0; i < passwordLength; i++) {
            let rand_idx = Math.floor(Math.random() * possibleChars.length)
            generatedPass += possibleChars[rand_idx]
        }

        errorMsg.textContent = ""
        password.textContent = "Generated Password: " + generatedPass
    }
}