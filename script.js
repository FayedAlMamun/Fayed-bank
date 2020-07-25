function getInput(inputId)
{
    let inputAmount=parseFloat(document.getElementById(inputId).value);
    return inputAmount;

}
function readText(textId){
    let textAmount=parseFloat(document.getElementById(textId).innerText);
    return textAmount;
}
function addOrMinusBalance(addId,incrementOrDecrementId)
{   
    let total=getInput(incrementOrDecrementId+"-amount")+readText(addId+"-amount");
    if(!isNaN(total) && getInput(incrementOrDecrementId+"-amount")>0){
    document.getElementById(addId+"-amount").innerText=total;}
    
}
function deposite()
{
    addOrMinusBalance("current","deposite");
    addOrMinusBalance("balance","deposite");
    document.getElementById("deposite-amount").value="";
}
function withdraw()
{
    addOrMinusBalance("minus","withdraw");
    if(getInput("withdraw-amount")>0 && !isNaN(getInput("withdraw-amount")))document.getElementById("balance-amount").innerText=readText("balance-amount")-getInput("withdraw-amount");
    document.getElementById("withdraw-amount").value="";
}
function showTranjaction()
{
    document.getElementById("login-area").style.display="none";
    document.getElementById("tranjaction-area").style.display="block";
    document.getElementById("boss").style.background="white";

}
