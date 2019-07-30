<template>
  <svg xmlns="http://www.w3.org/2000/svg" :style="svgStyles">
    <line
      x1="0"
      :y1="dashHeight/2"
      :x2="svgWidth"
      :y2="dashHeight/2"
      :style="lineStyles"
    />
  </svg>
</template>

<script>
export default {
  name: 'VDashes',
  props: {
    color: {
      type: String,
      default: '#000',
    },
    numDashes: {
      type: Number,
      default: 10,
      validator: (value) => value > 0,
    },
    dashHeight: {
      type: Number,
      default: 1,
    },
    dashLength: {
      type: Number,
      default: 1,
    },
    spaceLength: {
      type: Number,
      default: 1,
    },
  },
  data() {
    return {
      lineStyles: {
        stroke: this.color,
        'stroke-width': this.dashHeight,
        'stroke-dasharray': `${this.dashLength} ${this.spaceLength}`,
      },
    }
  },
  computed: {
    svgWidth() {
      return this.numDashes * this.dashLength + (this.numDashes - 1) * this.spaceLength
    },
    svgStyles() {
      return {
        width: this.svgWidth,
        height: this.dashHeight,
      }
    },
  },
}
</script>
