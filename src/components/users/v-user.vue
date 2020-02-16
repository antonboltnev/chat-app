<template>
  <div class='v-user' @click="toUserChat">
    <div class="v-user__avatar"></div>
    <div class="v-user__info">
      <p class="info__name">{{user_data.name}}</p>
      <p class="info__last-message">{{user_data.chat[user_data.chat.length-1].text}}</p>
    </div>
    <div class="v-user__time">{{user_data.chat[user_data.chat.length-1].time}}</div>
  </div>
</template>

<script>
  import {mapActions} from 'vuex'

  export default {
    name: "v-user-list-item",
    props: {
      user_data: {
        type: Object,
        default: () => {
        }
      }
    },
    data() {
      return {}
    },
    methods: {
      ...mapActions([
        'SET_USER_TO_HEADER'
      ]),
      toUserChat() {
        this.SET_USER_TO_HEADER(this.user_data);
        this.$router.push({
          name: 'user',
          params: { 'messages': this.user_data.chat, 'user': this.user_data },
          query: { 'id': this.user_data.id }
        })
      }
    }
  }
</script>

<style lang="scss">
</style>
