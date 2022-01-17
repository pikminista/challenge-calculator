<template>
  <div>
    <h2>計算結果</h2>
    <p>キノコのHP: {{ hp }}</p>
    <p>攻撃力: {{ power }}</p>
    <p>所要時間: {{ hp / power * 4 }}秒</p>
  </div>
</template>

<script>
export default {
  name: 'ResultArea',
  computed: {
    hp () {
      return this.$store.state.hp
    },
    power () {
      return this.$store.state.power
    }
  }
}
</script>

<style scoped>

</style>
