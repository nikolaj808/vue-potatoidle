<template>
  <div class="card-container">
    <img src="@/assets/upgradeicons/tractor.png" alt="Tractor upgrade" />
    <h3>Tractor</h3>
    <strong>{{ this.$store.getters.tractorAutos }} / s</strong>
    <p>Tractors: {{ this.$store.state.amounts.tractors }}</p>
    <p>Price: {{ this.$store.getters.calculateTractorPrice }}</p>
    <button @click="buy">Buy</button>
  </div>
</template>

<script>
import store from "@/store";

export default {
  name: "UpgradeTractor",
  store,
  methods: {
    buy() {
      let price = this.$store.getters.calculateTractorPrice;
      if (this.$store.state.amounts.potatoes >= price) {
        this.$store.dispatch("decrementPotatoesAsync", price);
        this.$store.dispatch("incrementTractorsAsync");
      } else {
        alert("Not enough money");
      }
    }
  }
};
</script>

<style>
.card-container {
  width: calc(25% - 10px);
  height: calc(25% - 10px);
  border: 2px solid black;
  border-radius: 3%;
  margin: 5px;
  margin-top: 10px;
  padding: 5px;
  background-color: #d0f4ea;
}

img {
  width: 64px;
  height: 64px;
}
</style>
