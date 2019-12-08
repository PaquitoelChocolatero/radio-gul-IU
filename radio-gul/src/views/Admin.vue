<template>
  <div>
    <div v-show="flag" class="notify">
      <h4>Usuario o contraseña incorrectos</h4>  
    </div>

    <div v-if="access == 0" id="login" class="full-size">
      <Login class ="login-box" v-on:access='grantAccess()' v-on:error='showError()'></Login>
      <div class="fill"></div>
    </div>


    <div v-if="access == 1" id="admin">
      <HeaderAdmin />
      <jsoneditor v-model="json" :options="options" :plus="false" id='editor' @error="onError" />
      <div id='uploads'>
        <upload v-model="fileList" title="Sube la imagen o archivo del programa" :url="remoteUrl" name="Upload"/>
      </div>
    </div>

  </div>
</template>

<script>
import Login from "../components/Login.vue";
import HeaderAdmin from "../components/HeaderAdmin.vue";
import ClickOutside from 'vue-click-outside';
import Vue from 'vue';
import jsoneditor from 'v-jsoneditor/src/index';
import json from "@/jsons/data.json";
import upload from "vux-uploader-component";

Vue.use(jsoneditor)

export default {
  name: 'admin',
  data(){
    return{
      access: 0,
      flag: 0,
      json: json,
      fileList: []
    }
  },
  components: {
    Login,
    HeaderAdmin,
    jsoneditor,
    upload
  },
  methods: {
    grantAccess(){
      this.hideError()
      this.access=1
    },
    showError(){
      this.flag = true
    },
    hideError(){
      this.flag = false
    },
    onError() {
      this.console.log('error')
    }
  },
  directives: {
    ClickOutside
  }
}
</script>

<style scoped>

  .notify{
    width: 100%;
    background-color: red;
    color : white;
  }

  div{
    cursor: default;
  }
  .full-size{
    overflow:hidden;
    background-color: #f2f2f3;
  }
  .login-box{
    margin-top: 10%;
    margin-bottom: 20%;
    padding-top: 3%;
    padding-bottom: 5%;
    height: 40%;
    width: 40%;
    background-color: white;
  }
  .fill{
    height: 1px;
    background-color: #f2f2f3;
  }
  #editor{
    height: 540px;
    width: 80%;
    margin-left: 10%;
    margin-top: 50px;
  }
  #uploads{
    display: flex;
    align-items: center;
    justify-content: center;
  }
</style>
