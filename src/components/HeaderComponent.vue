<template>
<v-toolbar color="light-blue lighten-3" dark>
    <v-toolbar-title>DrugsOnline</v-toolbar-title>

    <v-divider class="mx-4" vertical></v-divider>

    <span class="subheading">Bienvenido {{user.name}} </span>

    <v-spacer></v-spacer>

    <v-toolbar-items class="hidden-sm-and-down">
        <v-btn text>
            <router-link to="/userlist">Usuarios</router-link>
        </v-btn>

        <v-divider vertical></v-divider>

        <v-btn text>
            Farmacias
        </v-btn>

        <v-divider vertical></v-divider>

        <v-btn text>
            About
        </v-btn>

        <v-divider vertical></v-divider>
        <v-btn text>
            Logout
        </v-btn>

        <v-divider vertical></v-divider>

    </v-toolbar-items>

    <v-app-bar-nav-icon></v-app-bar-nav-icon>
</v-toolbar>
</template>

<script>
export default {
    name: 'HeaderComponent',
    props: {
        user: Object
    }

}
</script>
