<template>
  <v-footer
    dark
    class="app-footer"
    color="footerBackground"
  >
    <v-container>
      <v-divider class="mb-3" />
      <v-row>
        <v-col
          class="logo d-flex align-center justify-center"
          cols="12"
          md="4"
        >
          <div class="text-center">
            <img :src="logo" alt="logo">
            <p>{{ pageName }}</p>
            <small class="dark-theme">
              Made with
              <a href="https://github.com/SikoraWojciech/Nuxt-Headless-CMS" target="_blank">Nuxt Headless CMS</a>
              by
              <a href="https://sikorawojciech.pl/" target="_blank">Wojciech Sikora</a>
            </small>
          </div>
        </v-col>

        <v-col
          class="routes"
          cols="12"
          md="4"
        >
          <p>{{ $t('siteMap') }}</p>

          <Navigation
            :show-home-page="true"
            :show-privacy-policy="true"
            :vertical="true"
          />
        </v-col>

        <v-col
          class="contact"
          cols="12"
          md="4"
        >
          <p class="text-center">
            {{ $t('getInTouch') }}
          </p>

          <ContactButtons :dense="$vuetify.breakpoint.smAndDown" />
        </v-col>
      </v-row>
    </v-container>
  </v-footer>
</template>

<script>
import { mapGetters, mapState } from 'vuex'
import ContactButtons from '@/components/layout/ContactButtons'
import Navigation from '@/components/layout/Navigation'

export default {
  name: 'AppFooter',

  components: {
    ContactButtons,
    Navigation
  },

  computed: {
    ...mapState({
      pageName: state => state.config.pageName
    }),
    ...mapGetters({
      logo: 'config/getLogo',
      routes: 'config/getRoutes'
    })
  }
}
</script>

<style lang="scss" scoped>
@import '~vuetify/src/styles/settings/_variables';

.app-footer {
  font-weight: 300;
  font-size: 1rem;

  p {
    font-size: 1.25rem;
  }

  .routes {
    display: flex;
    flex-direction: column;
    align-items: center;

    .nav-btn {
      font-weight: 300;
    }
  }

  .copyright {
    font-size: 0.7rem;
  }

  @media #{map-get($display-breakpoints, 'sm-and-down')} {
    .routes {
      order: 1;
    }

    .logo {
      order: 3;
    }

    .contact {
      order: 2;
    }
  }
}

</style>
