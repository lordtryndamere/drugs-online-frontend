<template>
<v-content class="fill-height" fluid>

    <HeaderComponent :user="user" />
    <Slider />

</v-content>
</template>

<script>
import FooterComponent from '../../components/FooterComponent'
import HeaderComponent from '../../components/HeaderComponent'
import Slider from '../../components/Slider'
export default {
    name: 'DashBoard',
    components: {
        //FooterComponent,
        HeaderComponent,
        Slider
    },
    data: () => ({
        user: {}
    }),
    methods: {
        getProfileUser() {
            this.$store
                .dispatch("getprofile")
                .then(profile => {
                    if (profile.data.code == 100) {
                        this.user = profile.data.data.user
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
