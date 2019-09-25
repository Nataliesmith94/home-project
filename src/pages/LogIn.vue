<template>
  <section>
    <div class="login">
      <h1>{{ msg }}</h1>
      <h2>Please create an account</h2>
    </div>
    <div>
      <div>
        <button
          class="button__tab"
          @click="UserCreateAccount">
          create account
        </button>
        <button
          class="button__tab"
          @click="UserSignIn">
          Sign In
        </button>
      </div>
      <div
        v-if="!toCreateAccount"
        class="login">
        <div class="login__container">
          <div class="login__input-container">
            <p class="login__input-text">Email:</p>
            <input
              id="email"
              v-model="email"
              class="login__input-box"
              type="email"
              name="email"
              @input="setEmail">
          </div>
          <div class="login__input-container">
            <p class="login__input-text">Password:</p>
            <input
              id="password"
              v-model="password"
              class="login__input-box"
              type="password"
              name="password"
              @input="setPassword">
          </div>
          <button
            class="button__submit"
            @click="IsSignedIn">
            Sign in
          </button>
        </div>
      </div>
      <div
        v-if="toCreateAccount"
        class="create-account">
        <div class="container">
          <div class="login__input-container">
            <p class="login__input-text">Email:</p>
            <input
              id="email"
              v-model="email"
              class="login__input-box"
              type="email"
              name="email"
              @input="setEmail">
          </div>
          <div class="login__input-container">
            <p class="login__input-text">Password:</p>
            <input
              id="password"
              v-model="password"
              class="login__input-box"
              type="password"
              name="password"
              @input="setPassword">
          </div>
          <div class="login__input-container">
            <p class="login__input-text">Confirm Password:</p>
            <input
              id="passwordConfirm"
              v-model="passwordConfirm"
              class="login__input-box"
              type="password"
              name="passwordConfirm">
          </div>
          <button
            class="button__submit"
            @click="createAccount">
            Create Account
          </button>
        </div>
      </div>
    </div>
    <p>your name is {{ email }}</p>
    <h2>{{ result }}</h2>
    <button
      class="button__link"
      @click="IsAnonomous">
      continue without an account
    </button>
  </section>
</template>

<script>
import router from '@/router/index'
import accountService from '@/services/account'

export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Login page',
      toCreateAccount: false,
      result: ''
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
        router.push('/home')
      }
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

  .login__container {
    display: inline-block;
    justify-content: center;
    width: 50%;
  }

  .login__input-container {
    display: block;
  }

  .login__input-box {
    width: 100%;
    height: 30px;
    border: 1px solid grey;
  }

  .login__input-text {
    margin: 20px 0px 5px 0;
    text-align: left;
    width: 100%;
  }

  .button__submit {
    margin: 15px;
    padding: 15px;
    font-size: 12px;
    border: 1px solid grey;
    background-color: mediumseagreen;
  }

  .button__tab {
    width: 22%;
    border: 1px solid grey;
    font-size: 12px;
    padding: 10px;
    margin: 10px;
    background-color: white;
  }

  .button__tab:active {
    background-color: green;
  }

  .button__link {
    border: none;
    font-size: 16px;
    text-decoration: underline;
  }
</style>
