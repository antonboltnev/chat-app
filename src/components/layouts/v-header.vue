<template>
  <div class='v-header'>
    <div
        class="v-header__back"
        v-if="isCoreRoute"
        @click="routeBack"
    >
      <i class="material-icons">keyboard_arrow_left</i>
      <span>Back</span>
    </div>
    <div class="v-header__user-info" v-if="isCoreRoute">
      <span>{{currentUserChat.name}}</span>
    </div>
    <div class="right-side"></div>
  </div>
</template>

<script>
  import {mapState} from 'vuex'

  export default {
    name: "v-header",
    props: {},
    data() {
      return {}
    },
    computed: {
      ...mapState([
        'currentUserChat'
      ]),
      isCoreRoute() {
        return this.$route.path !== '/';
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
  .v-header {
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    padding: $spacer*2;
    background: $primary-bg;
    position: fixed;
    top: 0;
    right: 0;
    left: 0;
    &__back {
      display: flex;
      align-items: center;
      flex-basis: 25%;
    }
    &__user-info {
      flex-basis: 50%;
    }
    &__right-side {
      flex-basis: 25%;
    }
  }
</style>
