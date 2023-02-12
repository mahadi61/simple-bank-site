// Deposits js

// step 1: get the button
document.getElementById('btn-deposits').addEventListener('click', function(){
    // step 2: get  the value of deposits field
    const depositsField = document.getElementById('deposits-amount');
    const newDepositsAmountString = depositsField.value;
    const newDepositsAmount = parseFloat(newDepositsAmountString);
    
    
    // step 3: push the value in deposits
    // step 3.A: sum the total value
     const depositsStockAmount = document.getElementById('total-deposits');
     const stockDeposits = depositsStockAmount.innerText;
     
     const previousStockDeposits = parseFloat(stockDeposits);

    //  step: 4
     const currentDepositsTotal = previousStockDeposits + newDepositsAmount;

     depositsStockAmount.innerText = currentDepositsTotal;
     
//  step5: get balance total
const totalBalanceElement = document.getElementById('total-balance');
const totalBalance = totalBalanceElement.innerText;
const previousTotalBalance = parseFloat(totalBalance);

// step 6: sum the total balance
const currentTotalBalance = newDepositsAmount + previousTotalBalance;
totalBalanceElement.innerText = currentTotalBalance;




    //  step 7: clear the deposits field
    depositsField.value = '';

})


// withdraw js
// step 1: get the button
document.getElementById('btn-withdraw').addEventListener('click', function(){
    // step 2: get the input field
    const withdrawField = document.getElementById('withdraw-amount');
    const withdrawElement = withdrawField.value;
    const newWithDrawAmount = parseFloat(withdrawElement);

    // step 3: get the value in withdraw

    const withdrawAmount = document.getElementById('total-withdraw');
    const withdrawAmountElement = withdrawAmount.innerText;
    const previousWithdrawAmount = parseFloat(withdrawAmountElement);


    // step 5:

    const totalBalance = document.getElementById('total-balance');
    const totalBalanceValue = totalBalance.innerText;
    const currentTotalBalance = parseFloat(totalBalanceValue);
    // step 6: clear the withdraw field 
    withdrawField.value = '';

    if(newWithDrawAmount > currentTotalBalance){
        alert('Not Enough Money');
        return;
    }

    // step 4: sum the total value of withdraw
     
    const totalWithdraw = previousWithdrawAmount + newWithDrawAmount;

    withdrawAmount.innerText = totalWithdraw;


// less the total value after withdraw
    const currentTotal = currentTotalBalance - newWithDrawAmount;
    totalBalance.innerText = currentTotal;



    // step 6: clear the withdraw field 
    withdrawField.value = '';
})