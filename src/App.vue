 <template>
  <div id="app">
    <Header />
    <MoviesList />
  </div>
</template>

<script>
import MoviesList from "@/components/MoviesList";
import Header from "./components/TheHeader";

export default {
  name: "App",
  components: {
    MoviesList,
    Header,
  },
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #fff;
}
</style>
