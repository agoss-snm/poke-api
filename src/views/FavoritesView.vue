<script setup>
import { storeToRefs } from 'pinia';
import {useFavoriteStore} from '../store/favorites'
import {RouterLink}  from 'vue-router';

const useFavorite= useFavoriteStore();

const {fav} = storeToRefs(useFavorite);
const {remove} = useFavorite;


</script>

<template>
<div class='container text-center'>
    <h1> favorites: </h1>
    <p v-if='fav.length ==0'>No favorites yet</p>
    <ul class='list-group' v-else>
        <li class='list-group-item' v-for='poke in fav' :key='poke.id'>
            <div>
                 {{poke.name}}
            </div>
             <div>
                <router-link class='btn btn-sm btn-primary me-2' :to="`/pokemons/${poke.name}`">More Info</router-link>
                <button class='btn btn-sm btn-danger me-2' @click='remove(poke.id)'>Delete</button>
             </div>
           
        </li>
    </ul>
    </div>
</template>