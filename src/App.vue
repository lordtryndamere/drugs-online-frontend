<template>
<v-app>

    <v-content>
        <LoginAndSignUp />
    </v-content>
</v-app>
</template>

<script>
import LoginAndSignUp from './views/LoginAndSignUp'
export default {
    name: 'App',

    components: {
        LoginAndSignUp
    },

    data: () => ({
        //
    }),
};
</script>
