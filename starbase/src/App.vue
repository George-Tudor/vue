<template>
  <div id="app">
    <h3>{{ title }}</h3>
    <button class="btn btn-primary" @click="fetchCharacter">Test Fetch Character</button>
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      title: 'Generate Your Team',
      results: []
    };
  },
  methods: {
    fetchCharacter() {
      fetch('https://swapi.dev/api/people/1')
        .then(res => res.json())
        .then(res => console.log(res))
      }
    }
  }

</script>

<style scoped>

</style>