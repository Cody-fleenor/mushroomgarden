<template>
  <v-app>
    <v-container fluid style="margin: 0px; padding: 0px;">
      <Nav/>
    </v-container>
    <v-main style="margin-bottom: 15px;">
      <router-view />
    </v-main>
    <v-container fluid style="margin: 0px; padding: 25px;">
      <Footer/>
    </v-container>
  </v-app>
</template>

<script>
import Nav from "../src/components/Nav.vue";
import Footer from "../src/components/Footer.vue";
/* eslint-disable */
export default {
  name: "App",
  components: {
    Nav,
    Footer
  },
  data: () => ({
    //
  }),
};
</script>
