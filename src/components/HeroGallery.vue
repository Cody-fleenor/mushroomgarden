<template>
    <!-- <v-img
     height="400px"
     style="justify: center; background-color: #FF9898; margin: 0px; padding: 0px;"
     src="@/assets/images/banner.png" 
    >
      <v-container  style="text-align: start;">
        <h1 style="justify: center; align: center;">Freshly Picked & Locally Grown</h1>
        <h3 style="justify: center; align: center;">Since 1968</h3>
      </v-container>
    </v-img> -->
    <v-container fluid style="background-color: #FF9898;">
      <v-card align="center" justify="end" tile flat style="text-align: start; background-color: #FF9898; color: white; width: 100%; height: 200px;">
          <h1 class="justify-center">Freshly Picked & Locally Grown</h1>
          <h3 class="justify-center">Since 1968</h3>
      </v-card>
    </v-container>
</template>

<script>
  export default {
    data () {
      return {
        items: [
          {
            src: require('@/assets/images/1.png')
          },
          {
            src: require('@/assets/images/2.png')
          },
          {
            src: require('@/assets/images/3.png')
          },
        ],
      }
    },
  }
</script>

<style>

</style>