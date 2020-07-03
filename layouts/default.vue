<template>
  <div>
    <Navbar />
    <div class="column is-12-mobile is-12-tablet is-12-desktop is-paddingless" v-if="this.$store.state.menu_vertical">
      <div class="columns is-multiline is-mobile is-tablet">
        <div class="column is-12-mobile is-12-tablet is-2-desktop">
          <MenuVertical />
        </div>
        <div class="column is-12-mobile is-12-tablet is-10-desktop">
          <Nuxt />
        </div>
      </div>
    </div>

    <Nuxt v-else />
  </div>
</template>

<script>
  import MenuVertical from '~/components/Menu_vertical'
  import Navbar from '~/components/Navbar'

  export default {
    components:{
      MenuVertical,
      Navbar
    }
  }
</script>

<style lang="scss" scoped>

</style>

<style>
</style>
