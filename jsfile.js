function myfunction(){

    var Subject =document.getElementById("Subject").value;
    var email = document.getElementById("email").value;
    var ID = document.getElementById("ID").value;
    var URL = document.getElementById("URL").value;
    var massage = document.getElementById("massage").value;


   if(Subject == " " && email == " " && ID == " " && URL == " " && massage == " "){
           alert("All fields are empty
                  Please fill in the required fields");
   }

  else if(Subject == " "){
    alert("Subject is empty");
  } 

  else if(email == " "){
    alert("email is empty");
  }

  else if(ID == " "){
    alert("ID is empty");
  }

  else if(URL == " "){
    alert("URL is empty");
  }

  else if(massage == " "){
    alert("massage is empty");
  }

  if(email != " "){
  var x = email;
  var s= email.indexOf("@");
  var y = " ";

 for(var i = (s+ 1); i < x.length;i++){
     y+=x[i];
 }

    alert(y);
 }


  if(URL != " "){
   var u = URL;
   var e= URL.indexOf(".");
   var a = "";

  for(var i = 0; i < e;i++){
     a+=u[i];
 }

   alert(a);
}

 
 if(Subject != " "){
 
  for(var i = 0;i<Subject.length;i++){

   if(!(Subject[i]>='a' && Subject[i]<='z'|| Subject[i]>='A' && Subject[i]<='Z')){
         alert("error"); 
          break;
       }
   }
 }


 if(massage != ""){

 for(var i = 0;i<massage.length;i++){

  if(!(massage[i]>='a'&& massage[i]<='z'|| massage[i]>='A' && massage[i]<='Z')){
       alert("error");
       break;
     }
  }
}

 for(var i = 0;i<ID.length;i++){

  if(!(ID[i]>='a' && ID[i]<='z'|| ID[i]>='A'&& ID[i]<='Z')){
         alert(" error");
         break;
      }
   }
}




















