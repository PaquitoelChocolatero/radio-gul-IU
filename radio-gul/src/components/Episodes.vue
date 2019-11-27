<template>
  <div temporadas>
      <h1>Temporadas</h1>
      <div v-on:click='jump()'>
          <h2>Test</h2>
      </div>

      <badger-accordion>
        <badger-accordion-item>
          <template slot="header">First Accordion Header</template>
          <template slot="content">First Accordion Content</template>
        </badger-accordion-item>

        <badger-accordion-item>
          <template slot="header">Second Accordion Header</template>
          <template slot="content">Second Accordion Content</template>
        </badger-accordion-item>
      </badger-accordion>
  </div>
</template>

<script>
import {BadgerAccordion, BadgerAccordionItem} from 'vue-badger-accordion'

export default {
  components: {
        BadgerAccordion,
        BadgerAccordionItem
  },
  name: 'episodes',
  methods: {
    jump(){
      this.$router.push({
        name: 'player',
        params: {
          q: this.$route.params.q,
          season: "2019",
          episode: "1",
          name: "test01"
        }
      })
    }
  }
}
</script>

<style scoped>

</style>
