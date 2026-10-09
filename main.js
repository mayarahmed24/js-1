document.getElementById("myform").onsubmit = function(){
     var dollar = document.getElementById("dollar").value;
     var result = document.getElementById("result");

     if(dollar==""){
        result.innerHTML = "Enter data";
     }else if(isNaN(dollar)){
        result.innerHTML ="enter number not text";
     }else if(dollar<0){
        result.innerHTML ="enter positive number ";
     }else if(dollar==0){
        result.innerHTML ="enter number rather zero";
     }else {
        result.innerHTML =dollar*50 +"enter pound";
     }
     return false;
}