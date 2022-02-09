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
      swapiPeople: null
    };
  },
  methods: {
    fetchCharacter() {
      fetch('https://swapi.dev/api/people', {
        mode: 'no-cors',
        method: 'GET',
        body: JSON.stringify(data)
      })
      .then(response => response.json())
      .then(function (response) {
        console.log(response)
      });
    }
  }
};
</script>

<style scoped>

</style>