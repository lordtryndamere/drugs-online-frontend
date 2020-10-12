<template>
<v-content>
    <v-toolbar color="light-blue lighten-1" dark>
        <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
        <v-toolbar-title>{{user.name}}</v-toolbar-title>

        <v-divider class="mx-4" vertical></v-divider>

        <v-spacer></v-spacer>

        <v-toolbar-items class="hidden-sm-and-down">
            <v-divider vertical></v-divider>

            <v-btn text>
                Ayuda
            </v-btn>

            <v-divider vertical></v-divider>
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
                <v-list-item-title v-if="user.name"> {{user.name}} </v-list-item-title>
                <v-list-item-title v-else> "Undefined user" </v-list-item-title>
            </v-list-item-content>
        </v-list-item>

        <v-divider></v-divider>

        <v-list dense>
            <v-list-item v-for="item in items" :key="item.title" link>
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
        user: Object
    },
    data: () => ({
        drawer: null,
        items: [{
                title: 'Home',
                icon: 'mdi-view-dashboard'
            },
            {
                title: 'About',
                icon: 'mdi-forum'
            },
        ],
    }),
    methods: {
        logout() {
            this.$store.dispatch("logout");
            this.$router.push('/')
        },
    },

}
</script>
