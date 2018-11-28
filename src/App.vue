<template>
  <div id="app">
    <ALiDa
      dataUrl="https://raw.githubusercontent.com/mmmenno/alida/master/alida.json"/>
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
  line-height: 1.5;
  width: 1200px;
  max-width: 100%;
  margin: 0 auto;
}

a, a:visited {
  color: #0099CD;
}

h1 {
  text-align: center;
}

.legend {
  margin-right: 0.5em;
}

.tags {
  display: initial;
  list-style-type: none;
  margin: 0;
  padding: 0;
  line-height: 2;
}

.tags li {
  display: inline-block;
}

.tag {
  background-color: rgba(27, 31, 35, .08);
  border-radius: 3px;
  font-size: 85%;
  margin: 0;
  margin-right: 0.5em;
  padding: .2em .4em;
  font-family: SFMono-Regular, Consolas, Liberation Mono, Menlo, Courier, monospace;
}

</style>
