<template>
    <v-container class="fill-height light-blue accent-1" fluid>
          <v-row align="center" justify="center">
            <v-col cols="12" sm="8" md="8">
              <v-card class="elevation-12">
                <v-window v-model="step">
                  <v-window-item :value="1">
                    <v-row>
                      <v-col cols="12" md="8">
                        <v-card-text class="mt-12">
                          <h1
                            class="
                              text-center
                              display-2
                              light-blue--text
                              text--lighten-3
                            "
                          >
                            <strong> Recuperar contraseña </strong>
                          </h1>
                 
                          <h4 class="text-center">
                            Por favor ingresa tu correo electrónico, te enviaremos un código de verificación
                          </h4>

                          <SnackNotification
                            icon="check_circle_outline"
                            color="green lighten-2"
                            :snackbar="successData.showSuccess"
                            :text="successData.message"
                          />
                          <SnackNotification
                            icon="error_outline"
                            color="red accent-2"
                            :snackbar="errorData.showError"
                            :text="errorData.message"
                          />

                          <v-form ref="formForgot" v-model="validForgotPass" lazy-validation>
                            <div class="form-forgot-pass" v-if="!validForgotPass"></div>
                            <v-text-field
                              label="Email"
                              @keyup.enter.prevent="recoveryPassword"
                              required
                              :rules="emailRules"
                              name="email"
                              prepend-icon="email"
                              type="text"
                              v-model="emailToRecover"
                            />
                          </v-form>
              
                        </v-card-text>

                        <div class="text-center mt-3">
                          <v-btn
                            @click="visitMainLogin()"
                            rounded
                            color="grey lighten-1"
                            dark
                          >
                           Cancelar
                          </v-btn>
                            <v-btn
                            @click="recoveryPassword"
                            :disabled="!valid"
                            rounded
                            color="light-blue lighten-1"
                            dark
                          >
                           Enviar Codigo
                          </v-btn>
                        </div>
                      </v-col>
                      <v-col cols="12" md="4" class="light-blue lighten-3">
                        <v-card-text class="white--text mt-12">
                          <h1 class="text-center display-1"></h1>
                          <h5 class="text-center">
                            Recuperacion de contraseña
                          </h5>
                        </v-card-text>
                      </v-col>
                    </v-row>
                  </v-window-item>
                </v-window>
              </v-card>
            </v-col>
          </v-row>
        </v-container>


</template>
<script>
 export default {
	data: () => ({
      messageError: null,
      incorrect : false,
      emailToRecover: null,
			validForgotPass: false,
			emailRules: [
				v => !!v || "El email es requerido",
				//v => (v && v.length <= 10) || "Name must be less than 10 characters",
				v =>
				  /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(v) ||
				  "Correo electrónico invalido"
			],
		}),
		methods:{
			recoveryPassword(){
        let validateForgotPass = this.$refs.formForgot.validate();
     
        if(validateForgotPass){

          let dataToSend = {"email":this.emailToRecover}
          this.$store.dispatch("api/verifyEmail", dataToSend).then(response => {
            if(response.code==100){
              /*guardamos el email para usarlo en el prox component*/
              localStorage.setItem("emailToRecover",this.emailToRecover);
              this.$emit('openCheckCode')
            }
          }).catch(error=>{
              this.messageError = error.data.message;
              this.incorrect = true;
          });


				  
        }
			},
      visitMainLogin(){
        this.$emit('visitMainLogin');
      }

		},
	 };
</script>
<style lang="scss">

</style>