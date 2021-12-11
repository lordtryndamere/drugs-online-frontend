<template>
  <v-content class="fill-height" fluid>
    <HeaderComponent @test="getProducts" :user="user"   :nameDrug="nameDrug" />
    <ListProducts   @addToCart="addProduct" :products="list" />
       <Cart :productsCart="productsCart"/>

  </v-content>
</template>

<script>

import HeaderComponent from '../../components/HeaderComponent.vue'
import ListProducts from '../../components/products/ListProducts.vue'
import Cart from '../../components/cart/Cart.vue'
export default {
    name: 'DrogueriasProductos',
    components: {
        HeaderComponent,
        ListProducts,
        Cart
    },
    data: () => ({
        user: {},
        nameDrug:'',
        productsCart:[],
        idDrug:'',
        list:[]
    }),

    methods: {
        addProduct(product){
            console.log('llego el producto',product);
          this.productsCart.push({...product,quantity:0}) 

        },

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
        
        getProducts(item) {
      
             this.nameDrug = JSON.parse(localStorage.getItem('drug')).data.name
            this.$store
                .dispatch("getProducts",{filter:item, idDrug:JSON.parse(localStorage.getItem('drug')).data.idDrug})
                .then(drugs => {
                    if (drugs.data.code == 100) {
                        this.list = drugs.data.data.Products
                    } else {
                        this.list = []
                        console.log('No retorno  los productos por ', drugs);
                    }
                })
       

   
        }
    },

    mounted() {
        console.log(this.productsCart);
        this.getProfileUser()
        this.getProducts()
    }
}
</script>
