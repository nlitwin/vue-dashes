<template>
  <svg
    class="dashes"
    xmlns="http://www.w3.org/2000/svg"
    :viewBox="viewBox"
    :style="svgStyles"
  >
    <line
      x1="0"
      y1="0"
      :x2="svgWidth"
      :y2="dashHeight"
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
      validator: (value) => {
        const isValidHex = /(^#[0-9A-F]{6}$)|(^#[0-9A-F]{3}$)/i.test(value.trim())
        return isValidHex
      },
    },
    numDashes: {
      type: Number,
      default: 3,
      validator: (value) => value > 0,
    },
    dashHeight: {
      type: Number,
      default: 1,
    },
    dashLength: {
      type: Number,
      default: 2,
    },
    spaceLength: {
      type: Number,
      default: 2,
    },
  },
  data() {
    return {
      lineStyles: {
        stroke: this.color,
        'stroke-dasharray': `${this.dashLength} ${this.spaceLength}`,
      },
    }
  },
  computed: {
    svgWidth() {
      return this.numDashes * this.dashLength + (this.numDashes - 1) * this.spaceLength
    },
    viewBox() {
      return `0 0 ${this.svgWidth} ${this.dashHeight}`
    },
    svgStyles() {
      return {
        width: this.svgWidth,
        // The svg needs to be slightly bigger, otherwise the dashes don't fully render
        height: this.dashHeight + 1,
      }
    },
  },
}
</script>
