<template>
<v-container style="background-color: white;">
   <v-list style="align-items: left;">
    <v-list-item
      style="display: block; width: auto;"
      v-for="(item, index) in items"
      :key="index"
    >
     <router-link style="text-decoration: none;" :to="item.title">
       <v-btn
         color="grey"
         dark
         style="text-transform: none; display: block; width: 100%; padding: 0px; margin: 0px;"
         text
         v-bind="attrs"
         v-on="on"
       >
         {{item.name}}
       </v-btn>
     </router-link>
     </v-list-item>
    <v-list-item style="text-transform: none; background-color: white; display: block; width: 100%; padding: 0px; margin: 0px;">
     <v-dialog
       v-model="dialog"
     >
      <template v-slot:activator="{ on, attrs }">
        <v-btn
          color="grey"
          dark
          style="text-transform: none; display: block; width: 100%;"
          text
          v-bind="attrs"
          v-on="on"
        >
          Contact Us
        </v-btn>
      </template>
      <Contact />
       <v-btn
         text
         style="background-color: #DD2E44;"
         color="white"
         @click="dialog = false"
       >
         Close
       </v-btn>     
     </v-dialog>
    </v-list-item>
  </v-list>
</v-container>
</template>

<script>
import Contact from './Contact.vue'
export default ({
 components: { Contact },
 data: () => ({
   items: [
     { title: '/home',
       name: 'Home' 
      },
     { title: '/about', 
       name: 'About'
      },
     { title: '/products', 
       name: 'Products'
      },
   ],
   dialog: false,
 }),
})
</script>