<template>
  <div class='v-user' @click="toUserChat">
    <div class="v-user__img"></div>
    <div class="v-user__info">
      <p class="info__name">{{user_data.name}}</p>
      <p class="info__last-message">{{user_data.chat[0].text}}</p>
    </div>
    <div class="v-user__time">{{user_data.chat[0].time}}</div>
  </div>
</template>

<script>
  import {mapActions} from 'vuex'

  export default {
    name: "v-user-list-item",
    props: {
      user_data: {
        type: Object,
        default: () => {}
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
        this.$router.push({name: 'user', params: {'messages': this.user_data.chat, 'user': this.user_data}, query: {
          'id':
            this.user_data.id }})
      }
    }
  }
</script>

<style lang="scss">
  .v-user {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: $spacer*4;
    &__img {
      width: 50px;
      height: 50px;
      background: #e7e7e7;
      border-radius: 50%;
    }
    &__info {
      text-align: left;
      max-width: 170px;
    }
    .info {
      &__name {
        font-weight: bold;
      }
      &__last-message {
        white-space: nowrap;
        text-overflow: ellipsis;
        max-width: 150px;
        overflow: hidden;
      }
    }
  }
</style>
