<template>
  <label
    :style="{
      color: color,
      fontWeight: isBold ? 'bold' : 'normal',
      fontFamily: fontFamily,
      fontSize: fontSize,
    }"
    >{{ label }}</label
  >
</template>
<script>
export default {
  name: "LabelComponent",
  props: {
    label: { type: String, default: "" },
    color: { type: String, default: "white" },
    isBold: { type: Boolean, default: false },
    fontFamily: { type: String, default: "" },
    fontSize: { type: String, default: "" },
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Germania+One&display=swap");
</style>
