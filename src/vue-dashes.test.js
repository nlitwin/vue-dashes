import { shallowMount } from '@vue/test-utils'
import VDashes from './vue-dashes.vue'

describe('vue-dashes', () => {
  it('renders', () => {
    const wrapper = shallowMount(VDashes)
    expect(wrapper.html()).toMatchSnapshot()
  })
})