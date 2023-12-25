
<script setup>
import { RouterLink } from "vue-router";
import { useGetData } from "../composition/getData";

const { data, getData, loading, error } = useGetData();

getData("https://pokeapi.co/api/v2/pokemon");
</script>

<template>

<div class='container text-center'>
  <div>
    <p v-if="loading">Loading Information...</p>
    <div class="alert alert-danger mt-2" v-if="error">{{ error }}</div>
  </div>
    <div v-if="data">
      <ul class='list-group'>
        <li v-for="(poke, index) in data.results" :key="index" >
          <router-Link :to="`/pokemons/${poke.name}`">
            {{ poke.name }}
          </router-Link>
        </li>
      </ul>
      <button 
      :disabled='!data.previous'
      class='btn btn-warning m-2' 
      @click='getData(data.previous)'>
      Previus
      </button>
      <button 
      :disabled='!data.next'
      class='btn btn-warning m-2' 
      @click='getData(data.next)'>
      Next
      </button>
    </div>
</div>
</template>

<style scoped>
li{
  list-style: none;
}
li a{
  color:green;
  text-decoration:none;
  font-size: 1.5rem
}
</style>