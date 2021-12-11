<template>
  <v-container>
    <h2 class="display-2 mb-4">Mis Productos</h2>

    <v-list three-line>
      <template v-for="(product, index) in productsCart">
        <v-list-tile :key="product.id" avatar>
          <v-list-tile-avatar>
            <img        style="border-radius: 100%;"      height="100px"  :src="product.img">
          </v-list-tile-avatar>

          <v-list-tile-content>
            <v-list-tile-title v-html="product.name"></v-list-tile-title>
            <v-list-tile-sub-title v-html="product.description"></v-list-tile-sub-title>
          </v-list-tile-content>

          <v-list-tile>
            {{product.price}}
          </v-list-tile>

          <v-list-tile-action>
            <v-text-field label="Quantity" reverse :value="product.quantity"></v-text-field>
          </v-list-tile-action>

          <v-list-tile>
            {{product.price}}$
          </v-list-tile>

          <v-list-tile-action>
            <v-btn @click="deleteOfCart(index)" icon ripple>
              <v-icon color="red lighten-1">delete</v-icon>
            </v-btn>
          </v-list-tile-action>
        </v-list-tile>

        <v-divider v-if="index + 1 < productsCart.length" :key="index"></v-divider>
      </template>
    </v-list>

    <v-container>
      <v-btn color="success" larger style="float: right;">Ir a pagar</v-btn>
    </v-container>
  </v-container>
</template>

<script>
  export default {
    name: "Cart",
    data: () => ({

    }),
    props:{
        productsCart:Array
    },
    methods:{
        deleteOfCart(index){
            this.productsCart.splice(index,1)
        }
    }
  }
</script>

<style scoped>

</style>
