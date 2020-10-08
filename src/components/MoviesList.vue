<template>
  <ul>
    <li v-for="movie in movies" :key="movie.title">
      <Movie :movie="movie" />
    </li>
  </ul>
</template>

<script>
import Movie from "@/components/TheMovie";
export default {
  name: "MoviesList",
  data() {
    return {
      movies: [],
    };
  },

  created: function () {
    this.fetchMovie();
  },

  methods: {
    fetchMovie: async function () {
      try {
        const response = await fetch(
          "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=e08c4246d38fd42b73e6d5d187c7d767"
        );
        const res_movies = await response.json();
        this.movies = res_movies.results;
      } catch (error) {
        console.log(error);
      }
    },
  },

  components: {
    Movie,
  },
};
</script>

<style scoped>
ul {
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  gap: 5px;
  list-style: none;
  padding-top: 20px;
}
</style>