<template >
  <v-app>
    <v-main>
      <div id="particles-js"></div>
      <v-layout fill-height column justify-center align-center>
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
                            <strong> DrugsOnline </strong>
                          </h1>
                          <div class="text-center mt-4">
                            <v-btn class="mx-2" fab color="black" outlined>
                              <v-icon> fab fa-facebook-f </v-icon>
                            </v-btn>
                            <v-btn class="mx-2" fab color="black" outlined>
                              <v-icon> fab fa-google-plus-g </v-icon>
                            </v-btn>
                            <v-btn class="mx-2" fab color="black" outlined>
                              <v-icon> fab fa-linkedin-in </v-icon>
                            </v-btn>
                          </div>
                          <h4 class="text-center">
                            Ten presente tu email para logearte
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

                          <v-form ref="form" v-model="valid" lazy-validation>
                            <v-text-field
                              label="Email"
                              @keyup.enter.prevent="login"
                              required
                              :rules="formLogin.emailRules"
                              name="email"
                              prepend-icon="email"
                              type="text"
                              v-model="form.email"
                            />
                            <v-text-field
                              id="password"
                              @keyup.enter.prevent="login"
                              required
                              :rules="formLogin.passwordRules"
                              name="password"
                              label="Password"
                                :prepend-icon="showPass ? 'mdi-eye' : 'mdi-eye-off'"
                              @click:prepend="() => (showPass = !showPass)"
                                :type="showPass ? 'text' : 'password'"
                              v-model="formLogin.password"
                            />
                          </v-form>
                          <h3
                            @click="step+=step+=step"
                            class="text-center mt-3"
                          >
                            Olvidaste tu contraseña ?
                          </h3>
                        </v-card-text>

                        <div class="text-center mt-3">
                          <v-btn
                            @click="login"
                            :disabled="!valid"
                            rounded
                            color="light-blue lighten-1"
                            dark
                          >
                            Iniciar sesion
                          </v-btn>
                        </div>
                      </v-col>
                      <v-col cols="12" md="4" class="light-blue lighten-3">
                        <v-card-text class="white--text mt-12">
                          <h1 class="text-center display-1">Bienvenidos!</h1>
                          <h5 class="text-center">
                            Ingrese su informacion para iniciar con nosotros!
                          </h5>
                        </v-card-text>
                        <div class="text-center">
                          <v-btn rounded outlined dark @click="step++"
                            >Registrarse
                          </v-btn>
                        </div>
                      </v-col>
                    </v-row>
                  </v-window-item>
                  <v-window-item :value="2">
                    <v-row class="fill-height">
                      <v-col cols="12" md="4" class="light-blue lighten-3">
                        <v-card-text class="white--text mt-12">
                          <h1 class="text-center display-1">Regresar atras</h1>
                          <h5 class="text-center">
                            Para mantener conectado con nosotros !
                          </h5>
                        </v-card-text>
                        <div class="text-center">
                          <v-btn rounded outlined dark @click="step--">
                            Ir al login</v-btn
                          >
                        </div>
                      </v-col>
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
                            <strong> Crear una nueva cuenta </strong>
                          </h1>
                          <div class="text-center mt-4">
                            <v-btn class="mx-2" fab color="black" outlined>
                              <v-icon> fab fa-facebook-f </v-icon>
                            </v-btn>
                            <v-btn class="mx-2" fab color="black" outlined>
                              <v-icon> fab fa-google-plus-g </v-icon>
                            </v-btn>
                            <v-btn class="mx-2" fab color="black" outlined>
                              <v-icon> fab fa-linkedin-in </v-icon>
                            </v-btn>
                          </div>
                          <h4 class="text-center mt-4">
                            Ten presente tu email para registrarte
                          </h4>
                          <SnackNotification
                            icon="error_outline"
                            color="red accent-2"
                            :snackbar="errorData.showError"
                            :text="errorData.message"
                          />
                          <v-form
                            ref="form"
                            @submit.prevent="signup"
                            v-model="valid"
                            lazy-iscreatedMessage
                          >
                            <v-text-field
                              label="Name"
                              :rules="form.nameRules"
                              name="Name"
                              prepend-icon="person"
                              type="text"
                              v-model="form.name"
                              required
                            />
                            <v-text-field
                              label="Email"
                              :rules="form.emailRules"
                              name="Email"
                              prepend-icon="email"
                              type="text"
                              v-model="form.email"
                              required
                            />
                            <v-text-field
                              label="Document"
                              :rules="form.documentRules"
                              name="Document"
                              prepend-icon="mdi-dialpad"
                              type="text"
                              v-model="form.document"
                              required
                            />
                            <v-text-field
                              label="Address"
                              :rules="form.addressRules"
                              name="Address"
                              prepend-icon="ballot"
                              type="text"
                              v-model="form.address"
                              required
                            />
                            <v-text-field
                              label="Phone"
                              :rules="form.phoneRules"
                              name="Phone"
                              prepend-icon="phone"
                              type="text"
                              v-model="form.phone"
                              required
                            />
                            <v-text-field
                              label="Password"
                              :rules="form.passwordRules"
                              name="Password"
                                  :prepend-icon="showPass ? 'mdi-eye' : 'mdi-eye-off'"
                              @click:prepend="() => (showPass = !showPass)"
                                :type="showPass ? 'text' : 'password'"
                              v-model="form.password"
                              required
                            />
                          </v-form>
                        </v-card-text>
                        <div class="text-center mt-n5">
                          <v-btn
                          v-if="!showSpin"
                            @click="signup"
                            :disabled="!valid"
                            rounded
                            color="light-blue lighten-1"
                            dark
                          >
                            Registrarse</v-btn
                          >
                          <v-btn
                          v-if="showSpin"
                            @click="signup"
                            :disabled="!valid"
                            rounded
                            color="light-blue lighten-1"
                            dark
                          >
                              <v-icon>fas fa-circle-notch fa-spin</v-icon></v-btn
                          >
                        </div>
                      </v-col>
                    </v-row>
                  </v-window-item>
                   <v-window-item :value="3">
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
                            <strong> Recuperacion de contraseña </strong>
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

                          <v-form ref="form" v-model="valid" lazy-validation>
                            <v-text-field
                              label="Email"
                              @keyup.enter.prevent="sendVeriphyEmail"
                              required
                              :rules="form.emailRules"
                              name="email"
                              prepend-icon="email"
                              type="text"
                              v-model="form.email"
                            />
                  
                          </v-form>
              
                        </v-card-text>

                        <div class="text-center mt-3" >
                          <v-btn
                            @click="step-=step++"
                            rounded
                            color="grey lighten-1"
                            dark
                                     style="margin-right: 10px;"
                          >
                           Cancelar
                          </v-btn>
                            <v-btn
                   
                            :disabled="!valid"
                            rounded
                            @click="sendVerifyEmail"
                            color="light-blue lighten-1"
                            dark
                          >
                            Enviar codigo
                          </v-btn>
                        </div>
                      </v-col>
                      <v-col cols="12" md="4" class="light-blue lighten-3">
                        <v-card-text class="white--text mt-12">
                          <h1 class="text-center display-1">Bienvenidos!</h1>
                          <h5 class="text-center">
                            Ingrese su informacion para iniciar con nosotros!
                          </h5>
                        </v-card-text>
                        <div class="text-center">
                          <v-btn rounded outlined dark @click="step-=step++"
                            >Volver al inicio
                          </v-btn>
                        </div>
                      </v-col>
                    </v-row>
                  </v-window-item>
                        <v-window-item :value="4">
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
                            <strong> {{codePass==''?'Verificacion de email':'Reestablecimiento de contraseña'}} </strong>
                          </h1>
            
                          <h4 class="text-center">
                              Por favor ingresa  el codigo  enviado al email registrado
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

                          <v-form ref="form" v-model="valid" lazy-validation>
                            <v-text-field
                              label="Codigo"
                    
                              required
                              :rules="form.codeRules"
                              name="code"
                              prepend-icon="lock"
                              type="text"
                              v-model="writeCode"
                            />
                  
                          </v-form>
              
                        </v-card-text>

                        <div class="text-center mt-3" >
                          <v-btn
                            @click="step-=step++"
                            rounded
                            color="grey lighten-1"
                            dark
                            style="margin-right: 10px;"
                          >
                           Cancelar
                          </v-btn>
                            <v-btn
                   
                            :disabled="!valid"
                            rounded
                            @click="launchVerifications"
                            color="light-blue lighten-1"
                            dark
                          >
                            Verificar Codigo
                          </v-btn>  
                        </div>
                      </v-col>
                      <v-col cols="12" md="4" class="light-blue lighten-3">
                        <v-card-text class="white--text mt-12">
                          <h1 class="text-center display-1">Bienvenidos!</h1>
                          <h5 class="text-center">
                            Ingrese su informacion para iniciar con nosotros!
                          </h5>
                        </v-card-text>
                        <div class="text-center">
                          <v-btn rounded outlined dark @click="step-=step++"
                            >Volver al inicio
                          </v-btn>
                        </div>
                      </v-col>
                    </v-row>
                  </v-window-item>
                    <v-window-item :value="5">
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
                            <strong> Reestablecer  contraseña </strong>
                          </h1>
              
                          <h4 class="text-center">
                           Escribe tu nueva contraseña
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

                          <v-form ref="form" v-model="valid" lazy-validation>
         
                            <v-text-field
                              id="password"
      
                              required
                              :rules="form.passwordRules"
                              name="password"
                              label="Password"
                                :prepend-icon="showPass ? 'mdi-eye' : 'mdi-eye-off'"
                              @click:prepend="() => (showPass = !showPass)"
                                :type="showPass ? 'text' : 'password'"
                              v-model="passwordRecovery"
                            />
                              <v-text-field
                              id="setNewPassword"
                              required
                              :rules="form.passwordRules"
                              name="setNewPassword"
                              label="nueva contraseña"
                               :prepend-icon="showPass2 ? 'mdi-eye' : 'mdi-eye-off'"
                              @click:prepend="() => (showPass2 = !showPass2)"
                                :type="showPass2 ? 'text' : 'password'"
                              v-model="setNewPassword"
                            />
                          </v-form>
                   
                        </v-card-text>

                          <div class="text-center mt-3" >
                          <v-btn
                            @click="step-=step++"
                            rounded
                            color="grey lighten-1"
                            dark
                            style="margin-right: 10px;"
                          >
                           Cancelar
                          </v-btn>
                            <v-btn
                   
                            :disabled="!valid"
                            rounded
                            @click="updatePassword"
                            color="light-blue lighten-1"
                            dark
                          >
                          Reestablecer contraseña
                          </v-btn>  
                        </div>
                      </v-col>
                      <v-col cols="12" md="4" class="light-blue lighten-3">
                        <v-card-text class="white--text mt-12">
                          <h1 class="text-center display-1">Reestablecimiento de contraseña</h1>
                          <h5 class="text-center">
                            Ingrese su informacion para iniciar con nosotros!
                          </h5>
                        </v-card-text>
                        <div class="text-center">
                          <v-btn rounded outlined dark @click="step-=step++"
                            >Volver al inicio
                          </v-btn>
                        </div>
                      </v-col>
                    </v-row>
                  </v-window-item>
                </v-window>
              </v-card>
            </v-col>
          </v-row>
        </v-container>
      </v-layout>
    </v-main>
  </v-app>
</template>

<script>
import "particles.js/particles";
import FooterComponent from "../../components/FooterComponent";
//import Alert from '../components/Alert'
import SnackNotification from "../../components/SnackNotification";
export default {
  name: "LoginAndSignUp",
  components: {
    FooterComponent,
    //Alert,
    SnackNotification,
  },
  mounted: function () {
    particlesJS("particles-js", {
      particles: {
        number: {
          value: 200,
          density: {
            enable: true,
            value_area: 800,
          },
        },
        color: {
          value: "#ffffff",
        },
        shape: {
          type: "circle",
          stroke: {
            width: 0,
            color: "#000000",
          },
          polygon: {
            nb_sides: 5,
          },
          image: {
            src: "img/github.svg",
            width: 100,
            height: 100,
          },
        },
        opacity: {
          value: 0.5,
          random: false,
          anim: {
            enable: false,
            speed: 1,
            opacity_min: 0.1,
            sync: false,
          },
        },
        size: {
          value: 1,
          random: true,
          anim: {
            enable: false,
            speed: 40,
            size_min: 0.1,
            sync: false,
          },
        },
        line_linked: {
          enable: true,
          distance: 150,
          color: "#ffffff",
          opacity: 0.4,
          width: 1,
        },
        move: {
          enable: true,
          speed: 12,
          direction: "none",
          random: false,
          straight: false,
          out_mode: "out",
          bounce: false,
          attract: {
            enable: false,
            rotateX: 600,
            rotateY: 1200,
          },
        },
      },
      interactivity: {
        detect_on: "canvas",
        events: {
          onhover: {
            enable: true,
            mode: "grab",
          },
          onclick: {
            enable: true,
            mode: "push",
          },
          resize: true,
        },
        modes: {
          grab: {
            distance: 100,
            line_linked: {
              opacity: 1,
            },
          },
          bubble: {
            distance: 400,
            size: 40,
            duration: 2,
            opacity: 8,
            speed: 3,
          },
          repulse: {
            distance: 200,
            duration: 0.4,
          },
          push: {
            particles_nb: 4,
          },
          remove: {
            particles_nb: 2,
          },
        },
      },
      retina_detect: true,
    });
  },
  data: () => ({
    code:'',
    codePass:'',
    writeCode:'',
    passwordRecovery:'',
    setNewPassword:'',
    showPass:false,
    showPass2:false,
    showSpin:false,
    forgotPassword: false,
    disableLogin: false,
    checkCode: false,
    step: 1,
    valid: true,
    errorData: {
      showError: false,
      message: "",
    },
    successData: {
      showSuccess: false,
      message: "",
    },
    form: {
      name: "",
      email: "",
      phone: "",
      address: "",
      document:"",
      password: "",
      emailRules: [
        (v) => !!v || "E-mail is required",
        (v) =>
          /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(v) ||
          "El email debe ser valido",
      ],
      passwordRules: [
        (v) => !!v || "La contraseña es necesaria",
        (v) =>
          v.length >= 6 || "La contraseña debe tener 6 caracteres como minimo",
      ],
    documentRules: [
        (v) => !!v || "El numero de documento es necesario",
        (v) =>
          v.length >= 8 || "Numero de documento incorrecto",
      ],
          codeRules: [
        (v) => !!v || "El codigo de verificacion es necesario",
        (v) =>
          v.length >= 4 || "Codigo incorrecto",
      ],
      nameRules: [
        (v) => !!v || "el nombre es requerido",
        (v) =>
          v.length >= 3 || "El nombre debe tener tres caracteres como minimo",
      ],
      phoneRules: [
        (v) => !!v || "El telefono es requerido",
        (v) => v.length === 10 || "Numero de celular invalido",
      ],
      addressRules: [(v) => !!v || "La direccion es requerida"],
      rolesRules: [(v) => !!v || "El role es requerido"],
    },
    formLogin: {
      email: "",
      password: "",
      passwordRules: [(v) => !!v || "La contraseña es necesaria"],
      emailRules: [
        (v) => !!v || "El email es requerido",
        (v) =>
          /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(v) ||
          "Ingresa un email valido",
      ],
    },
  }),
  props: {
    source: String,
  },
  methods: {
     openForgotPassword(){
        this.disableLogin = true;
        this.forgotPassword = true;
      },
      openCheckCode(){
        this.forgotPassword = false;
        this.checkCode = true;
      },
      openResetPassword(){
        this.checkCode = false;
        this.setNewPassword = true;
      },
    visitMainLogin() {
      this.forgotPassword = false;
      this.checkCode = false;
      this.disableLogin = false;
    },
    launchVerifications(){
      console.log(this.codePass,this.writeCode);
      if(this.codePass != '' && this.writeCode  != ''){
        this.verifyCodePass()
      }else{
        this.verifyCode()
      }
    },
    login() {
      this.showError = false;

      if (this.form.email.length <= 0) {
        this.errorData.message = "El email es necesario para iniciar sesion";
        this.errorData.showError = true;
      }
      if (this.formLogin.password.length <= 0) {
        this.errorData.message =
          "La contraseña es  necesaria para iniciar sesion";
        this.errorData.showError = true;
      }
      const form = {
        email: this.form.email.toLowerCase(),
        password: this.formLogin.password,
      };

      this.$store.dispatch("login", form).then((result) => {
          console.log(result);
        if (result.data.code == 100) {
              this.$router.replace({
              path: "/droguerias",
            });   
        } else {
          console.log("No logueó por: ", result);
          this.$refs.form.reset();
          this.errorData.message = result.data.message;
          this.errorData.showError = true;
          setTimeout(() => {
            this.errorData.showError = false;
          }, 3500);
          if(result.data.code === 'Su usuario se encuentra inactivo'){
              this.errorData.message = 'Usuario inactivo, por favor verificar correo electronico';
            this.errorData.showError = true;
              setTimeout(() => {
              this.errorData.showError = false;
            }, 4000);
              this.$store.dispatch('sendVerifyEmailRegister',{email:form.email}).then((result)=>{
              
              if(result.data.data.verificationCode){
                this.code = result.data.data.verificationCode
                this.form.email = form.email
                this.step=4
              }
              else {
            this.errorData.message =
              "Ocurrió un error al enviar el codigo de verificacion!";
            this.errorData.showError = true;
            this.$refs.form.reset();
            setTimeout(() => {
              this.errorData.showError = false;
            }, 3500);
          }
            })


          }
        }
      });
    },
    sendVerifyEmail(){
      const form = {email:this.form.email.toLowerCase()}
      this.showError = false;
      if (this.form.email.length <= 0) {
        this.errorData.message = "El email es necesario";
        this.errorData.showError = true;
                     setTimeout(() => {
              this.errorData.showError = false;
            }, 3500);
      }



      this.$store.dispatch("sendVerifyEmail", form).then((result) => {

        if (result.data.code == 100) {
          if (result.data.data.verificationCode) {
            this.form.email = form.email;
              this.codePass = result.data.data.verificationCode;
                     this.successData.message = 'Codigo de verificacion enviado, por favor revisa tu bandeja de entrada!'
                     this.successData.showSuccess = true

                      this.step=4
                setTimeout(() => {
              this.successData.showSuccess = false;
            }, 3500);
              
          } else {
            this.$refs.form.reset();
            this.errorData.message = "El correo ingresado no es valido";
            this.errorData.showError = true;
                   setTimeout(() => {
              this.errorData.showError = false;
            }, 3500);
      
          }
        } else {
          console.log("No logueó por: ", result);
          this.$refs.form.reset();
          this.errorData.message = result.data.message;
          this.errorData.showError = true;
                       setTimeout(() => {
              this.errorData.showError = false;
            }, 3500);
    
        }
      });

    },
    updatePassword(){
      if(this.passwordRecovery  === this.setNewPassword){
        this.$store.dispatch('updatePassword',{email:this.form.email,password:this.passwordRecovery}).then(result=>{
        if(result.data.code ==100){
        this.successData.message = 'Contraseña actualizada exitosamente!';
        this.successData.showSuccess = true;
        this.step=1;
        setTimeout(() => {
              this.successData.showSuccess = false;
            }, 3500);
          }else{
          this.errorData.message = `Ocurrio un error al intentar reestablecer la contraseña!`;
          this.errorData.showError = true;
          setTimeout(() => {
              this.errorData.showError = false;
            }, 3500);
          }
        })
      }
    },
    verifyCodePass(){
      console.log('entro al codepass');
      if(this.codePass.toString() === this.writeCode){
         this.successData.message = 'Codigo verificado exitosamente!'
        this.successData.showSuccess = true
        this.step=5
           setTimeout(() => {
              this.successData.showSuccess = false;
            }, 3500);
      }else{
          this.errorData.message = 'Codigo invalido!';
          this.errorData.showError = true;
          setTimeout(() => {
              this.errorData.showError = false;
            }, 3500);
      }
    },
    verifyCode(){
      if(this.code.toString() === this.writeCode){
        this.successData.message = 'Codigo verificado exitosamente!'
        this.successData.showSuccess = true

        this.step-=this.step++
           setTimeout(() => {
              this.successData.showSuccess = false;
            }, 3500);
        this.$store.dispatch('activeUser',{email:this.form.email}).then(result=>{
          if(result.data.code ==100){
        this.successData.message = 'Usuario activado exitosamente!'
        this.successData.showSuccess = true
          setTimeout(() => {
              this.successData.showSuccess = false;
            }, 3500);
          }else{
          this.errorData.message = `Ocurrio un error al intentar activar el usuario ${this.formLogin.email != ''?this.formLogin.email:this.form.email}!`;
          this.errorData.showError = true;
          setTimeout(() => {
              this.errorData.showError = false;
            }, 3500);
          }
        })
      }else{
          this.errorData.message = 'Codigo invalido!';
          this.errorData.showError = true;
          setTimeout(() => {
              this.errorData.showError = false;
            }, 3500);
      }
    },
    signup() {
      this.showSpin = true
      const form = {
        fullName: this.form.name,
        document:this.form.document,
        email: this.form.email.toLowerCase(),
        phoneNumber: this.form.phone,
        address: this.form.address,
        password: this.form.password,
      };

      this.$store.dispatch("register", form).then((result) => {
  
        if (result.data.code == 100) {
          if (result.data.data.user) {
            this.successData.message = "Usuario creado exitosamente, se a enviado un codigo de verificacion a tu correo registrado!";
            this.successData.showSuccess = true;
              setTimeout(() => {
              this.successData.showSuccess = false;
            }, 7000);
            this.$store.dispatch('sendVerifyEmailRegister',{email:form.email}).then((result)=>{
              if(result.data.data.verificationCode){
                this.code = result.data.data.verificationCode
                this.form.email = form.email
                this.step=4
                this.showSpin = false;
         
     
              }
              else {
            this.errorData.message =
              "Ocurrió un error al enviar el codigo de verificacion!";
            this.errorData.showError = true;
            this.$refs.form.reset();
            setTimeout(() => {
              this.errorData.showError = false;
            }, 3500);
          }
            })
    
            setTimeout(() => {
              this.successData.showSuccess = false;
            }, 3500);
          } else {
            this.errorData.message =
              "Ocurrió un error al registrarse por favor intente mas tarde";
            this.errorData.showError = true;
            this.$refs.form.reset();
            setTimeout(() => {
              this.errorData.showError = false;
            }, 3500);
          }
        } else {
          console.log("No logueó por: ", result);
          this.errorData.message = result.data.message;
          this.errorData.showError = true;
          setTimeout(() => {
            this.errorData.showError = false;
          }, 3500);
            this.$refs.form.reset();
        }
      });
    },
  },
};
</script>
<style scoped>
#particles-js {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-color: #81d4fa;
}
.text-center{
    cursor: pointer;
}

</style>