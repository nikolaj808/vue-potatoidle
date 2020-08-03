<template>
  <div class="card-container">
    <img src="@/assets/upgradeicons/farmer.png" alt="Farmer upgrade" />
    <h3>Farmer</h3>
    <strong>{{ this.$store.getters.farmerAutos }} / s</strong>
    <p>Farmers: {{ this.$store.state.amounts.farmers }}</p>
    <p>Price: {{ this.$store.getters.calculateFarmerPrice }}</p>
    <button @click="buy">Buy</button>
  </div>
</template>

<script>
import store from "@/store";

export default {
  name: "UpgradeFarmer",
  store,
  methods: {
    buy() {
      let price = this.$store.getters.calculateFarmerPrice;
      if (this.$store.state.amounts.potatoes >= price) {
        this.$store.dispatch("decrementPotatoesAsync", price);
        this.$store.dispatch("incrementFarmersAsync");
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
