<template>
  <div>
    <h2>対象キノコ</h2>
    <v-row>
      <v-col>
        <v-select :items="sizes" v-model="size" return-object></v-select>
      </v-col>
      <v-col>
        <v-select :items="colors" v-model="color" return-object></v-select>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import params from '../const/params.js'

export default {
  name: 'MushroomArea',
  data () {
    return {
      size: {
        text: '小さな',
        value: 'small'
      },
      color: {
        text: '赤',
        value: 'red'
      },
      sizes: params.SIZES,
      colors: params.COLORS
    }
  },
  watch: {
    size () {
      this.$store.commit('setHP', params.HP[this.size.value][this.color.value])
    },
    color () {
      this.$store.commit('setHP', params.HP[this.size.value][this.color.value])
      this.$store.commit('setMushroom', this.color.value)
    }
  }
}
</script>

<style scoped>

</style>
