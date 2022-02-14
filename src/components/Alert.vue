<template>
<v-alert :type="type" dismissible> {{text}} </v-alert>
</template>

<script>
export default {
    name: 'Alert',
    props: {
        type: String,
        text: String
    }
}    
</script>>
