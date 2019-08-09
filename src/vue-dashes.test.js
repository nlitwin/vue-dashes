import { shallowMount } from '@vue/test-utils'
import VueDashes from './vue-dashes.vue'

describe('vue-dashes', () => {
  it('renders with default props', () => {
    const wrapper = shallowMount(VueDashes)
    expect(wrapper.html()).toMatchSnapshot()
  })

  it('renders with custom props', () => {
    const wrapper = shallowMount(VueDashes, {
      propsData: {
        color: 'papayawhip',
        numDashes: 5,
        dashHeight: 10,
        dashLength: 3,
        spaceLength: 2,
      },
    })
    expect(wrapper.html()).toMatchSnapshot()
  })

  it('calculates the svg width', () => {
    const wrapper = shallowMount(VueDashes, {
      propsData: {
        numDashes: 3,
        dashLength: 2,
        spaceLength: 2,
      },
    })

    const width = wrapper.vm.svgWidth
    expect(width).toBe(10)
    expect(wrapper.vm.svgStyles.width).toBe(width)
  })
})
