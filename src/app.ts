
const enterBillAmount = document.getElementById('enterBillAmount') as HTMLInputElement;
const billAmount = document.getElementById('billAmount') as HTMLSpanElement;
const tip10Percent = document.getElementById('tip10Percent') as HTMLButtonElement;
const tip15Percent = document.getElementById('tip15Percent') as HTMLButtonElement;
const tip20Percent = document.getElementById('tip20Percent') as HTMLButtonElement;
const tipPercentage = document.getElementById('tipPercentage') as HTMLSpanElement;
const amountOfTip = document.getElementById('amountOfTip') as HTMLSpanElement;
const totalToBePaid = document.getElementById('totalToBePaid') as HTMLSpanElement;
const tipPercentageSelected = document.getElementById('tipPercentageSelected') as HTMLSpanElement;
// Default tip percent to 10
let tipPercent = .10;
tipPercentage.innerText = '10%';
tip10Percent.disabled = true;
tip15Percent.disabled = false;
tip20Percent.disabled = false;

export function runApp() {

    enterBillAmount.addEventListener('keyup', function () {
        calc();
    });

    tip10Percent.addEventListener('click', () => {
        tipPercent = .10;
        calc();
        tip10Percent.disabled = true;
        tip15Percent.disabled = false;
        tip20Percent.disabled = false;
        tipPercentageSelected.innerText = '10%';
        tipPercentage.innerText = '10%';
    });

    tip15Percent.addEventListener('click', () => {
        tipPercent = .15;
        calc();
        tip10Percent.disabled = false;
        tip15Percent.disabled = true;
        tip20Percent.disabled = false;
        tipPercentageSelected.innerText = '15%';
        tipPercentage.innerText = '15%';
    });

    tip20Percent.addEventListener('click', () => {
        tipPercent = .20;
        calc();
        tip10Percent.disabled = false;
        tip15Percent.disabled = false;
        tip20Percent.disabled = true;
        tipPercentageSelected.innerText = '20%';
        tipPercentage.innerText = '20%';
    });

    document.getElementById('tipPercent');
}

function calc() {
    if (enterBillAmount.valueAsNumber < 0) {
        enterBillAmount.classList.add('error');
        // billAmount.innerText = 'ERROR!!';
        // amountOfTip.innerText = 'ERROR!!';
        amountOfTip.innerText = 'ERROR!!';
    } else {
        let tip = (Math.round((enterBillAmount.valueAsNumber * tipPercent) * Math.pow(10, 2)) / Math.pow(10, 2)).toFixed(2);
        tip = isNaN(parseFloat(tip)) ? '0' : tip;
        amountOfTip.innerText = '$' + tip.toString();

        enterBillAmount.classList.remove('error');
        billAmount.innerText = '$' + enterBillAmount.value;

        totalToBePaid.innerText = (enterBillAmount.valueAsNumber * tipPercent + enterBillAmount.valueAsNumber).toString();
        totalToBePaid.innerText = '$' + (isNaN(parseFloat(totalToBePaid.innerText)) ? '0' : totalToBePaid.innerText);
    }
}
