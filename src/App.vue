<template>
  <div id="app">
    <ALiDa msg="ALiDa"/>
  </div>
</template>

<script>
import ALiDa from './components/ALiDa.vue'

export default {
  name: 'app',
  components: {
    ALiDa
  }
}
</script>

<style>
body {
  margin: 0;
}

#app {
  font-family: 'Open Sans', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;

  width: 800px;
  max-width: 100%;
  margin: 0 auto;
}

a, a:visited {
  color: #0099CD;
}

p, footer {
  font-size: 16px;
  width: 600px;
  max-width: 100%;
  margin: 1em auto;
}

h1, h2, h3 {
  text-align: center;
}

</style>
