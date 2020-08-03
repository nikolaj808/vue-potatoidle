<template>
  <div id="app">
    <div class="container">
      <h1 class="header">Potato Idle</h1>
      <div class="clicker">
        <Potato />
      </div>
      <div class="pages">
        <div id="nav">
          <router-link to="/">Home</router-link>
          <router-link to="/upgrade">Upgrade</router-link>
          <router-link to="/stats">Stats</router-link>
        </div>
        <router-view />
      </div>
    </div>
  </div>
</template>

<script>
import Potato from "@/components/Potato.vue";
import store from "@/store";

export default {
  name: "App",
  store,
  components: {
    Potato
  },
  beforeMount() {
    this.$store.dispatch("incrementAutosAsync");
  }
};
</script>

<style>
* {
  box-sizing: border-box;
}

body {
  background-color: #b1cc74;
}

.container {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  padding: 20px 0;
}

.header {
  grid-column: 1 / 4;
  color: white;
}

.clicker {
  grid-column: 1;
}

.pages {
  grid-column: 2 / 4;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}

#nav {
  background-color: #e8fcc2;
  margin: 0;
  padding: 0;
  list-style-type: none;
  overflow: hidden;
  display: flex;
  justify-content: space-around;
}

#nav a {
  flex: 100%;
  color: #545f66;
  padding: 14px 16px;
  font-size: 24px;
  text-decoration: none;
}

#nav a:hover {
  background-color: #c0f163;
}

#nav a.router-link-exact-active {
  color: #3cb865;
}
</style>
