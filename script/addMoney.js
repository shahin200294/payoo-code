document.getElementById("add-money-btn").addEventListener("click", function () {
    // 1.get a bank account
    const bankAccount = getValueFromInput("add-money-bank");
    if (bankAccount == "select bank") {
        alert("please select a bank");
        return;
    }
    // 2.get bank account number
    const accno = getValueFromInput("add-money-number");
    if (accno.length != 11){
        alert("invalid acc no");
        return;
    }
    const amount = getValueFromInput("add-money-amount");
    const currentBalance = getBalance();
    const newBalance = currentBalance + Number(amount);
    
    const pin = getValueFromInput("add-money-pin");
    if(pin == "1234"){
        alert(`Add Money Successfull. From: ${bankAccount} at ${new Date()}`);
        setBalance(newBalance);
    }else{
        alert("invalid pin");
        return;
    }
})