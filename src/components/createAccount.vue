<div
  v-if="toCreateAccount"
  class="create-account">
  <div class="container">
    <div class="input-container">
      <p class="input-text">Email:</p>
      <input
        id="email"
        v-model="email"
        class="input-box"
        type="email"
        name="email"
        @input="setEmail">
    </div>
    <div class="input-container">
      <p class="input-text">Password:</p>
      <input
        id="password"
        v-model="password"
        class="input-box"
        type="password"
        name="password"
        @input="setPassword">
    </div>
    <div class="input-container">
      <p class="input-text">Confirm Password:</p>
      <input
        id="passwordConfirm"
        v-model="passwordConfirm"
        class="input-box"
        type="password"
        name="passwordConfirm">
    </div>
    <button
      class="submit-button"
      @click="createAccount">
      Create Account
    </button>
  </div>
</div>

<script>
  import router from '@/router/index'
  import accountService from '@/services/account'

  export default {
    name: 'HelloWorld',
    computed: {
      email: {
        get () {
          return this.$store.state.email
        },
        set (value) {
          this.$store.commit('setEmail', value)
        }
      },
      password: {
        get () {
          return this.$store.state.password
        },
        set (value) {
          this.$store.commit('setPassword', value)
        }
      }
    },
    methods: {
      setEmail (e) {
        this.$store.commit('setEmail', e.target.value)
      },
      setPassword (e) {
        this.$store.commit('setPassword', e.target.value)
      },
      createAccount() {
        let data = {
          email:this.$store.state.email,
          password: this.$store.state.password
        };

        accountService.postAccount(data)
          .then(response => {
            this.result = response.data,
              this.$store.commit('setIsLoggedIn', true)
            router.push('/home')
          });
      }
    }
  }

</script>
