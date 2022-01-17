const HP = {
  small: {
    red: 4800,
    blue: 4800,
    yellow: 4800,
    brown: 4800,
    purple: 6300,
    gray: 6300,
    white: 3400,
    pink: 3400
  },
  normal: {
    red: 21000,
    blue: 21000,
    yellow: 21000,
    brown: 21000,
    purple: 28000,
    gray: 28000,
    white: 15000,
    pink: 15000
  },
  large: {
    red: 73000,
    blue: 73000,
    yellow: 73000,
    brown: 73000,
    purple: 94000,
    gray: 94000,
    white: 51000,
    pink: 51000
  },
  giant: {
    red: 170000,
    blue: 170000,
    yellow: 170000,
    brown: 170000,
    purple: 121000,
    gray: 121000,
    white: 121000,
    pink: 121000
  }
}

const SIZES = [
  {
    text: '小さな',
    value: 'small'
  },
  {
    text: 'ふつう',
    value: 'normal'
  },
  {
    text: '大きな',
    value: 'large'
  },
  {
    text: '巨大な',
    value: 'giant'
  }
]

const COLORS = [
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
    text: '茶',
    value: 'brown'
  },
  {
    text: '紫',
    value: 'purple'
  },
  {
    text: '灰',
    value: 'gray'
  },
  {
    text: '桃',
    value: 'pink'
  },
  {
    text: '白',
    value: 'white'
  }
]

export default {
  HP, SIZES, COLORS
}
