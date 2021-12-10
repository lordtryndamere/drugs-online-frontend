<template>
<v-app>
    <v-content>
        <router-view> </router-view>
    </v-content>
</v-app>
</template>

<script>
//import LoginAndSignUp from './views/LoginAndSignUp'
export default {
    name: 'App',

    components: {

    },

    data: () => ({
        //
    }),
};
</script>
<style lang="css">
.login-body {

    background-color: aqua;



}
</style>