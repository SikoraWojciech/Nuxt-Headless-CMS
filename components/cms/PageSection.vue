<template>
  <v-card
    tag="section"
    class="page-section py-5"
    :class="{
      'dark-theme': theme === 'dark',
      'fill-height': fillHeight,
      'with-image': backgroundImage
    }"
    :style="{ backgroundImage: `url(${backgroundImage})` }"
    :dark="theme === 'dark'"
    flat
    tile
  >
    <v-container class="main-content">
      <h2 class="text-center mb-5">
        {{ title }}
      </h2>

      <div
        v-for="contentBlock in contentBlocks"
        :key="contentBlock.name"
        class="mb-5"
      >
        <component
          :is="contentBlock.component"
          v-bind="{ ...contentBlock.props, theme }"
        />
      </div>
    </v-container>
  </v-card>
</template>

<script>
import CMSMixin from '@/mixins/CMSMixin'
import { parseCMSBlock } from '@/helpers/CMS'

export default {
  name: 'PageSection',

  mixins: [CMSMixin],

  props: {
    title: {
      type: String,
      default: ''
    },

    content: {
      type: Array,
      default: () => []
    },

    fillHeight: {
      type: Boolean,
      default: false
    },

    backgroundImage: {
      type: String,
      default: null
    }
  },

  computed: {
    contentBlocks () {
      return this.content.map(parseCMSBlock)
    }
  }
}
</script>

<style lang="scss" scoped>
@import '~vuetify/src/styles/settings/_variables';

.page-section {
  background-color: var(--v-lightBackground-base) !important;

  &.fill-height {
    display: flex;
    flex-grow: 1;
    align-items: center;
  }

  &.with-image {
    background-size: cover;
    background-repeat: no-repeat;
  }

  h2 {
    font-size: 3rem;
    font-weight: 300;
    @media #{map-get($display-breakpoints, 'sm-and-down')} {
      font-size: 2rem;
    }
  }
}

.dark-theme {
  background-color: var(--v-darkBackground-base) !important;
}
</style>
