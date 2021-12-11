<template>
  <v-content class="fill-height" fluid>
    <HeaderComponent @test="getDrugs" :user="user" />
    <ListDroguerias   uerias :droguerias="list" />
  </v-content>
</template>

<script>

import HeaderComponent from '../../components/HeaderComponent.vue'
import ListDroguerias from '../../components/droguerias/ListDroguerias.vue'
export default {
    name: 'Droguerias',
    components: {
        HeaderComponent,
        ListDroguerias
    },
    data: () => ({
        user: {},
        list:[]
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
        },
     
        getDrugs(value) {
         
            this.$store
                .dispatch("getDrugs",{filter:value})
                .then(drugs => {
                    if (drugs.data.code == 100) {
                        this.list = drugs.data.data.drugs
                    } else {
                        this.list = []
                        console.log('No retorno  las droguerias por ', drugs);
                    }
                })
        }
    },

    mounted() {
        this.getProfileUser()
        this.getDrugs()
    }
}
</script>
