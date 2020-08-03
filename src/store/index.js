import Vue from "vue";
import Vuex from "vuex";
import VuexPersist from "vuex-persist";

Vue.use(Vuex);

const vuexPersist = new VuexPersist({
  key: "potatoidle",
  storage: window.localStorage
});

export default new Vuex.Store({
  plugins: [vuexPersist.plugin],
  state: {
    click: 1,
    amounts: {
      potatoes: 0,
      hoes: 0,
      farmers: 0,
      tractors: 0,
      drones: 0
    },
    basePrices: {
      hoe: 15,
      farmer: 100,
      tractor: 1100,
      drone: 12000
    },
    autos: {
      farmers: 1,
      tractors: 8,
      drones: 47
    },
    multipliers: {
      hoeMultiplier: 1,
      farmerMultiplier: 1,
      tractorMultiplier: 1,
      dronesMultiplier: 1
    }
  },
  getters: {
    clickIncrement: state => {
      return state.click + state.amounts.hoes * state.multipliers.hoeMultiplier;
    },
    calculateAutos: state => {
      let totalIncrement = 0;
      for (var auto in state.autos) {
        totalIncrement += state.autos[auto] * state.amounts[auto];
      }
      return totalIncrement;
    },
    calculateHoePrice: state => {
      return Math.ceil(
        state.basePrices.hoe * Math.pow(1.15, state.amounts.hoes)
      );
    },
    additionalPerClick: state => {
      return state.multipliers.hoeMultiplier * state.amounts.hoes;
    },
    calculateFarmerPrice: state => {
      return Math.ceil(
        state.basePrices.farmer * Math.pow(1.15, state.amounts.farmers)
      );
    },
    farmerAutos: state => {
      return state.autos.farmers * state.amounts.farmers;
    },
    calculateTractorPrice: state => {
      return Math.ceil(
        state.basePrices.tractor * Math.pow(1.15, state.amounts.tractors)
      );
    },
    tractorAutos: state => {
      return state.autos.tractors * state.amounts.tractors;
    },
    calculateDronePrice: state => {
      return Math.ceil(
        state.basePrices.drone * Math.pow(1.15, state.amounts.drones)
      );
    },
    droneAutos: state => {
      return state.autos.drones * state.amounts.drones;
    }
  },
  mutations: {
    incrementPotatoes(state, amount) {
      state.amounts.potatoes += amount;
    },
    decrementPotatoes(state, amount) {
      state.amounts.potatoes -= amount;
    },
    incrementHoes(state) {
      state.amounts.hoes++;
    },
    incrementFarmers(state) {
      state.amounts.farmers++;
    },
    incrementTractors(state) {
      state.amounts.tractors++;
    },
    incrementDrones(state) {
      state.amounts.drones++;
    }
  },
  actions: {
    calculateAutosAsync(context) {
      let totalIncrement = 0;
      for (var auto in context.state.autos) {
        totalIncrement +=
          context.state.autos[auto] * context.state.amounts[auto];
      }
      return totalIncrement;
    },
    incrementAutosAsync(context) {
      setInterval(() => {
        let increment = context.getters.calculateAutos;
        if (increment >= 1) {
          context.commit("incrementPotatoes", context.getters.calculateAutos);
        }
      }, 1000);
    },
    incrementPotatoesAsync({ commit }, amount) {
      commit("incrementPotatoes", amount);
    },
    decrementPotatoesAsync({ commit }, amount) {
      commit("decrementPotatoes", amount);
    },
    incrementHoesAsync({ commit }) {
      commit("incrementHoes");
    },
    incrementFarmersAsync({ commit }) {
      commit("incrementFarmers");
    },
    incrementTractorsAsync({ commit }) {
      commit("incrementTractors");
    },
    incrementDronesAsync({ commit }) {
      commit("incrementDrones");
    }
  },
  modules: {}
});
