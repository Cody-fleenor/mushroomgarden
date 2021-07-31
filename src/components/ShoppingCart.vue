<template>
 <v-container>
  <v-row>
   <v-col cols=12><h1>Your Shopping Cart</h1></v-col>
  </v-row>
  <v-row>
   <v-col cols="12">
    <v-list>
      <v-list-item style="padding-top: 25px;" v-for="(item, index) in cart" :key="index">
        <v-row>
          <v-col cols="6"><v-img contain style="max-width: 100px; max-height: 100px;" :src="item.img"></v-img></v-col>
          <v-col cols="6" style="text-align: right;">
            <h3>{{item.item}}</h3>
            <h4>${{item.price}} x{{item.quantity}} = ${{item.price * item.quantity}}</h4>
            <v-btn small text style="text-transform: none;">
              Remove
            </v-btn>
          </v-col>
        <!-- <v-row>
          <v-col cols="6">{{item.price}}</v-col>
          <v-col cols="6">{{item.quantity}}</v-col>
        </v-row> -->
        </v-row>
      </v-list-item>
    </v-list>
   </v-col>
  </v-row>
  <v-row>
   <v-col cols=12>Total</v-col>
  </v-row>
  <v-row>
   <v-col cols=12>Shipping</v-col>
  </v-row>
  <v-row>
   <v-col cols=12>Payment</v-col>
  </v-row>
 </v-container>
</template>

<script>
export default {
 data: () => ({
   cart: [
    {
     item: "Lorem",
     price: 1.50,
     quantity: 4,
     img: "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg",
    },
    {
     item: "Lorem",
     price: 1.50,
     quantity: 4,
     img: "https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg",
    },
    {
     item: "Lorem",
     price: 1.50,
     quantity: 4,
     img: "https://fakestoreapi.com/img/71YXzeOuslL._AC_UY879_.jpg",
    },
    {
     item: "Lorem",
     price: 1.50,
     quantity: 4,
     img: "https://fakestoreapi.com/img/61mtL65D4cL._AC_SX679_.jpg",
    },
   ]
 })
}
</script>

<style>

</style>