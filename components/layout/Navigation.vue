<template>
  <nav
    class="d-flex align-center"
    :class="{ 'flex-column': vertical }"
  >
    <v-btn
      v-if="showHomePage"
      :to="localePath(`/`)"
      nuxt
      exact
      rounded
      plain
      class="px-3"
      active-class="primary--text"
    >
      {{ $t('homePage') }}
    </v-btn>

    <v-btn
      v-for="route in routes"
      :key="route.path"
      :to="localePath(`/${route.path}`)"
      nuxt
      rounded
      plain
      active-class="primary--text"
      class="px-3"
    >
      {{ route.name }}
    </v-btn>

    <v-btn
      v-if="privacyPolicy && showPrivacyPolicy"
      :to="localePath(`/${privacyPolicy.slug}`)"
      nuxt
      exact
      rounded
      plain
      class="px-3"
      active-class="primary--text"
    >
      {{ privacyPolicy.title }}
    </v-btn>
  </nav>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'Navigation',

  props: {
    showHomePage: {
      type: Boolean,
      default: false
    },

    showPrivacyPolicy: {
      type: Boolean,
      default: false
    },

    vertical: {
      type: Boolean,
      default: false
    }
  },

  computed: {
    ...mapGetters({
      routes: 'config/getRoutes'
    }),

    privacyPolicy () {
      const privacyPolicy = this.$store.state.config.privacyPolicy
      return privacyPolicy ? privacyPolicy.privacyPolicyPage.fields : null
    }
  }
}
</script>
