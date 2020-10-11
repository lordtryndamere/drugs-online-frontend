<template>
<div class="text-center ma-2">
    <v-snackbar v-model="snackbar" :color="color">

        <v-icon>{{icon}}</v-icon>
        {{ text }}

    </v-snackbar>
</div>
</template>

<script>
export default {
    name: 'SnackNotification',
    props: {
        text: String,
        snackbar: Boolean,
        color: String,
        icon: String
    }

}
</script>
