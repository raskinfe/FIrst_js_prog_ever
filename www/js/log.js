

  function authenticate() {
  var password = document.getElementById('password').value;
  var username = document.getElementById('username').value;

  
   var data = JSON.parse(localStorage.getItem('data'));

   var j = data.length;

   if(j > 0 ) {

    for(var i = 0; i<j; i+=8){

      if(password == data[(i+4)] && (username == data[(i+2)] || username == data[(i+3)])) {

        window.location.href = "index.html";

      } else if ((username == data[(i+2)]|| username == data[(i+3)]) && password !== data[(i+4)]) {

        document.getElementById('pmsg').innerHTML = "**Incorrect password!";
      } else if((username !== data[(i+2)] || username !== data[(i+3)]) && password == data[(i+4)]) {

        document.getElementById('umsg').innerHTML = "**Incorrect username!";
      } else {

        alert("Invalid credential")
      }
    }
   }

}






