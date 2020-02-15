<template>
  <div class='v-bottom-nav'>
    <router-link :to="{name: 'contacts'}">
      <i class="material-icons">person_pin</i>
    </router-link>
    <router-link :to="{name: 'chats'}">
      <i class="material-icons">chat</i>
    </router-link>
    <router-link :to="{name: 'contacts'}">
      <i class="material-icons">settings</i>
    </router-link>
    <router-link :to="{name: 'contacts'}">
      <i class="material-icons">call</i>
    </router-link>
    <router-link :to="{name: 'contacts'}">
      <i class="material-icons">home</i>
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
</style>
