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

document.getElementById('btn-withdraw').addEventListener('click', function(){
    console.log("withdraw");
})