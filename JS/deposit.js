
document.getElementById('deposit-button').addEventListener('click', function () {
    const newDepositAmount = getInputFieldValueById('deposit-field');
    const previousDepositTotal = getTextElementValueById('total-deposit');
    const newDepositTotal = previousDepositTotal + newDepositAmount;
    setTextElementValueById('total-deposit', newDepositTotal);

    const previousTotalBalance = getTextElementValueById('totalBalance');
    const updateTotalBalance = previousTotalBalance + newDepositAmount;
    setTextElementValueById('totalBalance', updateTotalBalance);
})