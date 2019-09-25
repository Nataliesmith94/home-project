<template>
  <div>
    <h1>Email:: {{ getEmail }}</h1>
    <h1>First Name:: {{ getFirstName }}</h1>
    <h1>Surname:: {{ getSurname }}</h1>
  </div>
</template>

<script>
export default {
  data () {
    return {
      account: {},
      firstName: ''
    }
  },

  computed: {
    getEmail() {
      return this.$store.getters.EMAIL
    },
    getFirstName() {
      return this.$store.getters.FIRSTNAME
    },
    getSurname() {
      return this.$store.getters.SURNAME
    },
  },
  async mounted () {
    this.$store.dispatch('GET_ACCOUNT', this.$store.state.email)
  }
}
</script>
