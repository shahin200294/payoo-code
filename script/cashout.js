
document.getElementById("cashout-btn").addEventListener("click", function(){
    // 1. get the agent number and valited
    const cashoutNumber = getValueFromInput("cashout-number");
    if(cashoutNumber.length != 11){
        alert("Invalid Nember");
        return;
    }
    console.log(cashoutNumber);
    // 2. get the amount 
    const cashoutAmount = getValueFromInput("cashout-amount");
    // 3. get the carent balance
    const currentBalanceInput  = document.getElementById("balance");
    const currentBalance = currentBalanceInput.innerText;
    console.log(currentBalance);
    // 4. calculate new balance

    const newBalance = Number(currentBalance)- Number(cashoutAmount);
    console.log("newBalance", newBalance);

    if(newBalance < 0){
        alert("invalid Amount");
        return;
    }
    const pin = getValueFromInput("input-pin");
    if(pin === "1234"){
        alert("Cashout Successfull");
        currentBalanceInput.innerText = newBalance;
    } else{
         alert("invalid Pin");
        return;
    }
    
});




// document.getElementById("cashout-btn").addEventListener("click", function(){
//     // 1. get the agent number and valited
//     const cashoutNaumberInput = document.getElementById("cashout-number");
//     const cashoutNumber = cashoutNaumberInput.value;
//     console.log(cashoutNumber);
//     if(cashoutNumber.length != 11){
//         alert("Invalid Nember");
//         return;
//     }
//     // 2. get the amount and validate, convart to number
//     const cashoutAmountInput = document.getElementById("cashout-amount");
//     const cashoutAmount = cashoutAmountInput.value;
//     console.log(cashoutAmount);
//     // 3. get the carent balance and validate, convart to number
//     const currentBalanceInput  = document.getElementById("balance");
//     const currentBalance = currentBalanceInput.innerText;
//     console.log(currentBalance);
//     // 4. calculate new balance
//     const newBalance = Number(currentBalance) - Number(cashoutAmount);
   


//     if(newBalance < 0){
//         alert("Invalid Amount");
//         return;
//     }
//     // 5. get the pin and varify
//     const cashoutPinInput = document.getElementById("input-pin");
//     const pin = cashoutPinInput.value;

//     // 5-1. true show and alert > set balance
//     if(pin == "1234"){
//         alert("Cashout Successfull");
//         currentBalanceInput.innerText = newBalance

//          console.log("newBalance", newBalance);
//     }
//     // 5-2. false show anerrr alert > return
//     else{
//         alert("Invalid Pin");
//         return;
//     }
// })