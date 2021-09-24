<template>
  <v-container style="background-color: white">
    <v-form ref="form" v-model="valid" lazy-validation>
      <v-text-field
        v-model="name"
        :counter="10"
        :rules="nameRules"
        label="Name"
        required
      ></v-text-field>

      <v-text-field
        v-model="email"
        :rules="emailRules"
        label="E-mail"
        required
      ></v-text-field>

      <v-textarea label="Type your message here"></v-textarea>

      <v-checkbox
        v-model="checkbox"
        color="red darken-3"
        label="Can we contact you about special offers?"
      ></v-checkbox>

      <v-btn
        style="text-transform: lowercase"
        dark
        :disabled="!valid"
        depressed
        color="#99CC63"
        class="mr-4"
        @click="validate"
      >
        Send
      </v-btn>
      <v-btn
        style="text-transform: lowercase"
        text
        color="error"
        class="mr-4"
        @click="reset"
      >
        Clear
      </v-btn>
    </v-form>
  </v-container>
</template>

<script>
export default {
  data: () => ({
    valid: true,
    name: "",
    nameRules: [
      (v) => !!v || "Name is required",
      (v) => (v && v.length <= 10) || "Name must be less than 10 characters",
    ],
    email: "",
    emailRules: [
      (v) => !!v || "E-mail is required",
      (v) => /.+@.+\..+/.test(v) || "E-mail must be valid",
    ],
    select: null,
    items: ["Item 1", "Item 2", "Item 3", "Item 4"],
    checkbox: false,
  }),

  methods: {
    validate() {
      this.$refs.form.validate();
    },
    reset() {
      this.$refs.form.reset();
    },
    resetValidation() {
      this.$refs.form.resetValidation();
    },
  },
};
</script>
