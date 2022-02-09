<template>
  <div class="" @click="switchCharacter">
    {{ character }}
  </div>
</template>

<script>
export default {
  props: ['id'],
  data() {
    return {
      character: {}
    }
  },
  methods: {
    fetchCharacter(id) {
      fetch(`https://swapi.dev/api/people/${id}`, {
        method: 'GET'
      })
          .then(res => res.json())
          .then(json => this.character = json)
    },
    switchCharacter() {
      let random_id = Math.floor(Math.random() * 83) +1
      this.fetchCharacter(random_id)
    }
  },
  created() {
    this.fetchCharacter(this.id)
  }
}
</script>

<style scoped>

</style>