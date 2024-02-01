document.addEventListener("DOMContentLoaded",  () => {

    const usd100 = document.getElementById("usd100");
    const usd50 = document.getElementById("usd50");
    const usd20 = document.getElementById("usd20");
    const usd10 = document.getElementById("usd10");
    const usd5 = document.getElementById("usd5");
    const usd2 = document.getElementById("usd2");
    const usd1 = document.getElementById("usd1");

    const txt100 = document.getElementById("txt100");
    const txt50 = document.getElementById("txt50");
    const txt20 = document.getElementById("txt20");
    const txt10 = document.getElementById("txt10");
    const txt5 = document.getElementById("txt5");
    const txt2 = document.getElementById("txt2");
    const txt1 = document.getElementById("txt1");

    const txtFinalCash = document.getElementById("txtFinalCash");
    const txtFinalCashInWords = document.getElementById("txtFinalCashInWords");
    const btnReset = document.getElementById("btnReset");

    const cashInputs = [usd100, usd50, usd20, usd10, usd5, usd2, usd1];
    const cashTexts = [txt100, txt50, txt20, txt10, txt5, txt2, txt1];

    cashInputs.forEach((input, index) => {
        input.addEventListener("input", () => {
            cashCalculate(index);
        });
    });

    function cashCalculate(index) {
        
        const denominations = [100, 50, 20, 10, 5, 2, 1];
        const rowValue = cashInputs[index].value * denominations[index];
        cashTexts[index].textContent = rowValue.toFixed(0);

        totalCash();
    }

    function totalCash() {
        let totalCashValue = 0;
        cashTexts.forEach((text) => {
            totalCashValue += parseInt(text.textContent);
        });

        txtFinalCash.textContent = "Total Cash: $" + totalCashValue;

        txtFinalCashInWords.textContent = `${convertToWords(totalCashValue)} Dollars`;
    }

    btnReset.addEventListener("click", clearData);
    function clearData() {
        cashInputs.forEach((input) => {
            input.value = "";
        });
        cashTexts.forEach((text) => {
            text.textContent = "0";
        });
        txtFinalCash.textContent = "Total Cash: 0";
        txtFinalCashInWords.textContent = "Zero Dollars";
    }

    cashInputs.forEach((input) => {
        input.addEventListener("input", () => {
            const value = parseInt(input.value, 10);
            if (isNaN(value) || value < 0) {
                input.value = "";
            }
        });
    });

    function convertToWords(number) {

        const units = ["", "One", "Two", "Three", "Four", "Five", "Six", "Seven", "Eight", "Nine"]; // 0-9
        const teens = ["Ten", "Eleven", "Twelve", "Thirteen", "Fourteen", "Fifteen", "Sixteen", "Seventeen", "Eighteen", "Nineteen"];  // 10-19
        const tens = ["", "", "Twenty", "Thirty", "Forty", "Fifty", "Sixty", "Seventy", "Eighty", "Ninety"]; // 20-90

        if (number === 0) return "Zero";

        let words = "";

        if (number > 0) {
            if (number < 10) {
                words += units[number];
            } else if (number < 20) {
                words += teens[number - 10];
            } else if (number < 100) {
                words += tens[Math.floor(number / 10)];
                if (number % 10 > 0) {
                    words += " " + units[number % 10];
                }
            } else if (number < 1000) {
                words += units[Math.floor(number / 100)] + " Hundred";
                if (number % 100 > 0) {
                    words += " and " + convertToWords(number % 100);
                }
            } else if (number < 1000000) {
                words += convertToWords(Math.floor(number / 1000)) + " Thousand";
                if (number % 1000 > 0) {
                    words += " " + convertToWords(number % 1000);
                }
            } else if (number < 1000000000) {
                words += convertToWords(Math.floor(number / 1000000)) + " Million";
                if (number % 1000000 > 0) {
                    words += " " + convertToWords(number % 1000000);
                }
            } else if (number < 1000000000000) {
                words += convertToWords(Math.floor(number / 1000000000)) + " Billion";
                if (number % 1000000000 > 0) {
                    words += " " + convertToWords(number % 1000000000);
                }
            }
            return words;
        }
    }
});
