<template>
  <v-footer v-bind="localAttrs" :padless="padless">
    <v-card flat tile color="#FF9898" width="100%" class="text-center">
      <v-card-text>
        <v-btn text color="white" style="text-transform: none"> Home </v-btn>
        <v-dialog v-model="dialog">
          <template v-slot:activator="{ on, attrs }">
            <v-btn
              text
              color="white"
              style="text-transform: none"
              v-bind="attrs"
              v-on="on"
            >
              Contact Us
            </v-btn>
          </template>
          <v-card>
            <contact />
          </v-card>
          <v-btn
            text
            style="background-color: #dd2e44"
            color="white"
            @click="dialog = false"
          >
            Close
          </v-btn>
        </v-dialog>
        <v-btn text color="white" style="text-transform: none">
          Facebook
        </v-btn>
        <v-btn text color="white" style="text-transform: none">
          Instagram
        </v-btn>
      </v-card-text>
    </v-card>
  </v-footer>
</template>

<script>
import Contact from "./Contact.vue";
export default {
  components: { Contact },
  data: () => ({
    dialog: false,
    items: ["default", "absolute", "fixed"],
    padless: true,
    variant: "absolute",
  }),
  computed: {
    localAttrs() {
      const attrs = {};

      if (this.variant === "default") {
        attrs.absolute = false;
        attrs.fixed = false;
      } else {
        attrs[this.variant] = true;
      }
      return attrs;
    },
  },
};
</script>
