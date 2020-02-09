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

        this.SEND_MSG_TO_CHAT({userId: user.id, user: user})
        .then(() => {
          this.textValue = ''
        })
      }
    }
  }
</script>

<style lang="scss">
  .v-user-chat {
    margin-bottom: 200px;
    .input__field {
      display: flex;
      justify-content: space-between;
      align-items: center;
      position: fixed;
      bottom: 70px;
      margin: 0 auto;
      right: 0;
      left: 0;
      background: #ffffff;
      padding: 0 $spacer*2;

      .material-icons {
        font-size: 36px;
      }
    }

    &__textfield {
      width: 80%;
      padding: 16px;
      border: 0;
      box-shadow: inset 0 0 5px 1px #bdbdbd;
      outline: transparent;
      border-radius: $spacer*3;
      font-size: 20px;
    }
  }
</style>
