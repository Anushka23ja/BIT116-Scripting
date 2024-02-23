function calculate(){
    var num1 = $('#num1').val();
    var num2 = $('#num2').val();

if(num1>num2){
   alert("The larger number of the two is: " + num1)
   }
else{
    alert("The larger number of the two is: " + num2)
}  
}

function notnum(){
     var num1 = $('#num1').val();
    var num2 = $('#num2').val();
    if (isNaN(num1)) {
    return 'Not a Number!';
  }
}