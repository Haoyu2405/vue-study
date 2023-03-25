<template>
  <div>
    <!-- :class="{类名：布尔值}" -->
    <p :class="{ redStr: bool }">值为true，key作为类名生效</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      bool: true,
    }
  },
  methods: {},
}
</script>
<style scoped>
.redStr {
  color: red;
}
</style>
