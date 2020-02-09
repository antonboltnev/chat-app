<template>
  <div class='v-bottom-nav'>
    <router-link :to="{name: 'users'}">
      <i class="material-icons">home</i>
    </router-link>
    <router-link :to="{name: 'users'}">
      <i class="material-icons">chat</i>
    </router-link>
    <router-link :to="{name: 'users'}">
      <i class="material-icons">settings</i>
    </router-link>
    <router-link :to="{name: 'users'}">
      <i class="material-icons">call</i>
    </router-link>
    <router-link :to="{name: 'users'}">
      <i class="material-icons">person_pin</i>
    </router-link>
  </div>
</template>

<script>
  export default {
    name: "v-bottom-nav",
    props: {},
    data() {
      return {}
    },
  }
</script>

<style lang="scss">
  .v-bottom-nav {
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    padding: $spacer;
    background: $primary-bg;
    min-height: 50px;
    .material-icons {
      font-size: 36px;
      color: #2d2d2d;
    }
  }
</style>
