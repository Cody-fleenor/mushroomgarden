<template>
  <v-app-bar>
    <v-menu offset-y>
      <template v-slot:activator="{ on, attrs }">
        <v-btn
          text
          v-bind="attrs"
          v-on="on"
          style="color: #ff9898; display: block; max-width: auto"
        >
          <v-icon> mdi-menu </v-icon>
        </v-btn>
      </template>
      <NavMenu />
    </v-menu>
    <v-spacer></v-spacer>
    <h3 style="color: #ff9898">Mushroom Gardens</h3>
    <v-spacer></v-spacer>
    <NavCart />
  </v-app-bar>
</template>

<script>
import NavMenu from "../components/NavMenu.vue";
import NavCart from "../components/NavCart.vue";

/* eslint-disable */
export default {
 components: {
  NavMenu,
  NavCart
 },

 computed: {
   itemsInCart(){
     let cart = this.$store.getters.cartProducts;
     return cart.reduce((accum, item) => accum + item.quantity, 0)
   }
 }
}
</script>