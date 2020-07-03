<template>
  <div class="column is-12-desktop is-12-tablet is-12-mobile is-paddingless">
    <section class="section is-paddingless">
      <div class="column is-12-desktop is-12-tablet is-12-mobile">
        <h1 class="title">Column - Responsividad - Grid</h1>
        <p>Principalmente Bulma trabaja con 12 columnas por defecto, las cuales abarcan los 100vw disponibles de nuestra pantalla/monitor, como se muestra acontinuación.</p>
        <p>Para poder usar las 12 columnas, es necesario que el padre use estas clases: <code>columns is-multiline</code>
          y si queremos que, en dispositivos menores a un pixelaje menor al del desktop, tenemos que añadir (dependiendo o los dos)
          <code>is-tablet is-mobile</code> para que puedan funcionar.</p>
      </div>

      <!-- 12 columnas -->
      <div class="columns is-multiline is-tablet is-mobile">
        <div class="column is-1-desktop is-1-tablet is-1-mobile has-background-info">
          <p class="has-text-centered has-text-white">1</p>
        </div>
        <div class="column is-1-desktop is-1-tablet is-1-mobile has-background-link">
          <p class="has-text-centered has-text-white">2</p>
        </div>
        <div class="column is-1-desktop is-1-tablet is-1-mobile has-background-info">
          <p class="has-text-centered has-text-white">3</p>
        </div>
        <div class="column is-1-desktop is-1-tablet is-1-mobile has-background-link">
          <p class="has-text-centered has-text-white">4</p>
        </div>
        <div class="column is-1-desktop is-1-tablet is-1-mobile has-background-info">
          <p class="has-text-centered has-text-white">5</p>
        </div>
        <div class="column is-1-desktop is-1-tablet is-1-mobile has-background-link">
          <p class="has-text-centered has-text-white">6</p>
        </div>
        <div class="column is-1-desktop is-1-tablet is-1-mobile has-background-info">
          <p class="has-text-centered has-text-white">7</p>
        </div>
        <div class="column is-1-desktop is-1-tablet is-1-mobile has-background-link">
          <p class="has-text-centered has-text-white">8</p>
        </div>
        <div class="column is-1-desktop is-1-tablet is-1-mobile has-background-info">
          <p class="has-text-centered has-text-white">9</p>
        </div>
        <div class="column is-1-desktop is-1-tablet is-1-mobile has-background-link">
          <p class="has-text-centered has-text-white">10</p>
        </div>
        <div class="column is-1-desktop is-1-tablet is-1-mobile has-background-info">
          <p class="has-text-centered has-text-white">11</p>
        </div>
        <div class="column is-1-desktop is-1-tablet is-1-mobile has-background-link">
          <p class="has-text-centered has-text-white">12</p>
        </div>
      </div>

      <!-- 1 columna -->
      <div class="column is-12-desktop is-12-tablet is-12-mobile">
        <p>Para el siguiente ejemplo ocupare las 12 columnas en un div, lo que aparentera que ocupe toda la pantalla.</p>
      </div>
      <div class="columns is-multiline is-tablet is-mobile">
        <div class="column is-12-desktop is-12-tablet is-12-mobile has-background-success">
          <p class="has-text-centered has-text-white">1</p>
        </div>
      </div>

      <!-- 1 columna -->
      <div class="column is-12-desktop is-12-tablet is-12-mobile">
        <p>Para el siguiente ejemplo ocupare las 12 columnas en un div, lo que aparentera que ocupe toda la pantalla.</p>
      </div>
      <div class="column is-12-desktop is-12-tablet is-12-mobile has-background-success">
        <p class="has-text-centered has-text-white">1</p>
      </div>

      <!-- 2 columnas -->
      <div class="column is-12-desktop is-12-tablet is-12-mobile">
        <p>Para el siguiente ejemplo ocupare 6 columnas en cada div, lo que aparentera que ocupe la mitad de la pantalla.</p>
      </div>
      <div class="columns is-multiline is-tablet is-mobile">
        <div class="column is-6-desktop is-6-tablet is-6-mobile has-background-grey">
          <p class="has-text-centered has-text-white">1</p>
        </div>
        <div class="column is-6-desktop is-6-tablet is-6-mobile has-background-black-bis">
          <p class="has-text-centered has-text-white">2</p>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
  export default {
  }
</script>

<style lang="scss" scoped>
</style>