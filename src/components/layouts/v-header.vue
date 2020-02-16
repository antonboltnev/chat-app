<template>
  <div class='v-header'>
    <div
        class="v-header__back"
        v-if="!isCoreRoute"
        @click="routeBack"
    >
      <i class="material-icons">keyboard_arrow_left</i>
      <span>Back</span>
    </div>
    <div class="v-header__user-info" v-if="!isCoreRoute">
      <span>{{currentUserChat.name}}</span>
    </div>
    <div class="right-side"></div>
  </div>
</template>

<script>
  import {mapState} from 'vuex'

  export default {
    name: "v-header",
    computed: {
      ...mapState([
        'currentUserChat'
      ]),
      isCoreRoute() {
        return this.$route.path === '/';
      }
    },
    methods: {
      routeBack() {
        this.$router.go(-1);
      }
    }
  }
</script>

<style lang="scss">
</style>
