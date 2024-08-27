<template>
  <div class="home">
    <Viewer />
  </div>
</template>

<script>
// @ is an alias to /src
import Viewer from '@/components/viewer.vue'

export default {
  name: 'Home',
  components: {
    Viewer
  }
}
</script>
<style scoped lang="scss">
.home {
  width: 100%;
  height: 100%;
}
</style>
