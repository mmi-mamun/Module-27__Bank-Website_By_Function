//access the button
document.getElementById('withdrawButton').addEventListener('click', function () {

    //get input value from withdraw input field
    const newWithdrawAmount = getInputFieldValueById('withdraw-amount');

    //get text value from total withdraw field
    const previousWithdrawTotal = getTextElementValueById('withdraw-total');

    //add total withdraw balance
    const newWithdrawTotal = previousWithdrawTotal + newWithdrawAmount;

    //set total withdraw balance
    setTextElementValueById('withdraw-total', newWithdrawTotal);

    //get text value from total balance field
    const previousTotalBalance = getTextElementValueById('totalBalance');

    //update total balance
    const updateTotalBalance = previousTotalBalance - newWithdrawAmount;

    //set total balance
    setTextElementValueById('totalBalance', updateTotalBalance);
})