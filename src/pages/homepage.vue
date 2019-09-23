<template>
  <div>
    <h1>{{ account }}*****new</h1>
    <!--    <p>{{ greeting2 }}</p>-->
    <h2>page rendered</h2>
    <p>Email Address: {{ email }}</p>
    <p>Name: {{ firstName }}</p>
  </div>
</template>

<script>
import accountService from '@/services/account'

export default {
  data () {
    return {
      account: {},
      firstName: ''
    }
  },

  computed: {
    email: {
      get () {
        return this.$store.state.email
      }
    }
  },
  async mounted () {
    this.account = (await accountService.getData(this.email)).data
    this.firstName = (await  accountService.getFirstName(this.email)).data    // this.greeting2 = (await accountService.getPersonalisedData('natalie')).data
  }
}
</script>
