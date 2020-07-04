<template>
  <div class="column is-12-desktop is-12-tablet is-12-mobile is-paddingless">
    <section id="column" class="section is-paddingless">
      <div class="column is-12-desktop is-12-tablet is-12-mobile">
        <h1 class="title is-size-2">Column - Responsividad - Grid</h1>
        <p>Las columnas <code>column</code> nos va permitir trabajar la responsividad de la pagina, añadiendo despues el tamaño que necesitemos <code>column is-12-desktop is-12-tablet is-12-mobile</code></p> 
        <p>Bulma nos permite un maximo de 12 columnas, las cuales abarcan los 100vw disponibles de nuestra pantalla/monitor, como se muestra acontinuación.</p>
      </div>

      <!-- 12 columnas en un solo div -->
      <div class="column is-12-desktop is-12-tablet is-12-mobile ">
        <p>Para el siguiente ejemplo necesitare las 12 columnas en un div, para ocupar toda la pantalla.</p>
      </div>
      <div class="column is-12-desktop is-12-tablet is-12-mobile has-background-success">
        <p class="has-text-centered has-text-white">1</p>
      </div>

      <!-- Codigo 12 columnas en un solo div -->
      <code>
        &lt;div class="column is-12-desktop is-12-tablet is-12-mobile has-background-success"><br/>
          &#8194; &lt;p class="has-text-centered has-text-white">1/p><br/>
        &lt;/div>
      </code><br/><br/>

      <!-- 12 columnas -->
      <div class="column is-12-desktop is-12-tablet is-12-mobile">
        <p>A partir de 2 columnas hasta las 12 columnas, es necesario que el padre use estas clases: <code>columns is-multiline</code>
          . Si requerimos que en dispositivos menores a un pixelaje menor al de desktop, tenemos que añadir (dependiendo o los dos)
          <code>is-tablet is-mobile</code> para que puedan funcionar.</p>
        <br/>
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

      <!-- Codigo de ejmplo para las 12 columnas -->
      <code>
        &lt;div class="columns is-multiline is-tablet is-mobile"> <br/>
          &#8194; &lt;div class="column is-1-desktop is-1-tablet is-1-mobile has-background-info"> <br/>
            &#8195; &#8194; &lt;p class="has-text-centered has-text-white">1/p> <br/>
          &#8194; &lt;/div><br/>
        &lt;/div><br/>
      </code>

      <br/><br/>
      <!-- 12 columnas en un solo div -->
      <div class="column is-12-desktop is-12-tablet is-12-mobile">
        <p>Para el siguiente ejemplo necesitare las 12 columnas en un div, para ocupar toda la pantalla.</p>
      </div>
      <div class="columns is-multiline is-tablet is-mobile">
        <div class="column is-12-desktop is-12-tablet is-12-mobile has-background-success">
          <p class="has-text-centered has-text-white">1</p>
        </div>
      </div>

      <!-- Codigo columns y column is-12-* -->
      <code>
        &lt;div class="columns is-multiline is-tablet is-mobile"> <br/>
          &#8194; &lt;div class="column is-12-desktop is-12-tablet is-12-mobile has-background-success"> <br/>
            &#8195; &#8194; &lt;p class="has-text-centered has-text-white">1/p> <br/>
          &#8194; &lt;/div> <br/>
        &lt;/div>
      </code>

      <!-- 2 columnas -->
      <div class="column is-12-desktop is-12-tablet is-12-mobile">
        <p>Para el siguiente ejemplo necesitare 6 columnas en cada div, para ocupar la mitad de la pantalla.</p>
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