<template>
  <img class="card--image" :src="posterImage" :alt="movie.title" />
</template>

<script>
export default {
  props: ["movie"],
  computed: {
    posterImage: function () {
      return `https://image.tmdb.org/t/p/w200/${this.movie.poster_path}`;
    },
  },
};
</script>

<style scoped>
img {
  box-shadow: 0 0 35px black;
}
</style>