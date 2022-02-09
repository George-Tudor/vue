<template>
  <div class="">
    {{ character }}
  </div>
</template>

<script>
export default {
  data() {
    return {
      character: {}
    }
  },
  methods: {
    fetchCharacter() {
      fetch('https://swapi.dev/api/people/1')
          .then(res => res.json())
          .then(json => this.character = json)
    }
  },
  created() {
    this.fetchCharacter()
  }
}
</script>

<style scoped>

</style>