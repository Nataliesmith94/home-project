<template>
  <div>
    <h1>{{ greeting }}</h1>
    <p>{{greeting2}}</p>
    <h2>page rendered</h2>
    <p>Email Address: {{email}}</p>
  </div>
</template>

<script>
import accountService from '@/services/account'

export default {
  data () {
    return {
      greeting: '',
      greeting2: ''
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
    this.greeting = (await accountService.getData()).data
    this.greeting2 = (await accountService.getPersonalisedData('natalie')).data
  }
}
</script>
