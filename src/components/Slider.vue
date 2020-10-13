<template>
<v-carousel cycle height="400" hide-delimiter-background show-arrows-on-hover>

    <v-carousel-item v-for=" (item, i) in items" :key="i" reverse-transition="fade-transition" :src="item.src" transition="fade-transition">

    </v-carousel-item>
</v-carousel>
</template>

<script>
export default {
    name: 'Slider',
    data() {
        return {
            items: [{
                    src: 'https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg',
                },
                {
                    src: 'https://cdn.vuetifyjs.com/images/carousel/sky.jpg',
                },
                {
                    src: 'https://cdn.vuetifyjs.com/images/carousel/bird.jpg',
                },
                {
                    src: 'https://cdn.vuetifyjs.com/images/carousel/planet.jpg',
                },

            ],

        }
    },
    methods: {

    }
}
</script>
