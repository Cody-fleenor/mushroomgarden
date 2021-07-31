<template>
  <v-dialog
    v-model="dialog"
    width="500"
  >
  <template v-slot:activator="{ on, attrs }">
    <v-btn
      color="#FF9898"
      dark
      text
      v-bind="attrs"
      v-on="on"
    >
      <v-icon>
      mdi-shopping
      </v-icon>   
    </v-btn>
  </template>
  <v-container style="background-color: #FF9898;">
    <v-card style="color: rgba(0, 0, 0, 0.87);">
    <v-card-title>Your Shopping Cart</v-card-title>
    <v-card-text>
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
    </v-card-text>
    <v-card-actions>
      <router-link style="margin: 5px; text-decoration: none;" to="/buggie">
      <v-btn text style="text-transform: none; background-color: #99CC63;" @click="dialog = false">
        View Cart
      </v-btn>
      </router-link>
      <v-btn
        style="margin: 5px; text-transform: none; background-color: #DD2E44;"
        color="white"
        text
        @click="dialog = false"
      >
        Close
      </v-btn> 
    </v-card-actions>
    </v-card>
  </v-container>
  <v-spacer></v-spacer>    
  </v-dialog>
</template>

<script>
export default ({
 data: () => ({
   dialog: false,
   cart:[
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
 }),
})
</script>