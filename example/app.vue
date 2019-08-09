<template>
  <div class="example">
    <vue-dashes
      class="dashes"
      color="papayawhip"
      :num-dashes="9"
      :dash-height="100"
      :dash-length="50"
      :space-length="28"
    />
    <vue-dashes
      class="dashes"
      color="rgba(69, 245, 66, 0.5)"
      :num-dashes="2"
      :dash-height="6"
      :dash-length="200"
      :space-length="50"
    />
    <vue-dashes
      class="dashes"
      color="#42b6f5"
      :num-dashes="6 "
      :dash-height="15"
      :dash-length="30"
      :space-length="100"
    />
    <vue-dashes
      class="dashes"
      color="tomato"
      :num-dashes="75"
      :dash-height="1"
      :dash-length="10"
      :space-length="1"
    />
  </div>
</template>

<script>
import VueDashes from '../src/vue-dashes.vue'

export default {
  name: 'App',
  components: {
    VueDashes,
  },
}
</script>

<style>
body {
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
}

.example {
  display: flex;
  flex-direction: column;
}

.dashes {
  margin: 25px auto;
  text-align: center;
}
</style>
