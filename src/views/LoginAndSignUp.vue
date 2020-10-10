<template>
<v-app>
    <v-content>
        <v-container class="fill-height" fluid="">
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
                                            <v-form>
                                                <v-text-field label="Email" name="email" prepend-icon="email" type="text" v-model="formLogin.email" />
                                                <v-text-field id="password" label="Password" name="Password" prepend-icon="lock" type="password" v-model="formLogin.password" />
                                            </v-form>
                                            <h3 class="text-center mt-3"> Olvidaste tu contraseña ?</h3>
                                        </v-card-text>
                                        <div class="text-center mt-3 ">
                                            <v-btn rounded color="light-blue lighten-1" dark> Iniciar sesion </v-btn>
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
                                            <v-form @submit.prevent="signup">
                                                <v-select v-model="form.typeUser" :items="form.roles" menu-props="auto" label="Tipo de usuario" hide-details prepend-icon="supervisor_account" single-line></v-select>
                                                <v-text-field label="Name" name="Name" prepend-icon="person" type="text" v-model="form.name" />
                                                <v-text-field label="Email" name="Email" prepend-icon="email" type="text" v-model="form.email" />
                                                <v-text-field label="Address" name="Address" prepend-icon="ballot" type="text" v-model="form.address" />
                                                <v-text-field label="Phone" name="Phone" prepend-icon="phone" type="text" v-model="form.phone" />
                                                <v-text-field label="Password" name="Password" prepend-icon="lock" type="password" v-model="form.password" />
                                            </v-form>

                                        </v-card-text>
                                        <div class="text-center mt-n5 ">
                                            <v-btn type="submit" rounded color="light-blue lighten-1" dark> Registrarse</v-btn>
                                        </div>

                                    </v-col>
                                </v-row>
                            </v-window-item>
                        </v-window>
                    </v-card>
                </v-col>
            </v-row>

        </v-container>
        <FooterComponent />
    </v-content>
</v-app>
</template>

<script>
import FooterComponent from '../components/FooterComponent'
export default {
    name: 'LoginAndSignUp',
    components: {
        FooterComponent
    },
    data: () => ({
        step: 1,
        isRegister: false,
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

        },
        formLogin: {
            email: '',
            password: ''
        }
    }),
    props: {
        source: String
    }
}
</script>
