<script setup>
</script>

<template>
  <header>
    <div class='navbar'>
      <div class='container'>
      <div class='navbar-brand'>
        <img
          alt="Vue logo"
          class="logo"
          src="@/assets/logo.svg"
          width="125"
          height="125"
        />
      </div>
      <div>
        <nav>
          <RouterLink to="/" class='btn btn-outline-success me-2' active-class="active"> Home </RouterLink>
          <RouterLink to="/pokemons" class='btn btn-outline-success me-2' active-class="active"> Pokemons </RouterLink>
         <RouterLink to="/favorites" class='btn btn-outline-success me-2' active-class="active"> Favorites </RouterLink>
        </nav>
      </div>
    </div>
    </div>
  </header>

  <RouterView />
</template>

<style scoped>

</style>
