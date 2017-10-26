function calculate(){
    var total;
     principle =document.getElementById("amount").value;
    var intRate = document.getElementById("intrate").value;
    var loanTenure = document.getElementById("tenure").value;
    total = parseInt(principle) + (parseInt(principle)*parseInt(loanTenure)*parseInt(intRate)/100);
    total = total/(loanTenure*12);
    document.getElementById("total").value = total;
}