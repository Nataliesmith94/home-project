<template>
  <section>
    <div class="hello">
      <h1>{{ msg }}</h1>
      <h2>Please create an account</h2>
    </div>
    <div>
      <div>
        <button
          class="button-tab"
          @click="UserCreateAccount">
          create account
        </button>
        <button
          class="button-tab"
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
          <button
            class="submit-button"
            @click="IsSignedIn">
            Create Account
          </button>
        </div>
      </div>
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
              id="passwordConfirm"
              v-model="password"
              class="input-box"
              type="password"
              name="passwordConfirm"
              @input="setPassword">
          </div>
          <div class="input-container">
            <p class="input-text">Confirm Password:</p>
            <input
              id="password2"
              class="input-box"
              type="password"
              name="password2">
          </div>
          <button
            class="submit-button"
            @click="IsSignedIn">
            Sign In
          </button>
        </div>
      </div>
    </div>
    <p>your name is {{ email }}</p>
    <button
      class="button-link"
      @click="IsAnonomous">
      continue without an account
    </button>
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
      this.$store.commit('setPassword', '');
      this.password = ''
    },
    UserCreateAccount () {
      this.toCreateAccount = true
      this.$store.commit('setPassword', '');
      this.password = ''
    },
    setEmail (e) {
      this.$store.commit('setEmail', e.target.value)
    },
    setPassword (e) {
      this.$store.commit('setPassword', e.target.value)
    },
    IsSignedIn () {
      if (this.$store.state.email && this.$store.state.password) {
        this.$store.commit('setIsLoggedIn', true);
        router.push('/home/homePage')
      }
    },
    IsAnonomous () {
      this.$store.commit('setIsLoggedIn', false);
      router.push('/home/homePage');
      this.$store.commit('setEmail', '');
      this.password = '';
      this.$store.commit('setPassword', '');
      this.email = ''
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

  .input-container {
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

  .button-tab {
    width: 22%;
    border: 1px solid grey;
    font-size: 12px;
    padding: 10px;
    margin: 10px;
    background-color: white;
  }

  .button-tab:active {
    background-color: green;
  }

  .button-link {
    border: none;
    font-size: 16px;
    text-decoration: underline;
  }
</style>
