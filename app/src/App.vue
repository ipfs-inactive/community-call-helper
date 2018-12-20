<template>
  <div id="app">
    <NavBar />
    <HomePage />
    <ScheduledCalls />
  </div>
</template>

<script>
import NavBar from './components/NavBar.vue'
import HomePage from './components/HomePage.vue'
import ScheduledCalls from './components/ScheduledCalls.vue'
export default {
  name: 'app',
  components: {
    NavBar,
    HomePage,
    ScheduledCalls
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
</style>
