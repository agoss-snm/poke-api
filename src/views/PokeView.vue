
<script setup>
import {useRoute, useRouter} from 'vue-router'
import {useGetData} from '../composition/getData'
import {useFavoriteStore} from '../store/favorites'

const route= useRoute();
const router=useRouter();
const useFavorite = useFavoriteStore();


const {add, findPoke} =useFavorite;


const{data, getData, loading, error } = useGetData(); 

const back = () =>{
    router.push ('/pokemons')
};
getData(`https://pokeapi.co/api/v2/pokemon/${route.params.name}`);
</script>


<template>
<div class='container text-center'>
<div class='container'>
<p v-if='loading'> Loading information ...</p>
<div v-if='data'>
    
    <img :src="data.sprites?.front_default" alt="poke" >
    <h1>  {{$route.params.name.toUpperCase()}}</h1>
    <h4> <span>Index: </span> {{data.game_indices[0].game_index}}</h4>
    <h4> <span>Type: </span> {{data.types[0].type.name}}</h4>
    <h4> <span>Ability: </span> {{data.abilities[0].ability.name}}</h4>

<button :disabled='!!findPoke(data.name)' class='btn btn-primary mb-2' @click='add(data)'>Add to Favorites</button>
</div>

    <button @click='back' class='btn btn-outline-success'>Back</button>
</div>
</div>
</template>

<style scoped>
span{
    font-style: italic;
    color: green;
}
</style>