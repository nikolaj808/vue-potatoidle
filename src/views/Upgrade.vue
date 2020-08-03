<template>
  <div class="upgrade">
    <UpgradeHoe />
    <UpgradeFarmer />
    <UpgradeTractor />
    <UpgradeDrone />
  </div>
</template>

<script>
import store from "@/store";
import UpgradeHoe from "@/components/upgrades/UpgradeHoe";
import UpgradeFarmer from "@/components/upgrades/UpgradeFarmer";
import UpgradeTractor from "@/components/upgrades/UpgradeTractor";
import UpgradeDrone from "@/components/upgrades/UpgradeDrone";

export default {
  name: "Upgrade",
  store,
  components: {
    UpgradeHoe,
    UpgradeFarmer,
    UpgradeTractor,
    UpgradeDrone
  }
};
</script>

<style scoped>
.upgrade {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
}
</style>
