<template>
  <div class="column is-12-desktop is-12-tablet is-12-mobile is-paddingless" onresize="isMobileTabletOrDesktop()">
    <section id="column" class="section is-paddingless">
      <div class="column is-12-desktop is-12-tablet is-12-mobile">
        <h1 class="title is-size-2">Column - Responsividad - Grid</h1>
        <p>Las columnas <code>column</code> nos va permitir trabajar la responsividad de la pagina, añadiendo despues el tamaño que necesitemos <code>column is-12-desktop is-12-tablet is-12-mobile</code></p> 
        <p>Bulma nos permite un <span class="has-text-weight-bold">maximo de 12 columnas</span>, las cuales abarcan los 100vw disponibles de nuestra pantalla/monitor, como se muestra acontinuación.</p>
      </div>

      <!-- 12 columnas en un solo div -->
      <div class="column is-12-desktop is-12-tablet is-12-mobile ">
        <p>Para el siguiente ejemplo necesitare las 12 columnas en un div, para ocupar toda la pantalla.</p>
      </div>
      <div class="column is-12-desktop is-12-tablet is-12-mobile has-background-success">
        <p class="has-text-centered has-text-white">column is-12-{{ isDispositive }}</p>
      </div>

      <!-- Codigo 12 columnas en un solo div -->
      <code class="column is-12-desktop is-12-tablet is-12-mobile">
        &lt;div class="column is-12-desktop is-12-tablet is-12-mobile has-background-success"><br/>
          &#8194; &lt;p class="has-text-centered has-text-white">column is-12-{{ isDispositive }}&lt;/p><br/>
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
          <p class="has-text-centered has-text-white">column is-1-{{ isDispositive }}</p>
        </div>
        <div class="column is-1-desktop is-1-tablet is-1-mobile has-background-link">
          <p class="has-text-centered has-text-white">column is-1-{{ isDispositive }}</p>
        </div>
        <div class="column is-1-desktop is-1-tablet is-1-mobile has-background-info">
          <p class="has-text-centered has-text-white">column is-1-{{ isDispositive }}</p>
        </div>
        <div class="column is-1-desktop is-1-tablet is-1-mobile has-background-link">
          <p class="has-text-centered has-text-white">column is-1-{{ isDispositive }}</p>
        </div>
        <div class="column is-1-desktop is-1-tablet is-1-mobile has-background-info">
          <p class="has-text-centered has-text-white">column is-1-{{ isDispositive }}</p>
        </div>
        <div class="column is-1-desktop is-1-tablet is-1-mobile has-background-link">
          <p class="has-text-centered has-text-white">column is-1-{{ isDispositive }}</p>
        </div>
        <div class="column is-1-desktop is-1-tablet is-1-mobile has-background-info">
          <p class="has-text-centered has-text-white">column is-1-{{ isDispositive }}</p>
        </div>
        <div class="column is-1-desktop is-1-tablet is-1-mobile has-background-link">
          <p class="has-text-centered has-text-white">column is-1-{{ isDispositive }}</p>
        </div>
        <div class="column is-1-desktop is-1-tablet is-1-mobile has-background-info">
          <p class="has-text-centered has-text-white">column is-1-{{ isDispositive }}</p>
        </div>
        <div class="column is-1-desktop is-1-tablet is-1-mobile has-background-link">
          <p class="has-text-centered has-text-white">column is-1-{{ isDispositive }}</p>
        </div>
        <div class="column is-1-desktop is-1-tablet is-1-mobile has-background-info">
          <p class="has-text-centered has-text-white">column is-1-{{ isDispositive }}</p>
        </div>
        <div class="column is-1-desktop is-1-tablet is-1-mobile has-background-link">
          <p class="has-text-centered has-text-white">column is-1-{{ isDispositive }}</p>
        </div>
      </div>

      <!-- Codigo de ejemplo para las 12 columnas -->
      <code class="column is-12-desktop is-12-tablet is-12-mobile">
        &lt;div class="columns is-multiline is-tablet is-mobile"> <br/>
          &#8194; &lt;div class="column is-1-desktop is-1-tablet is-1-mobile has-background-info"> <br/>
            &#8195; &#8194; &lt;p class="has-text-centered has-text-white">column is-1-{{ isDispositive }}&lt;/p> <br/>
          &#8194; &lt;/div><br/>
        &lt;/div><br/>
      </code><br/><br/>

      <!-- 12 columnas en un solo div -->
      <div class="column is-12-desktop is-12-tablet is-12-mobile">
        <p>Para el siguiente ejemplo necesitare las 12 columnas en un div, para ocupar toda la pantalla.</p>
      </div>
      <div class="columns is-multiline is-tablet is-mobile">
        <div class="column is-12-desktop is-12-tablet is-12-mobile has-background-success">
          <p class="has-text-centered has-text-white">column is-12-{{ isDispositive }}</p>
        </div>
      </div>

      <!-- Codigo columns y column is-12-* -->
      <code class="column is-12-desktop is-12-tablet is-12-mobile">
        &lt;div class="columns is-multiline is-tablet is-mobile"> <br/>
          &#8194; &lt;div class="column is-12-desktop is-12-tablet is-12-mobile has-background-success"> <br/>
            &#8195; &#8194; &lt;p class="has-text-centered has-text-white">column is-12-{{ isDispositive }}&lt;/p> <br/>
          &#8194; &lt;/div> <br/>
        &lt;/div>
      </code><br/><br/>

      <!-- 6 columnas en 2 div -->
      <div class="column is-12-desktop is-12-tablet is-12-mobile">
        <p>Para el siguiente ejemplo necesitare 6 columnas en cada div, para ocupar la mitad de cada uno de la pantalla.</p>
      </div>
      <div class="columns is-multiline is-tablet is-mobile">
        <div class="column is-6-desktop is-6-tablet is-6-mobile has-background-grey">
          <p class="has-text-centered has-text-white">column is-6-{{ isDispositive }}</p>
        </div>
        <div class="column is-6-desktop is-6-tablet is-6-mobile has-background-black-bis">
          <p class="has-text-centered has-text-white">column is-6-{{ isDispositive }}</p>
        </div>
      </div>

      <!-- Codigo de ejemplo para 6 columnas en 2 div -->
      <code class="column is-12-desktop is-12-tablet is-12-mobile">
        &lt;div class="columns is-multiline is-tablet is-mobile"> <br/>
          &#8194; &lt;div class="column is-6-desktop is-6-tablet is-6-mobile has-background-grey"><br/>
            &#8195; &#8194; &lt;p class="has-text-centered has-text-white">column is-6-{{ isDispositive }}&lt;/p><br/>
          &#8194; &lt;/div><br/>
          &#8194; &lt;div class="column is-6-desktop is-6-tablet is-6-mobile has-background-black-bis"><br/>
            &#8195; &#8194; &lt;p class="has-text-centered has-text-white">column is-6-{{ isDispositive }}&lt;/p><br/>
          &#8194; &lt;/div><br/>
        &lt;/div><br/>
      </code><br/><br/>

      <!-- 4 columnas en 3 div -->
      <div class="column is-12-desktop is-12-tablet is-12-mobile">
        <p>Para el siguiente ejemplo necesitare 4 columnas en cada div, para ocupar un tercio por cada uno de la pantalla.</p>
      </div>
      <div class="columns is-multiline is-tablet is-mobile">
        <div class="column is-4-desktop is-4-tablet is-4-mobile has-background-info">
          <p class="has-text-centered has-text-white">column is-4-{{ isDispositive }}</p>
        </div>
        <div class="column is-4-desktop is-4-tablet is-4-mobile has-background-success">
          <p class="has-text-centered has-text-white">column is-4-{{ isDispositive }}</p>
        </div>
        <div class="column is-4-desktop is-4-tablet is-4-mobile has-background-warning">
          <p class="has-text-centered has-text-white">column is-4-{{ isDispositive }}</p>
        </div>
      </div>

      <!-- Codigo de ejemplo para 6 columnas en 2 div -->
      <code class="column is-12-desktop is-12-tablet is-12-mobile">
        &lt;div class="columns is-multiline is-tablet is-mobile"> <br/>
          &#8194; &lt;div class="column is-4-desktop is-4-tablet is-4-mobile has-background-info"><br/>
            &#8195; &#8194; &lt;p class="has-text-centered has-text-white">column is-4-{{ isDispositive }}&lt;/p><br/>
          &#8194; &lt;/div><br/>
          &#8194; &lt;div class="column is-4-desktop is-4-tablet is-4-mobile has-background-success"><br/>
            &#8195; &#8194; &lt;p class="has-text-centered has-text-white">column is-4-{{ isDispositive }}&lt;/p><br/>
          &#8194; &lt;/div><br/>
          &#8194; &lt;div class="column is-4-desktop is-4-tablet is-4-mobile has-background-warning"><br/>
            &#8195; &#8194; &lt;p class="has-text-centered has-text-white">column is-4-{{ isDispositive }}&lt;/p><br/>
          &#8194; &lt;/div><br/>
        &lt;/div><br/>
      </code><br/><br/>

      <!-- 2 columnas en 6 div -->
      <div class="column is-12-desktop is-12-tablet is-12-mobile">
        <p>Para el siguiente ejemplo necesitare 2 columnas en cada div, para ocupar un sexto por cada uno de la pantalla.</p>
      </div>
      <div class="columns is-multiline is-tablet is-mobile">
        <div class="column is-2-desktop is-2-tablet is-2-mobile has-background-dark">
          <p class="has-text-centered has-text-white">column is-2-{{ isDispositive }}</p>
        </div>
        <div class="column is-2-desktop is-2-tablet is-2-mobile has-background-link">
          <p class="has-text-centered has-text-white">column is-2-{{ isDispositive }}</p>
        </div>
        <div class="column is-2-desktop is-2-tablet is-2-mobile has-background-info">
          <p class="has-text-centered has-text-white">column is-2-{{ isDispositive }}</p>
        </div>
        <div class="column is-2-desktop is-2-tablet is-2-mobile has-background-success">
          <p class="has-text-centered has-text-white">column is-2-{{ isDispositive }}</p>
        </div>
        <div class="column is-2-desktop is-2-tablet is-2-mobile has-background-warning">
          <p class="has-text-centered has-text-white">column is-2-{{ isDispositive }}</p>
        </div>
        <div class="column is-2-desktop is-2-tablet is-2-mobile has-background-danger">
          <p class="has-text-centered has-text-white">column is-2-{{ isDispositive }}</p>
        </div>
      </div>

      <!-- Codigo de ejemplo para 6 columnas en 2 div -->
      <code class="column is-12-desktop is-12-tablet is-12-mobile">
        &lt;div class="columns is-multiline is-tablet is-mobile"> <br/>
          &#8194; &lt;div class="column is-2-desktop is-2-tablet is-2-mobile has-background-dark"><br/>
            &#8195; &#8194; &lt;p class="has-text-centered has-text-white">column is-2-{{ isDispositive }}&lt;/p><br/>
          &#8194; &lt;/div><br/>
          &#8194; &lt;div class="column is-2-desktop is-2-tablet is-2-mobile has-background-link"><br/>
            &#8195; &#8194; &lt;p class="has-text-centered has-text-white">column is-2-{{ isDispositive }}&lt;/p><br/>
          &#8194; &lt;/div><br/>
          &#8194; &lt;div class="column is-2-desktop is-2-tablet is-2-mobile has-background-info"><br/>
            &#8195; &#8194; &lt;p class="has-text-centered has-text-white">column is-2-{{ isDispositive }}&lt;/p><br/>
          &#8194; &lt;/div><br/>
          &#8194; &lt;div class="column is-2-desktop is-2-tablet is-2-mobile has-background-success"><br/>
            &#8195; &#8194; &lt;p class="has-text-centered has-text-white">column is-2-{{ isDispositive }}&lt;/p><br/>
          &#8194; &lt;/div><br/>
          &#8194; &lt;div class="column is-2-desktop is-2-tablet is-2-mobile has-background-warning"><br/>
            &#8195; &#8194; &lt;p class="has-text-centered has-text-white">column is-2-{{ isDispositive }}&lt;/p><br/>
          &#8194; &lt;/div><br/>
          &#8194; &lt;div class="column is-2-desktop is-2-tablet is-2-mobile has-background-danger"><br/>
            &#8195; &#8194; &lt;p class="has-text-centered has-text-white">column is-2-{{ isDispositive }}&lt;/p><br/>
          &#8194; &lt;/div><br/>
        &lt;/div><br/>
      </code><br/>

      <div class="column is-12-desktop is-12-tablet is-12-mobile">
        <h2 class="title is-size-2">Combinar varios tamaños</h2>
      </div>

      <!-- 2 columnas, 8 columnas y 2 columnas -->
      <div class="column is-12-desktop is-12-tablet is-12-mobile">
        <p>Para el siguiente ejemplo necesitare 2 columnas en 1er div, 8 columnas en 2do div y 2 columnas en 3er div.</p>
      </div>
      <div class="columns is-multiline is-tablet is-mobile">
        <div class="column is-2-desktop is-2-tablet is-2-mobile has-background-info">
          <p class="has-text-centered has-text-white">column is-2-{{ isDispositive }}</p>
        </div>
        <div class="column is-8-desktop is-8-tablet is-8-mobile has-background-success">
          <p class="has-text-centered has-text-white">column is-8-{{ isDispositive }}</p>
        </div>
        <div class="column is-2-desktop is-2-tablet is-2-mobile has-background-warning">
          <p class="has-text-centered has-text-white">column is-2-{{ isDispositive }}</p>
        </div>
      </div>

      <!-- Codigo de ejemplo para 2 columnas, 8 columnas y 2 columnas -->
      <code class="column is-12-desktop is-12-tablet is-12-mobile">
        &lt;div class="columns is-multiline is-tablet is-mobile"> <br/>
          &#8194; &lt;div class="column is-2-desktop is-2-tablet is-2-mobile has-background-info"><br/>
            &#8195; &#8194; &lt;p class="has-text-centered has-text-white">column is-2-{{ isDispositive }}&lt;/p><br/>
          &#8194; &lt;/div><br/>
          &#8194; &lt;div class="column is-8-desktop is-8-tablet is-8-mobile has-background-success"><br/>
            &#8195; &#8194; &lt;p class="has-text-centered has-text-white">column is-8-{{ isDispositive }}&lt;/p><br/>
          &#8194; &lt;/div><br/>
          &#8194; &lt;div class="column is-2-desktop is-2-tablet is-2-mobile has-background-warning"><br/>
            &#8195; &#8194; &lt;p class="has-text-centered has-text-white">column is-2-{{ isDispositive }}&lt;/p><br/>
          &#8194; &lt;/div><br/>
        &lt;/div><br/>
      </code><br/><br/>

      <!-- 1 column, 10 columnas y 1 column -->
      <div class="column is-12-desktop is-12-tablet is-12-mobile">
        <p>Para el siguiente ejemplo necesitare 2 columnas en 1er div, 8 columnas en 2do div y 2 columnas en 3er div.</p>
      </div>
      <div class="columns is-multiline is-tablet is-mobile">
        <div class="column is-1-desktop is-1-tablet is-1-mobile has-background-info">
          <p class="has-text-centered has-text-white">column is-1-{{ isDispositive }}</p>
        </div>
        <div class="column is-10-desktop is-10-tablet is-10-mobile has-background-success">
          <p class="has-text-centered has-text-white">column is-10-{{ isDispositive }}</p>
        </div>
        <div class="column is-1-desktop is-1-tablet is-1-mobile has-background-warning">
          <p class="has-text-centered has-text-white">column is-1-{{ isDispositive }}</p>
        </div>
      </div>

      <!-- Codigo de ejemplo para 2 columnas, 8 columnas y 2 columnas -->
      <code>
        &lt;div class="columns is-multiline is-tablet is-mobile"> <br/>
          &#8194; &lt;div class="column is-1-desktop is-1-tablet is-1-mobile has-background-info"><br/>
            &#8195; &#8194; &lt;p class="has-text-centered has-text-white">column is-1-{{ isDispositive }}&lt;/p><br/>
          &#8194; &lt;/div><br/>
          &#8194; &lt;div class="column is-10-desktop is-10-tablet is-10-mobile has-background-success"><br/>
            &#8195; &#8194; &lt;p class="has-text-centered has-text-white">column is-10-{{ isDispositive }}&lt;/p><br/>
          &#8194; &lt;/div><br/>
          &#8194; &lt;div class="column is-1-desktop is-1-tablet is-1-mobile has-background-warning"><br/>
            &#8195; &#8194; &lt;p class="has-text-centered has-text-white">column is-1-{{ isDispositive }}&lt;/p><br/>
          &#8194; &lt;/div><br/>
        &lt;/div><br/>
      </code><br/><br/>

      <!-- Espacios costados -->
      <div class="column is-12-desktop is-12-tablet is-12-mobile">
        <h2 class="title is-size-2">Espacios laterales por estetica</h2>
        <p>En la gran mayoria de paginas, siempre existe un espacio a los costados, esto se debe por que se ve mejor esteticamente, hablando en el diseño, por lo que se puede hacer de la siguiente manera.
          <span class="is-size-7-desktop is-size-7-tablet is-size-7-mobile"> (yo no e dejado ese espacio a los costados en esta vista, para que compredieran bien visualmente lo que ocupan las 12 columnas)</span>
        </p><br/>
      </div>

      <!-- 1 column, 10 columnas y 1 column -->
      <div class="column is-12-desktop is-12-tablet is-12-mobile">
        <p>Para el siguiente ejemplo necesitare 11, 10, 9, 8 columnas en un div respectivamente y centrados.</p>
      </div>
      <div class="columns is-multiline is-tablet is-mobile is-centered">
        <div class="column is-11-desktop is-11-tablet is-11-mobile has-background-info">
          <p class="has-text-centered has-text-white">column is-11-{{ isDispositive }}</p>
        </div>

        <div class="column is-10-desktop is-10-tablet is-10-mobile has-background-success">
          <p class="has-text-centered has-text-white">column is-10-{{ isDispositive }}</p>
        </div>

        <div class="column is-9-desktop is-9-tablet is-9-mobile has-background-warning">
          <p class="has-text-centered has-text-white">column is-9-{{ isDispositive }}</p>
        </div>

        <div class="column is-8-desktop is-8-tablet is-8-mobile has-background-danger">
          <p class="has-text-centered has-text-white">column is-8-{{ isDispositive }}</p>
        </div>
      </div>

      <!-- Codigo de ejemplo para 2 columnas, 8 columnas y 2 columnas -->
      <code>
        &lt;div class="columns is-multiline is-tablet is-mobile is-centered"><br/>
          &#8194; &lt;div class="column is-11-desktop is-11-tablet is-11-mobile has-background-info"><br/>
            &#8195; &#8194; &lt;p class="has-text-centered has-text-white">column is-11-{{ isDispositive }}&lt;/p><br/>
          &#8194; &lt;/div><br/>
          &#8194; &lt;div class="column is-10-desktop is-10-tablet is-10-mobile has-background-success"><br/>
            &#8195; &#8194; &lt;p class="has-text-centered has-text-white">column is-10-{{ isDispositive }}&lt;/p><br/>
          &#8194; &lt;/div><br/>
          &#8194; &lt;div class="column is-9-desktop is-9-tablet is-9-mobile has-background-warning"><br/>
            &#8195; &#8194; &lt;p class="has-text-centered has-text-white">column is-9-{{ isDispositive }}&lt;/p><br/>
          &#8194; &lt;/div><br/>
          &#8194; &lt;div class="column is-8-desktop is-8-tablet is-8-mobile has-background-danger"><br/>
            &#8195; &#8194; &lt;p class="has-text-centered has-text-white">column is-8-{{ isDispositive }}&lt;/p><br/>
          &#8194; &lt;/div><br/>
        &lt;/div><br/>
      </code><br/><br/>

      <p class="is-size-5-desktop is-size-5-tablet is-size-5-mobile">Y por ultimo</p>
    </section>
  </div>
</template>

<script>
  export default {
    data: () => ({
      isDispositive: ''
    }),
    mounted() {
      this.$nextTick(function() {
        window.addEventListener('resize', this.isMobileTabletOrDesktop);

        this.isMobileTabletOrDesktop()
      })
    },
    methods: {
      isMobileTabletOrDesktop(){
        var width = window.innerWidth;
        width <= 768 ? 
          this.isDispositive = 'mobile' :
        width > 768 && width < 1024 ?
          this.isDispositive = 'tablet' : this.isDispositive = 'desktop'
      }
    },
    beforeDestroy() {
      window.removeEventListener('resize', this.isMobileTabletOrDesktop)
    }
  }
</script>

<style lang="scss" scoped>
</style>