<template>
  <div id="login">
    <input type='checkbox' id='form-switch'>
        <form id='login-form' method='post'>
          <input type="text" placeholder="Username" required>
          <input type="password" placeholder="Password" required>
          <button type='register-button'>Register</button>
            <p>Already have an account?</p>
          <button src="../assets/admin.png" alt="admin" width="40" height="40" v-on:click="jump()">Login</button>


          <label for='form-switch'><span>Register</span></label>
        </form>
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
  name: 'register',

  methods: {
    jump(){
        this.$router.push({
            name: 'login'
        })
    }
  }
  
}
</script>

<style scoped>

</style>
