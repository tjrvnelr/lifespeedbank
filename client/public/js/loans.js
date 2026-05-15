document.getElementById("mobileMenuBtn").addEventListener("click", function () {
document.getElementById("navMenu").classList.toggle("active");
});

document.getElementById("loanForm").addEventListener("submit", function (e) {
e.preventDefault();
alert("Application submitted successfully");
this.reset();
});

function calculateLoan() {
const principal = Number(document.getElementById("loanAmount").value);
const annualRate = Number(document.getElementById("interestRate").value);
const months = Number(document.getElementById("loanTerm").value);

if (principal <= 0 || annualRate <= 0 || months <= 0) {
    alert("Enter valid values");
    return;
}

const monthlyRate = annualRate / 100 / 12;
const monthlyPayment =
    principal *
    (monthlyRate * Math.pow(1 + monthlyRate, months)) /
    (Math.pow(1 + monthlyRate, months) - 1);

const totalAmount = monthlyPayment * months;
const totalInterest = totalAmount - principal;

document.getElementById("monthlyPayment").textContent =
    "$" + monthlyPayment.toFixed(2);

document.getElementById("totalInterest").textContent =
    "$" + totalInterest.toFixed(2);

document.getElementById("totalAmount").textContent =
    "$" + totalAmount.toFixed(2);

document.getElementById("result").style.display = "block";
}