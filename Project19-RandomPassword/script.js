const inputSlider = document.getElementById("inputSlider");
const sliderValue = document.getElementById("sliderValue");
const passBox = document.getElementById("passBox");

const lowecaseEl = document.getElementById("lowercase");
const uppercaseEl = document.getElementById("uppercase");
const numbersEl = document.getElementById("numbers");
const symbolsEl = document.getElementById("symbols");

const generateBtn = document.getElementById("genBtn");
const copyBtn = document.getElementById("copyIcon");
const passIndicator = document.getElementById("passIndicator");

const lowercaseLetters = "abcdefghijklmnopqrstuvwxyz";
const uppercaseLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const numbers = "0123456789";
const symbols = "!@#$%^&*()_+-=[]{}\|;':,./<>?`~";

sliderValue.textContent = inputSlider.value;
inputSlider.addEventListener("input", () => {
    sliderValue.textContent = inputSlider.value;
    generatePassword();
});

function generatePassword() {
    const length = inputSlider.value;
    let characters = "";
    let password = "";

    characters += lowecaseEl.checked ? lowercaseLetters : "";
    characters += uppercaseEl.checked ? uppercaseLetters : "";
    characters += numbersEl.checked ? numbers : "";
    characters += symbolsEl.checked ? symbols : "";

    for (let i = 0; i < length; i++) {
        password += characters.charAt(Math.floor(Math.random() * characters.length));
    }

    passBox.value = password;
    updatePasswordIndicator();
}

generateBtn.addEventListener("click",() => {
    generatePassword();
});

function updatePasswordIndicator() {
    const passwordStrength = getPasswordStrength(passBox.value);
    passIndicator.className = "pass-indicator " + passwordStrength;
}

function getPasswordStrength(password) {
    const minLength = 8;
    const minMediumLength = 12;

    if (password.length < minLength) {
        return "weak";
    }

    const hasUppercase = /[A-Z]/.test(password);
    const hasNumber = /\d/.test(password);
    const hasSymbol = /[!@#$%^&*()_+\-=\[\]{}\\\|;':",.<>\/?~`]/.test(password);

    if (password.length <= minMediumLength && (!hasUppercase || !hasNumber || !hasSymbol)) {
        return "medium";
    }

    if (password.length > minMediumLength && (hasUppercase || hasNumber || hasSymbol)) {
        return "strong";
    }

    return "medium";
}

window.addEventListener('DOMContentLoaded', () => {
    updatePasswordIndicator();
});

copyBtn.addEventListener("click", () => {

    if (passBox.value != "" || passBox.value.length >= 1) {
        navigator.clipboard.writeText(passBox.value);
        copyBtn.innerText  = "check";

        setTimeout(() => {
            copyBtn.innerHTML = "content_copy";
        }, 3000);
    }
});
