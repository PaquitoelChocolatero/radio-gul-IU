<template>
    <div id="login">
        <div class="login-boxes">
          <div class="header">
            <img class="logo" src="radio-gul/src/assets/iconradio.jpg">
            <p>Admin Log-In</p>
          </div>
              <form id='login-form' method='post'>
              
                <input type="text" class="user" placeholder="Usuario" required>
                <input type="password" placeholder="Contraseña" required>
                <br>
                <button type='login-button' v-on:click="checkCredentials">Login</button>
              </form>
                <p>
                  <br>
                    New administrator?</p>  
                <button v-on:click="setCredentials">Register</button>
        </div>
        
    </div>
</template>

<script>

export default {
  name: 'login',

  methods: {
    jump(){
        this.$router.push({
            name: 'login'
        })
    },

    checkCredentials: function () {
        var user = getCookie("email");
        var pass = getCookie("pass")

        var login_data=["email", "pass"];
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
    }
  },

  setCredentials: function () {
      
      var values=["user", "pass"];
      var new_user=["user", "pass"];

      var i;
      for(i=0; i<new_user.length; i++){
          new_user[i] = document.forms[0][i].value;
      }

      for(i=0; i<new_user.length; i++){
          setCookie(values[i], new_user[i], 14);
      }
              
  }
  
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


function setCookie(cname, cvalue, exdays) {
  var d = new Date();
  d.setTime(d.getTime() + (exdays*24*60*60*1000));
  var expires = "expires="+ d.toUTCString();
  document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}


</script>

<style>

.login-boxes{
  /*border-radius: 2px;*/
    margin: 15% auto;

  border-color:black;
  width: 25%;
  
}

.user{
  margin-top: 10px;
}

  form {
    width:100%;
    border: 2px solid #CCC;

  }
  input {
    margin-top : 3px;
    margin-bottom:10px;
    padding:10px;
    width: 80%;
    border:1px solid #CCC;
  }
  button {
    margin-bottom: 15px;
    padding:5px;
    border-radius: 2px;
    width: 70%;
  }
  label {
    cursor:pointer;
    color: white;
  }
  #form-switch {
    display:none;
  }
  #register-form {
    display:none;
  }
  #form-switch:checked~#register-form {
    display:block;
  }
  #form-switch:checked~#login-form {
    display:none;
  }

   .logo {
    float: left;
    margin-left: 10pt;
  }

  .login-button{
    margin-bottom: 10px;
    padding-bottom: 10%;
  }

</style>
