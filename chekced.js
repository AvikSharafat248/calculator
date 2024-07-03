const checkbox = document.getElementById("checkbox")
const visa = document.getElementById("visa")
const mastercard = document.getElementById("mastercard")
const paypal = document.getElementById("paypal")
const  submit = document.getElementById("submit")
const subresult = document.getElementById("subresult")
const payment = document.getElementById("payment")

submit.onclick = function(){
    if(checkbox.checked){
        subresult.textContent = `You are subscribed`
    }else{
        subresult.textContent = `You're not subscribed`
    }
    
    if(visa.checked){
        payment.textContent = `You are paying with Visa`
    }else if(mastercard.checked){
        payment.textContent = `You are paying with MasterCard`
    }
    else if(paypal.checked){
        payment.textContent = `You are paying with PayPal`
    }else{
        payment.textContent=`you must select a payment type!`
    }

}