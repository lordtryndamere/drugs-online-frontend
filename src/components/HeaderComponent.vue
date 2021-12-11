<template>
<v-content>
    <v-toolbar color="light-blue lighten-1" dark>
        <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
        <v-toolbar-title  >{{nameDrug?nameDrug:user.fullName}}</v-toolbar-title>

        <v-divider class="mx-4" vertical></v-divider>

        <v-spacer></v-spacer>
        <v-text-field prepend-icon="search" v-model="search"     @input='sendSearch'  label="Buscar productos,farmacias y mas ..." solo-inverted hide-details clearable clear-icon="mdi-close-circle-outline"></v-text-field>
        <v-spacer></v-spacer>
        <v-toolbar-items class="hidden-sm-and-down">

            <v-btn @click="logout" text>
                <strong>
                    <v-icon>power_settings_new</v-icon>
                    Salir
                </strong>
            </v-btn>

        </v-toolbar-items>

    </v-toolbar>

    <v-navigation-drawer v-model="drawer" temporary app>
        <v-list-item>
            <v-list-item-avatar>
                <v-img src="https://randomuser.me/api/portraits/men/78.jpg"></v-img>
            </v-list-item-avatar>

            <v-list-item-content>
                <v-list-item-title v-if="user.fullName      "> {{user.fullName}} </v-list-item-title>
                <v-list-item-title v-else> "Undefined user" </v-list-item-title>
            </v-list-item-content>
        </v-list-item>

        <v-divider></v-divider>

        <v-list shaped>
            <v-list-item v-for="item in items" :key="item.title" @click="goToRouter(item)">
                <v-list-item-icon>
                    <v-icon>{{ item.icon }}</v-icon>
                </v-list-item-icon>

                <v-list-item-content>
                    <v-list-item-title>{{ item.title }}</v-list-item-title>
                </v-list-item-content>
            </v-list-item>
        </v-list>
    </v-navigation-drawer>
</v-content>
</template>

<script>
export default {
    name: 'HeaderComponent',
    props: {
        user: Object,
        nameDrug:String
    },
    
    data: () => ({
        search:'',
        drawer: null,
        items: [{
                title: 'Droguerias',
                icon: 'mdi-bank-outline',
                value: 'Droguerias'
            },
            {
                title: 'Mis pedidos',
                icon: 'mdi-cart',
                value: 'DashBoard'
            },
              {
                title: 'Tarjetas',
                icon: 'mdi-cards',
                value: 'DashBoard'
            },
            {
                title: 'Mi Perfil',
                icon: 'mdi-account',
                value: 'Profile'
            },
            {
                title: 'Ayuda',
                icon: 'mdi-chat-alert',
                value: 'DashBoard'
            },
            {
                title: 'Salir',
                icon: 'mdi-account-cash-outline',
                value: 'Login'
            },
        ],
    }),
    methods: {
        logout() {
            this.$store.dispatch("logout");
            this.$router.push('/')
        },
        goToRouter(item){
            if(item.value=='Login'){
            this.$store.dispatch("logout");
            this.$router.push('/')
            }
            this.$router.push({name:item.value,params:{}})
        },
        sendSearch(){
            
            this.$emit('test',this.search)
        }


    },





}
</script>
