function convertCurrency() {
    const amount = document.getElementById('amount').value;
    const currency = document.getElementById('currency').value;
    const conversionRatesToBDT = {
        ARS: 0.86,  // 1 ARS = 0.86 BDT
        AUD: 73.92, // 1 AUD = 73.92 BDT
        USD: 109.58, // 1 USD = 109.58 BDT
        // আরও কনভার্শন রেট যোগ করতে পারেন
    };

    if (amount === "" || amount <= 0) {
        document.getElementById('result').innerText = "Please enter a valid amount.";
        return;
    }

    if (currency in conversionRatesToBDT) {
        const result = amount * conversionRatesToBDT[currency];
        document.getElementById('result').innerText = `${amount} ${currency} = ${result.toFixed(2)} BDT`;
    } else {
        document.getElementById('result').innerText = "Currency not supported.";
    }
}
