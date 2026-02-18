console.log("Login Functionality comming soon...");

document.getElementById("login-btn").addEventListener("click", function() {
    // get the mobile number input
    const numberInput = document.getElementById("input-number");
    const contactNumer = numberInput.value;
    console.log(contactNumer);

    // get the pin input
    const inputPin = document.getElementById("input-pin");
    const pin = inputPin.value;
    console.log(pin);
    // match pin and number
    if(contactNumer == "012234567890" && pin == "1234"){
        alert("login successfull");
    } 
    // else{
    //  alert("login failed");
    //  return;        
    // }

   

    window.location.assign("/home.html");
});
