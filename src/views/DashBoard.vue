<template>
<div class="hola">

    <HeaderComponent :user="user" />
    <h2>Bienvenido a drugs online </h2>

</div>
</template>

<script>
//import FooterComponent from '../components/FooterComponent'
import HeaderComponent from '../components/HeaderComponent'
export default {
    name: 'DashBoard',
    components: {
        //      FooterComponent,
        HeaderComponent
    },
    data: () => ({
        user: {}
    }),
    methods: {
        getProfileUser() {
            this.$store
                .dispatch("getprofile")
                .then(profile => {
                    console.log(profile);
                    if (profile.data.code == 200) {
                        this.user = profile.data.findUser
                    } else {
                        this.user = "undefined"
                        console.log('No retorno el usuario por ', profile);
                    }
                })
        }
    },

    mounted() {
        this.getProfileUser()
    }
}
</script>
