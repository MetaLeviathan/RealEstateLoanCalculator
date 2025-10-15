let mortgagePayment = 0;

let principal = 500000;
let annualInterestRate = 7.5;
let loanTerm = 30;

mortgagePayment = MonthlyPaymentCalc(principal, annualInterestRate, loanTerm);

console.log("Your monthly payment is: ", mortgagePayment);

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