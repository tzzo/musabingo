<template lang="pug">
  .container
    LappuOlli
</template>

<script>
import Logo from '~/components/Logo.vue'
import LappuOlli from '~/components/LappuHN.vue'

export default {
  components: {
    Logo,
    LappuOlli
  }
}

if (process.client) {
  window.onbeforeunload = function() {
    return "Data will be lost if you leave the page, are you sure?";
  }
  window.unload = function() {
    return "Data will be lost if you leave the page, are you sure?";
  }
}

</script>

<style>
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
  