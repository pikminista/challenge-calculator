<template>
  <v-container>
    <h1>チャレンジ計算機</h1>
    <v-row>
      <v-col>
        <mushroom-area />
      </v-col>
      <v-col>
        <result-area />
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <pikmin-area />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import MushroomArea from '../components/MushroomArea.vue'
import ResultArea from '../components/ResultArea.vue'
import PikminArea from '../components/PikminArea.vue'

export default {
  name: 'Calculator',
  components: {
    MushroomArea, ResultArea, PikminArea
  }
}
</script>

<style scoped>

</style>
