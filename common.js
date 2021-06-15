function validate(){

    let name = document.querySelector('#Name').value;
    let mobile = document.querySelector('#Tel').value;
    let email = document.querySelector('#Email').value;
    let message = document.querySelector('#Message').value;
    
   if(name==""){
       alert("please enter name");
   }
   else if(mobile==""){
    alert("please enter number");
   }
   else if(email==""){
    alert("please enter email");
   }
   else if(message==""){
    alert("please enter message");
   }
   else{
       alert("form submitted successfully");
   }
}