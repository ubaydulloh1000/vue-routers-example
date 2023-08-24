<template>
  <nav>
    <router-link to="/">Home</router-link> |
    <router-link :to="{ name: 'about' }">About</router-link> |
    <router-link :to="{ name: 'jobs'}">Jobs</router-link>
  </nav>

  <div>
    <button @click="redirect">Redirect</button>
    <button v-on:click="goBack">Go back</button>
    <button @click="goForward">Go forward</button>
  </div>
  <router-view/>
</template>

<script>
export default {
  name: 'App',
  methods: {
    redirect(){
      this.$router.push({'name': 'home'})
    },
    goBack(){
      this.$router.go(-1)
    },
    goForward(){
      // this.$router.go(1)
      this.$router.forward()
    },
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
