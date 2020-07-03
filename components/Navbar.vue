<template>
  <div>
    <nav class="navbar is-transparent">
      <div class="navbar-brand">
        <a class="navbar-item" href="https://bulma.io">
          <img src="https://bulma.io/images/bulma-logo.png" alt="Bulma: a modern CSS framework based on Flexbox" width="112" height="28">
        </a>
        <div class="navbar-burger burger" data-target="navbarExampleTransparentExample">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>

      <div id="navbarExampleTransparentExample" class="navbar-menu">
        <div class="navbar-start">
          <!-- <n-link class="navbar-item" to="grillas">Ver/Ocultar - Menu Lateral</n-link> -->
          <a class="navbar-item" @click="AllowBlockMenu">Ver/Ocultar - Menu Lateral </a>
        </div>

        <div class="navbar-end">
        </div>
      </div>
    </nav>

  </div>
</template>

<script>
  export default {
    methods: {
      AllowBlockMenu(){
        // Store Cambiar el valor del menu de falso a verdadero
      }
    }
  }
</script>

<style lang="sass" scoped>
</style>
