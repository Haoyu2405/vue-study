<template>
  <div>
    <!-- :style="{css属性名: 值}" -->
    <p :style="{ color: colorStr }">
      value变量的值，将被赋予给css属性的key生效
    </p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      colorStr: 'red',
    }
  },
  methods: {},
}
</script>
<style scoped></style>
