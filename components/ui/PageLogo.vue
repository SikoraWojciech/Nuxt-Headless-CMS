<template>
  <nuxt-link :to="localePath('/')" exact class="home-page-navigation">
    <img class="mx-3" :src="logo" alt="logo" width="40" height="40">
    <span v-if="$vuetify.breakpoint.mdAndUp">{{ pageName }}</span>
  </nuxt-link>
</template>

<script>
import { mapGetters, mapState } from 'vuex'

export default {
  name: 'PageLogo',

  computed: {
    ...mapState({
      pageName: state => state.config.pageName
    }),
    ...mapGetters({
      logo: 'config/getLogo'
    })
  }
}
</script>

<style lang="scss" scoped>
.home-page-navigation {
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.2rem;
  text-decoration: none;
  color: white;
}
</style>
