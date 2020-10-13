<template>
<v-app>
    <v-content>
        <v-container class="fill-height" fluid>
            <v-row align="center" justify="center">
                <v-col cols="12" sm="8" md="8">
                    <v-card class="elevation-12">
                        <v-window v-model="step">
                            <v-window-item :value="1">
                                <v-row>
                                    <v-col cols="12" md="8">
                                        <v-card-text class="mt-12">
                                            <h1 class="text-center display-2 light-blue--text text--lighten-3"> <strong> DrugsOnline </strong> </h1>
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

                                            <SnackNotification icon="check_circle_outline" color="green lighten-2" :snackbar="successData.showSuccess" :text="successData.message" />
                                            <SnackNotification icon="error_outline" color="red accent-2" :snackbar="errorData.showError" :text="errorData.message" />

                                            <v-form ref="form" v-model="valid" lazy-validation>
                                                <v-text-field label="Email" @keyup.enter.prevent="login" required :rules="formLogin.emailRules" name="email" prepend-icon="email" type="text" v-model="formLogin.email" />
                                                <v-text-field id="password" @keyup.enter.prevent="login" required :rules="formLogin.passwordRules" name="password" label="Password" prepend-icon="lock" type="password" v-model="formLogin.password" />
                                            </v-form>
                                            <h3 class="text-center mt-3"> Olvidaste tu contraseña ?</h3>

                                        </v-card-text>

                                        <div class="text-center mt-3 ">
                                            <v-btn @click="login" :disabled="!valid" rounded color="light-blue lighten-1" dark> Iniciar sesion </v-btn>
                                        </div>
                                    </v-col>
                                    <v-col cols="12" md="4" class="light-blue lighten-3">
                                        <v-card-text class="white--text mt-12">
                                            <h1 class="text-center display-1"> Hola, amigos!</h1>
                                            <h5 class="text-center"> Ingrese su informacion para iniciar con nosotros! </h5>
                                        </v-card-text>
                                        <div class="text-center">
                                            <v-btn rounded outlined dark @click="step++">Registrarse </v-btn>
                                        </div>
                                    </v-col>
                                </v-row>
                            </v-window-item>
                            <v-window-item :value="2">
                                <v-row class="fill-height">
                                    <v-col cols="12" md="4" class="light-blue lighten-3">
                                        <v-card-text class="white--text mt-12">
                                            <h1 class="text-center display-1"> Regresar atras</h1>
                                            <h5 class="text-center"> Para mantener conectado con nosotros ! </h5>
                                        </v-card-text>
                                        <div class="text-center">
                                            <v-btn rounded outlined dark @click="step--"> Ir al login</v-btn>
                                        </div>
                                    </v-col>
                                    <v-col cols="12" md="8">
                                        <v-card-text class="mt-12">
                                            <h1 class="text-center display-2 light-blue--text text--lighten-3"> <strong> Crear una nueva cuenta </strong> </h1>
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
                                            <h4 class="text-center mt-4"> Ten presente tu email para registrarte </h4>
                                            <SnackNotification icon="error_outline" color="red accent-2" :snackbar="errorData.showError" :text="errorData.message" />
                                            <v-form ref="form" @submit.prevent="signup" v-model="valid" lazy-iscreatedMessage>
                                                <v-select v-model="form.typeUser" :rules="form.rolesRules" :items="form.roles" menu-props="auto" label="Tipo de usuario" hide-details prepend-icon="supervisor_account" single-line required></v-select>
                                                <v-text-field label="Name" :rules="form.nameRules" name="Name" prepend-icon="person" type="text" v-model="form.name" required />
                                                <v-text-field label="Email" :rules="form.emailRules" name="Email" prepend-icon="email" type="text" v-model="form.email" required />
                                                <v-text-field label="Address" :rules="form.addressRules" name="Address" prepend-icon="ballot" type="text" v-model="form.address" required />
                                                <v-text-field label="Phone" :rules="form.phoneRules" name="Phone" prepend-icon="phone" type="text" v-model="form.phone" required />
                                                <v-text-field label="Password" :rules="form.passwordRules" name="Password" prepend-icon="lock" type="password" v-model="form.password" required />
                                            </v-form>

                                        </v-card-text>
                                        <div class="text-center mt-n5 ">
                                            <v-btn @click="signup" :disabled="!valid" rounded color="light-blue lighten-1" dark> Registrarse</v-btn>
                                        </div>

                                    </v-col>
                                </v-row>
                            </v-window-item>
                        </v-window>
                    </v-card>
                </v-col>
            </v-row>

        </v-container>

    </v-content>
</v-app>
</template>

<script>
import FooterComponent from '../components/FooterComponent'
//import Alert from '../components/Alert'
import SnackNotification from '../components/SnackNotification'
export default {
    name: 'LoginAndSignUp',
    components: {
        FooterComponent,
        //Alert,
        SnackNotification
    },
    data: () => ({
        step: 1,
        valid: true,
        errorData: {
            showError: false,
            message: ''
        },
        successData: {
            showSuccess: false,
            message: ''
        },
        form: {
            name: '',
            email: '',
            phone: '',
            address: '',
            password: '',
            typeUser: '',
            roles: [{
                    value: 'client',
                    text: 'cliente'
                },
                {
                    value: 'seller',
                    text: 'empresa'
                }
            ],
            emailRules: [
                v => !!v || 'E-mail is required',
                v => /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(v) || 'El email debe ser valido'
            ],
            passwordRules: [
                v => !!v || 'La contraseña es necesaria',
                v => v.length >= 6 || "La contraseña debe tener 6 caracteres como minimo"
            ],
            nameRules: [
                v => !!v || 'el nombre es requerido',
                v => v.length >= 3 || "El nombre debe tener tres caracteres como minimo"
            ],
            phoneRules: [
                v => !!v || 'El telefono es requerido',
                v => v.length === 10 || "Numero de celular invalido"
            ],
            addressRules: [
                v => !!v || "La direccion es requerida"
            ],
            rolesRules: [
                v => !!v || "El role es requerido"
            ]

        },
        formLogin: {
            email: '',
            password: '',
            passwordRules: [
                v => !!v || 'La contraseña es necesaria'
            ],
            emailRules: [
                v => !!v || 'El email es requerido',
                v => /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(v) || 'Ingresa un email valido'
            ]
        }
    }),
    props: {
        source: String
    },
    methods: {

        login() {
            this.showError = false;

            if (this.formLogin.email.length <= 0) {
                this.errorData.message = "El email es necesario para iniciar sesion";
                this.errorData.showError = true;
            }
            if (this.formLogin.password.length <= 0) {
                this.errorData.message = "La contraseña es  necesaria para iniciar sesion";
                this.errorData.showError = true;
            }
            var form = {

                email: this.formLogin.email.toLowerCase(),
                password: this.formLogin.password
            };

            this.$store
                .dispatch("login", form)
                .then(result => {

                    if (result.data.code == 200) {

                        if (result.data.user) {
                            this.$router.replace({
                                path: "/dashboard"
                            });
                        } else {
                            this.$refs.form.reset()
                            this.errorData.message = "Contraseña o correo incorrectas";
                            this.errorData.showError = true;
                            setTimeout(() => {
                                this.errorData.showError = false;
                            }, 3500);

                        }
                    } else {
                        console.log('No logueó por: ', result);
                        this.$refs.form.reset()
                        this.errorData.message = result.data.message;
                        this.errorData.showError = true;
                        setTimeout(() => {
                            this.errorData.showError = false;
                        }, 3500);

                    }
                });

        },
        signup() {

            var form = {
                name: this.form.name,
                email: this.form.email.toLowerCase(),
                phone: parseInt(this.form.phone),
                address: this.form.address,
                password: this.form.password,
                typeUser: this.form.typeUser
            }

            this.$store.dispatch('register', form)
                .then(result => {
                    if (result.data.code == 200) {
                        if (result.data.user) {
                            this.successData.message = "Usuario creado exitosamente"
                            this.successData.showSuccess = true
                            this.$refs.form.reset()
                            this.step--
                            setTimeout(() => {
                                this.successData.showSuccess = false
                            }, 3500);

                        } else {
                            this.errorData.message = "Ocurrió un error al registrarse por favor intente mas tarde";
                            this.errorData.showError = true;
                            this.$refs.form.reset()
                            setTimeout(() => {
                                this.errorData.showError = false;
                            }, 3500);

                        }
                    } else {
                        console.log('No logueó por: ', result);
                        this.errorData.message = result.data.message;
                        this.errorData.showError = true;
                        setTimeout(() => {
                            this.errorData.showError = false;
                        }, 3500);
                    }
                })
        }
    }
}
</script>
