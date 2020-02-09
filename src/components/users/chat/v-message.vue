<template>
  <div class="v-message" :class="className">
    <div class="v-message__content">
      <p>{{message.text}}</p>
      <p class="content__time">{{message.time}}</p>
    </div>
  </div>
</template>

<script>
  export default {
    name: "v-message",
    props: {
      message: {
        type: Object,
        default: () => {}
      }
    },
    data() {
      return {}
    },
    computed: {
      className() {
        return {
          'chat__own': this.message.type === 'own',
          'chat__others': this.message.type === 'others'
        }
      }
    }
  }
</script>

<style lang="scss">
  .v-message {
    margin-bottom: $spacer*4;
    &.chat__own {
      display: flex;
      justify-content: flex-end;
      & .v-message__content:after {
        content: '';
        position: absolute;
        right: -8px;
        bottom: 10px;
        width: 0;
        height: 0;
        border: 0 solid transparent;
        border-bottom-width: 10px;
        border-top-width: 10px;
        border-left: 10px solid #bad3ff;
      }
    }
    &.chat__others {
      display: flex;
      justify-content: flex-start;
      & .v-message__content:before {
        content: '';
        position: absolute;
        left: -8px;
        bottom: 10px;
        width: 0;
        height: 0;
        border: 0 solid transparent;
        border-bottom-width: 10px;
        border-top-width: 10px;
        border-right: 10px solid #bad3ff;
      }
    }
    &__content {
      background: $chat-box-bg;
      border-radius: 4px;
      padding: $spacer;
      position: relative;
    }
    .content {
      &__time{
        position: absolute;
        bottom: -22px;
        right: 0;
      }
    }
  }
</style>
