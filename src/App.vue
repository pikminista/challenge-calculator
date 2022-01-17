<template>
  <v-app>
    <v-main>
      <Calculator />
    </v-main>
  </v-app>
</template>

<script>
import Calculator from './pages/Calculator.vue'

export default {
  name: 'App',
  components: {
    Calculator
  },
  data: () => ({
    //
  })
}
</script>
