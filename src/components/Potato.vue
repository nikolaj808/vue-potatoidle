<template>
  <div>
    <h1>{{ this.$store.state.amounts.potatoes }} Potatoes</h1>
    <h3>{{ this.$store.getters.calculateAutos }} / s</h3>
    <a
      @click="
        $store.dispatch('incrementPotatoesAsync', $store.getters.clickIncrement)
      "
      ><img class="potato" src="@/assets/potato.png" alt="Potato"
    /></a>
  </div>
</template>

<script>
import store from "@/store";

export default {
  name: "Potato",
  store
};
</script>

<style>
a {
  cursor: pointer;
}

.potato {
  width: 250px;
  height: 250px;
  margin-top: 20px;
}
</style>
