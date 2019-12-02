$(document).ready(function() {
    $("#register-form").submit(function(e) {
        e.preventDefault();
        
        values=["user", "email", "pass", "name", "date", "interest", "use"];
        new_user=["user", "email", "pass", "name", "date", "interest", "use"];

        var i;
        for(i=0; i<new_user.length; i++){
            new_user[i] = document.forms[0][i].value;
        }
 
        for(i=0; i<new_user.length; i++){
            setCookie(values[i], new_user[i], 14);
        }
                
    });
});

$(document).ready(function() {
    $("#login-form").submit(function(e) {
        e.preventDefault();
        var user = getCookie("email");
        var pass = getCookie("pass")

        login_data=["email", "pass"];
        var i;
        for(i=0; i<login_data.length; i++){
            login_data[i] = document.forms[0][i].value;
        }

		if (user != "" && pass != ""){
			if (login_data[0] == user && login_data[1] == pass){
				window.location.replace("index.html");	
			}
			else {
				alert("Usuario o contraseña incorrecta");
			}
        }
		else {
			alert("Usuario o contraseña incorrecta");
		}
    });
});

function setCookie(cname, cvalue, exdays) {
  var d = new Date();
  d.setTime(d.getTime() + (exdays*24*60*60*1000));
  var expires = "expires="+ d.toUTCString();
  document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function getCookie(cname) {
  var name = cname + "=";
  var decodedCookie = decodeURIComponent(document.cookie);
  var ca = decodedCookie.split(';');
  for(var i = 0; i <ca.length; i++) {
    var c = ca[i];
    while (c.charAt(0) == ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}