<template>
 <v-container style="margin: 0px; padding: 0px; max-height: auto; max-width: 100%; background-color: white;">
  <hero-gallery />
  <v-row style="margin: 5px; padding: 5px;">
   <v-col cols="12">
    <h3>Featured Items</h3>
   </v-col>
   <v-col sm="12" md="6" lg="4" v-for="(product, id) in products.slice(0, 3)" :key="id">
    <v-card style="min-height: 350px; min-width: 300px;">
     <v-row >
      <v-col cols="12">
       <v-card-title class="text-wrap">{{product.title}}</v-card-title>
       <v-card-subtitle>{{product.category}}</v-card-subtitle>
      </v-col>
     </v-row>
     <v-row>
      <v-col justify="center" align="center" cols="6">
       <v-img style="max-height: 150px; max-width: 150px;" contain :src="product.image"></v-img>
      </v-col>
      <v-col cols="6">
       <v-card-text>${{product.price}}</v-card-text>
       <v-btn
        @click="toCart(item)" 
        style="text-transform: none;" 
        small 
        elevation="0" 
        dark 
        color="#99CC63"
       >
        Buy Now
       </v-btn>
       <v-btn style="text-transform: none;" small text>See More</v-btn>
      </v-col>
     </v-row>
    </v-card>
   </v-col>
  </v-row>
  <v-row style="margin: 5px; padding: 5px;">
   <v-col cols="12">
    <h3>On Sale!</h3>
   </v-col>
   <v-col sm="12" md="6" lg="4" v-for="(product, id) in products.slice(4, 7)" :key="id">
    <v-card style="min-height: 350px; min-width: 300px;">
     <v-row no-gutters>
      <v-col cols="12">
       <v-card-title class="text-wrap">{{product.title}}</v-card-title>
       <v-card-subtitle>{{product.category}}</v-card-subtitle>
      </v-col>
     </v-row>
     <v-row>
      <v-col justify="center" align="center" cols="6">
       <v-img style="max-height: 150px; max-width: 150px;" contain :src="product.image"></v-img>
      </v-col>
      <v-col cols="6">
       <v-card-text>${{product.price}}</v-card-text>
       <v-btn
        @click="toCart(item)" 
        style="text-transform: none;" 
        small 
        elevation="0" 
        dark 
        color="#99CC63"
       >
        Buy Now
       </v-btn>
       <v-btn style="text-transform: none;" small text>See More</v-btn>
      </v-col>
     </v-row>
    </v-card>
   </v-col>
  </v-row>
 </v-container>
</template>

<script>
import HeroGallery from './HeroGallery.vue'
export default {
  components: { HeroGallery },
  data: () => ({
  products:[],
  }),
 mounted() {
  fetch("https://fakestoreapi.com/products")
    .then((res) => res.json())
    .then((res) => (this.products = res))
    .then((json) => console.log(json));
 },
}
</script>

<style>

</style>