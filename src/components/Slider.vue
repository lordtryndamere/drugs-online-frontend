<template>
<v-carousel cycle height="400" hide-delimiter-background show-arrows-on-hover>

    <v-carousel-item         height="180px" v-for=" (item, i) in products" :key="i.id" reverse-transition="fade-transition"  transition="fade-transition">
                      <v-card color="blue lighten-5" class="mx-auto" max-width="300">
                <v-img
                  class="white--text align-end"
                  height="180px"
                  :src="item.img"
                >
                </v-img>
                <v-card-title>
                  <h3 class="blue--text text--darken-0">
                    <strong> {{ item.name }} </strong>
                  </h3>
                </v-card-title>
                <v-card-subtitle class="pb-0">
                  <strong> {{ item.price }}</strong>
                </v-card-subtitle>

                <v-card-text class="text--primary">
                  <div>{{ item.description }}</div>

                  <div>{{ item.unitType }}</div>
                </v-card-text>

                <v-card-actions>
                  <v-btn
                    class="ma-2"
                    color="primary"
                    @click="addToCart(item)"
                    dark
                  >
                    Añadir
                    <v-icon dark right> mdi-plus-circle </v-icon>
                  </v-btn>
                </v-card-actions>
              </v-card>
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
  props: {
    products: Array,
  },
    methods: {

    }
}
</script>
