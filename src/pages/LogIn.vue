<template>
  <section>
    <div class="hello">
      <h1>{{ msg }}</h1>
      <h2>Please create an account</h2>
    </div>
    <div>
      <div>
        <button
        @click="UserCreateAccount">
          create account
        </button>
        <button
        @click="UserSignIn">
          Sign In
        </button>
      </div>
      <div
        v-if="!toCreateAccount"
        class="sign-in">
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
      </div>
      <div
        v-if="toCreateAccount"
        class="create-account">
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
              id="password1"
              name="password1"
              v-model="password"
              @input="setPassword">
          </div>
          <div class="input-container">
            <p class="input-text">Confirm Password:</p>
            <input
              class="input-box"
              type="password"
              id="password2"
              name="password2">
          </div>
          <button
            class="submit-button"
            @click="IsSignedIn">
            Sign In</button>
        </div>
      </div>
    </div>
    <p>your name is {{email}}</p>
    <p> Thanks for creating your account </p>
  </section>
</template>

<script>
import router from '@/router/index'

export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Login page',
      toCreateAccount: false
    }
  },
  // props: {
  //   toCreateAccount: {
  //     type: Boolean,
  //     default: false
  //   }
  // },
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
    UserSignIn () {
      this.toCreateAccount = false
      console.log('signInButton')
      console.log(this.toCreateAccount)
    },
    UserCreateAccount () {
      this.toCreateAccount = true
      console.log('createAccountButton')
      console.log(this.toCreateAccount)
    },
    setEmail (e) {
      console.log('set email method')
      this.$store.commit('setEmail', e.target.value)
    },
    setPassword (e) {
      console.log('set password method')
      this.$store.commit('setPassword', e.target.value)
    },
    IsSignedIn () {
      if (this.$store.state.email && this.$store.state.password) {
        this.$store.commit('setIsLoggedIn', true)
        console.log('signed in', this.$store.state.isLoggedIn)
        router.push('/home/homePage')
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
