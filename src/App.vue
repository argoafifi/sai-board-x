<template>
  <div>
    <component :is="Layout">
      <div>
        <router-view></router-view>
      </div>
    </component>
  </div>
</template>
<script>
export default {
  name: "App",
  beforeMount() {
    this.Layout = this.$route.meta.layout;
  },
  data: () => ({
    Layout: null,
  }),
};
</script>
