<template>
<v-app>
    <v-main>
        <router-view> </router-view>
    </v-main>
</v-app>
</template>

<script>
//import LoginAndSignUp from './views/LoginAndSignUp'
export default {
    name: 'App',

    components: {

    },
    mounted:function(){
     this.getAccessToken();
    },
    data: () => ({
        //
    }),
    methods:{
        getAccessToken(){
        this.$store.dispatch('getAccessToken',{}).then(response=>{
          if(response.code==100){
           console.log('access token getter');
          }
        });
        }
    }
};
</script>
