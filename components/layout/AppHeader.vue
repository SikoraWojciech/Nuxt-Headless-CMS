<template>
  <v-app-bar
    app
    elevate-on-scroll
    dark
    color="headerBackground"
  >
    <v-container class="py-0 d-flex align-center">
      <PageLogo class="mr-3" />
      <AppHeaderContent />
    </v-container>
  </v-app-bar>
</template>

<script>
import PageLogo from '@/components/ui/PageLogo'
import AppHeaderContent from '@/components/layout/AppHeaderContent'

export default {
  name: 'AppHeader',

  components: {
    PageLogo,
    AppHeaderContent
  }
}
</script>
