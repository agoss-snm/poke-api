import {defineStore} from 'pinia'
import {ref} from 'vue'

export const useFavoriteStore = defineStore('fav', ()=>{
const fav= ref([])

if(localStorage.getItem('favorites')){
    fav.value= JSON.parse(localStorage.getItem('favorites'))
}


const add= (poke)=>{
    fav.value.push(poke)
    localStorage.setItem('favorites', JSON.stringify(fav.value))
}

const remove =(id)=>{
    fav.value = fav.value.filter(item=> item.id !==id)
    localStorage.setItem('favorites', JSON.stringify(fav.value))
}

const findPoke = (name) => {
    return fav.value.find((item) => item.name === name);
  };


return{
    fav,
    add,
    remove,
    findPoke
}
})