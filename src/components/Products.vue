<template>
 <v-container fluid>
  <v-row no-gutters>
  <v-row style="margin: 10px; padding: 5px;">
    <v-col cols="12">
      <v-text-field
        v-model="search"
        outlined
        style="border-radius: 10px;"
        label="Search"
        hide-details="auto"
        append-icon="mdi-magnify"
      >
      </v-text-field>
    </v-col>
    <v-col sm="12" md="2">
      <h5>Categories:</h5>
      <v-btn text v-for="(categorie, key) in categories" :key="key" @click='filter'>
       <h4 style="text-transform: none; text-decoration: none; color: #DD2E44; display: flex; justify-content: left;" :to="categorie.url">
         {{categorie.name}}
       </h4>
      </v-btn>
      <!-- <v-list style="display: block; max-width: 100px;" v-for="(categorie, key) in categories" :key="key">
        <v-list-item>
          <router-link style="text-transform: none; text-decoration: none; color: #DD2E44;" :to="categorie.url">
            {{categorie.name}}
          </router-link>
        </v-list-item>
      </v-list> -->
    </v-col>
    <v-col sm="12" md="10">
       <div v-if="!isloaded" class="page-loader">
         <div class="cube"></div>
         <div class="cube"></div>
         <div class="cube"></div>
         <div class="cube"></div>
       </div>
      <v-row v-if="isloaded"> 
        <v-col sm="12" md="6" v-for="(product, id) in filteredItems" :key="id">
          <v-card style="min-height: 350px;">
            <v-row no-gutters>
            <v-col cols="12">
              <v-card-title class="text-wrap">{{product.title}}</v-card-title>
              <v-card-subtitle>{{product.category}}</v-card-subtitle>
            </v-col>
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
    </v-col>
  </v-row>
  </v-row>
 </v-container>
</template>

<script>
import _ from 'lodash';

export default {
  data: () => ({
    selected: [2],
    search: '',
    isloaded: false,
    products: [
    ],
    categories: [
      {
        'name': "Men's",
        'url': '/'
      },
      {
        'name': "Women's",
        'url': '/'
      },
      {
        'name': "Children's",
        'url': '/'
      },
      {
        'name': "Shoes",
        'url': '/'
      },
      {
        'name': "Jewerly",
        'url': '/'
      }
    ]
  }),

 mounted() {
  fetch("https://fakestoreapi.com/products")
    .then((res) => res.json())
    .then((res) => (this.products = res))
    .then((json) => console.log(json));
    setTimeout(() => {
      this.isloaded = true;
    }, 2500)
 },
  computed: {
      filteredItems() {
          return _.orderBy(this.products.filter(product => {
              return product.title.toLowerCase().includes(this.search.toLowerCase()) ||
                  product.action.toLowerCase().includes(this.search.toLowerCase()) ||
                  product.headline.toLowerCase().includes(this.search.toLowerCase()) ||
                  product.subtitle.toLowerCase().includes(this.search.toLowerCase());
          }), 'title');
      }
  },
  methods: {
   filter(){
    const api = `https://fakestoreapi.com/products/category/${this.selection}`
    fetch(api)
     .then(res => res.json())
     .then((res) => (this.products = res))
     .then(json => console.log(json))
   },
    toCart(product) {
      this.$store.commit("change", product);
      console.log(product);
    },
    myConsoleLog() {
      console.log(this.toCart);
    },
    toggle(index) {
      const i = this.selected.indexOf(index)
      if (i > -1) {
        this.selected.splice(i, 1)
      } else {
        this.selected.push(index)
    }
    }
  }, 
}
</script>

<style lang="scss" scoped>
$colors:  #FF9898, #DD2E44, #75924B, #99CC63;
.articlebody {
  text-align: left;
  color: white;
}
.v-btn {
  text-transform: none;
}
.page-loader {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  background-color: white;
}
.cube {
  width: 40px;
  height: 40px;
  margin-right: 10px;

  @for $i from 1 through length($colors) {
    &:nth-child(#{$i}) {
      background-color: nth($colors, $i);
    }
  }
  &:first-child {
    animation: left 1s infinite;
  }
  &:last-child {
    animation: right 1s infinite .5s;
  }
}

@keyframes left {
  40% {
    transform: translateX(-60px);
  }
  50% {
    transform: translateX(0)
  }
}
@keyframes right {
  40% {
    transform: translateX(60px);
  }
  50% {
    transform: translateX(0)
  }
}
.v-card__text, .v-card__title {
  word-break: normal; /* maybe !important  */
}
</style>