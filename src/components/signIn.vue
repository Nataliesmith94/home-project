<section>
  <sign-in></sign-in>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h2>Please create an account</h2>
  </div>
  <div class="container">
    <div class="input-container">
      <p class="input-text">Email:</p>
      <input
        class="input-box"
        type="email"
        id="email"
        name="email"
        v-model="email"
        @input="setEmail">
    </div>
    <div class="input-container">
      <p class="input-text">Password:</p>
      <input
        class="input-box"
        type="password"
        id="password"
        name="password"
        v-model="password"
        @input="setPassword">
    </div>
    <button
      class="submit-button"
      @click="IsSignedIn">
      Create Account</button>
  </div>
</section>

<script>
import router from '@/router/index'

export default {
  name: 'SignIn',
  data () {
    return {
      msg: 'This is the Login page'
    }
  },
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
    IsSignedIn () {
      if (this.$store.state.email && this.$store.state.password) {
        this.$store.commit('setIsLoggedIn', true);
        router.push('HomePage')
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  h1, h2 {
    font-weight: normal;
  }

  .container {
    display: inline-block;
    justify-content: center;
    width: 50%;
  }

  .input-container{
    display: block;
  }

  .input-box {
    width: 100%;
    height: 30px;
    border: 1px solid grey;
  }

  .input-text {
    margin: 20px 0px 5px 0;
    text-align: left;
    width: 100%;
  }

  .submit-button {
    margin: 15px;
    padding: 15px;
    font-size: 12px;
    border: 1px solid grey;
    background-color: mediumseagreen;
  }
</style>
