$w.onReady(function () {


});

$w('#calculateButton').onClick((event) => {
        let mortgagePayment = 0;

        let principal = $w('#principal').value;
        let annualInterestRate = $w('#annualInterestRate').value;
        let loanTerm = $w('#loanTerm').value;

        mortgagePayment = MonthlyPaymentCalc(principal, annualInterestRate, loanTerm);
        $w('#paymentOutput').text = mortgagePayment.toLocaleString('en-US', {style: 'currency', currency: 'USD'});
})

function MonthlyPaymentCalc (principal, annualInterestRate, loanTerm){
    let paymentResult = 0;

    let paymentPower = 0;
    let paymentNumerator = 0;
    let paymentDenominator = 0;

    let monthlyInterestRate = annualInterestRate / 12 / 100;
    let paymentNumber = loanTerm * 12;

    paymentPower = Math.pow((1 + monthlyInterestRate), paymentNumber);
    paymentNumerator = monthlyInterestRate * paymentPower;
    paymentDenominator =  paymentPower - 1;
    paymentResult = principal * (paymentNumerator / paymentDenominator);

    console.log("Power result: ", paymentPower);
    console.log("Numerator: ", paymentNumerator);
    console.log("Denominator: ", paymentDenominator);
    console.log("Payment Result: ", paymentResult);

    return paymentResult;
}
