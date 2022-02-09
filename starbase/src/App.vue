<template>
  <div id="app">
    <h3>{{ title }}</h3>
    <Character />
  </div>
</template>

<script>
import Character from "./components/Character";
export default {
  name: "App",
  data() {
    return {
      title: 'Generate Your Team',
      results: []
    };
  },
  components: {
    Character
    }
  }

</script>

<style scoped>

</style>