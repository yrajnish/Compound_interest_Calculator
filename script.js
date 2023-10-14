document.getElementById("interest-form").addEventListener("submit", function (event) {
    event.preventDefault();

    const principal = parseFloat(document.getElementById("principal").value);
    const rate = parseFloat(document.getElementById("rate").value);
    const time = parseFloat(document.getElementById("time").value);

    const compoundInterest = principal * Math.pow(1 + rate / 100, time) - principal;
    const resultElement = document.getElementById("result");
    resultElement.textContent = `Compound Interest: ${compoundInterest.toFixed(2)}`;
});
