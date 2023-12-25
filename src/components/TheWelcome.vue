<script setup>
import DocumentationIcon from "./icons/IconDocumentation.vue";
import ToolingIcon from "./icons/IconTooling.vue";
import EcosystemIcon from "./icons/IconEcosystem.vue";
import CommunityIcon from "./icons/IconCommunity.vue";
import SupportIcon from "./icons/IconSupport.vue";
import img from "../assets/Pokedex.png";
</script>

<template>
  <div class="text-center">
    <div class="center">
      <h1>Pokedex</h1>
      <div>
        <img :src="img" alt="Pokedex" class="img-fluid rounded-md" style="max-width: 400px;"/>
      </div>
    </div>
  </div>
</template>

<style scoped>
</style>
