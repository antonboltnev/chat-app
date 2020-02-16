<template>
  <div class='v-user-chat'>
    <v-message
        v-for="message in messages"
        :key="message.id"
        :message="message"
    />
    <div class="input__field">
      <input
          type="text"
          class="v-user-chat__textfield"
          v-model="textValue"
          @keypress.enter="sendMessage"
      >
      <i
          class="material-icons"
          @click="sendMessage"
      >
        send
      </i>
    </div>
  </div>
</template>

<script>
  import vMessage from './v-message'
  import {mapActions} from 'vuex'

  export default {
    name: "v-user-chat",
    components: {
      vMessage
    },
    props: {
      user: {
        type: Object,
        default: () => {
        }
      },
      messages: {
        type: Array,
        default: () => []
      }
    },
    data() {
      return {
        textValue: ''
      }
    },
    methods: {
      ...mapActions([
        'SEND_MSG_TO_CHAT'
      ]),
      sendMessage() {
        let user = {...this.user};
        let chat = {
          id: this.messages.length + 1,
          time: new Date().toLocaleTimeString('en-US',
            {
              hour12: false,
              hour: "numeric",
              minute: "numeric"
            }
          ),
          text: this.textValue,
          type: "own"
        }

        user.chat.push(chat);

        this.SEND_MSG_TO_CHAT({userId: user.id, chat: user})
        .then(() => {
          this.textValue = ''
        })
      }
    }
  }
</script>

<style lang="scss">
</style>
