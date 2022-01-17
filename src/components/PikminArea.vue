<template>
  <div>
    <h2>ピクミン</h2>
    <v-data-table :headers="headers" :items="pikmins" :hide-default-footer="true" disable-pagination>
      <template v-slot:top>
        <v-dialog
          v-model="dialog"
          max-width="500px"
        >
          <template v-slot:activator="{ on, attrs }">
            <v-btn
              color="primary"
              dark
              class="mb-2"
              v-bind="attrs"
              v-on="on"
            >
              ピクミンを追加
            </v-btn>
          </template>
          <v-card>
            <v-card-title>
              <span class="text-h5">ピクミンを追加</span>
            </v-card-title>

            <v-card-text>
              <v-container>
                <v-row>
                  <v-col>
                    <v-select label="色" :items="colors" v-model="editedItem.color" return-object></v-select>
                  </v-col>
                  <v-col>
                    <v-select label="なかよし度" :items="friendships" v-model="editedItem.friendship" return-object></v-select>
                  </v-col>
                  <v-col>
                    <v-select label="頭の状態" :items="maturities" v-model="editedItem.maturity" return-object></v-select>
                  </v-col>
                  <v-col>
                    <v-select label="デコ" :items="decors" v-model="editedItem.decor" return-object></v-select>
                  </v-col>
                </v-row>
              </v-container>
            </v-card-text>

            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn
                color="blue darken-1"
                text
                @click="close"
              >
                Cancel
              </v-btn>
              <v-btn
                color="blue darken-1"
                text
                @click="save"
              >
                Save
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>
      </template>

      <template v-slot:item.color="props">
        {{ props.item.color.text }}
      </template>
      <template v-slot:item.friendship="props">
        {{ props.item.friendship.text }}
      </template>
      <template v-slot:item.maturity="props">
        {{ props.item.maturity.text }}
      </template>
      <template v-slot:item.decor="props">
        {{ props.item.decor.text }}
      </template>
      <template v-slot:item.power="props">
        {{ calcPower(props.item.color.value, props.item.friendship.value, props.item.maturity.value, props.item.decor.value) }}
      </template>
    </v-data-table>
  </div>
</template>

<script>
export default {
  name: 'PikminArea',
  data () {
    return {
      headers: [
        {
          text: '色',
          value: 'color'
        },
        {
          text: 'なかよし度',
          value: 'friendship'
        },
        {
          text: '頭の状態',
          value: 'maturity'
        },
        {
          text: 'デコ',
          value: 'decor'
        },
        {
          text: '攻撃力',
          value: 'power'
        }
      ],
      dialog: false,
      editedItem: {
        color: {
          text: '赤',
          value: 'red'
        },
        friendship: {
          text: '♡0',
          value: 0
        },
        maturity: {
          text: '葉っぱ',
          value: 1
        },
        decor: {
          text: 'なし',
          value: 0
        }
      },
      colors: [
        {
          text: '赤',
          value: 'red'
        },
        {
          text: '青',
          value: 'blue'
        },
        {
          text: '黄',
          value: 'yellow'
        },
        {
          text: '紫',
          value: 'purple'
        },
        {
          text: '岩',
          value: 'rock'
        },
        {
          text: '白',
          value: 'white'
        },
        {
          text: '羽',
          value: 'winged'
        }
      ],
      friendships: [
        {
          text: '♡0',
          value: 0
        },
        {
          text: '♡1',
          value: 1
        },
        {
          text: '♡2',
          value: 2
        },
        {
          text: '♡3',
          value: 3
        },
        {
          text: '♡4',
          value: 4
        }
      ],
      maturities: [
        {
          text: '葉っぱ',
          value: 1
        },
        {
          text: '蕾',
          value: 1.1
        },
        {
          text: '通常花',
          value: 1.2
        },
        {
          text: 'パンジー',
          value: 1.3
        },
        {
          text: '花枯れ',
          value: 0.9
        }
      ],
      decors: [
        {
          text: 'なし',
          value: 0
        },
        {
          text: 'あり',
          value: 1
        }
      ],
      pikmins: []
    }
  },
  mounted () {
    this.$store.subscribe((mutation, state) => {
      if (mutation.type === 'setHP') {
        this.$nextTick(() => {
          let power = 0
          this.pikmins.forEach(p => {
            power += this.calcPower(p.color.value, p.friendship.value, p.maturity.value, p.decor.value)
          })
          this.$store.commit('setPower', power)
        })
      }
    })
  },
  methods: {
    close () {
      this.dialog = false
    },
    save () {
      this.pikmins.push({
        color: {
          text: this.editedItem.color.text,
          value: this.editedItem.color.value
        },
        friendship: {
          text: this.editedItem.friendship.text,
          value: this.editedItem.friendship.value
        },
        maturity: {
          text: this.editedItem.maturity.text,
          value: this.editedItem.maturity.value
        },
        decor: {
          text: this.editedItem.decor.text,
          value: this.editedItem.decor.value
        }
      })
      this.syncPower()
      this.dialog = false
    },
    calcPower (color, friendship, maturity, decor) {
      // calculate type matching bonus amplifier
      const mushroom = this.$store.state.mushroom
      /* eslint-disable no-multi-spaces, array-bracket-spacing */
      const bonusTable = [
        [1,   2,  0.9,  0.9,  1.1,  0.9,  1.1,    1],
        [1,   1,    2,  0.9,    1,  0.9,  0.9,    1],
        [1, 0.9,    1,    2,  1.1,  0.9,  0.9,    1],
        [1, 1.1,    1,  0.9,    2,  0.9,  1.1,    1],
        [1, 0.9,  0.9,  0.9,    1,    2,    1,  1.1],
        [1,   1,  0.9,  0.9,    1,    1,    2,  0.9],
        [1,   1,    1,    1,    1,  1.1,    1,    2]
      ]
      /* eslint-enable */
      const bonus = bonusTable[['red', 'yellow', 'blue', 'purple', 'white', 'winged', 'rock'].indexOf(color)][['brown', 'red', 'yellow', 'blue', 'purple', 'white', 'pink', 'gray'].indexOf(mushroom)]

      const base = [4, 4, 4, 5.2, 2.8, 2.8, 5.2][['red', 'yellow', 'blue', 'purple', 'white', 'winged', 'rock'].indexOf(color)]
      return (base * maturity * (1 + friendship * 0.1) + decor) * bonus
    },
    syncPower () {
      this.$nextTick(() => {
        let power = 0
        this.pikmins.forEach(p => {
          power += this.calcPower(p.color.value, p.friendship.value, p.maturity.value, p.decor.value)
        })
        this.$store.commit('setPower', power)
      })
    }
  }
}
</script>

<style scoped>

</style>
