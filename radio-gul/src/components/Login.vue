<template>
    <div id="login">
        <div class="login-boxes">
          <input type='checkbox' id='form-switch'>
              <form id='login-form' method='post'>
              
                <input type="text" class="user" placeholder="Usuario" required>
                <input type="password" placeholder="Contraseña" required>
                <br>
                <button type='login-button'>Login</button>
                  <p>
                  <br>
                    New administrator?</p>  
                <button v-on:click="jump()">Register</button>

              </form>
        </div>
        <!-- <form id='register-form' method='post'>
          <input type="text" placeholder="Nombre de usuario" required>
          <input type="email" placeholder="Email" required>
          <input type="password" placeholder="Contraseña" required>
          <input type="text" placeholder="Nombre y apellidos" required>
          <input type="date" required>
          <select name="Intereses">
            <option value="None selected">Seleccione abajo</option>
            <option value="PC">PC</option>
            <option value="Play Station">Play Station</option>
            <option value="Nintendo">Nintendo</option>
          </select> 
          <input type="text" placeholder="Uso de la aplicacion">
          <input type="checkbox" required><label><span>Condiciones de Uso y Privacidad</span></label>
          <button type='submit'>Register</button>
          <label for='form-switch'>¿Ya tiene una cuenta? Inicie sesión</label>
        </form> -->
    </div>
</template>

<script>

export default {
  name: 'login',

  methods: {
    jump(){
        this.$router.push({
            name: 'register'
        })
    }
  }
  
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
    margin-bottom:3px;
    padding:10px;
    width: 80%;
    border:1px solid #CCC;
  }
  button {
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

   #logo {
    float: left;
    margin-left: 10pt;
  }

</style>
