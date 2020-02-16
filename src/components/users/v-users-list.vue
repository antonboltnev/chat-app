<template>
  <div class='users-list'>
    <v-user
        v-for="chat in chats"
        :key="chat.id"
        :user_data="chat"
    />
  </div>
</template>

<script>
  import vUser from './v-user'
  import {mapActions, mapState} from 'vuex'

  export default {
    name: "users-list",
    components: {
      vUser
    },
    props: {},
    data() {
      return {}
    },
    computed: {
      ...mapState([
        'chats'
      ])
    },
    methods: {
      ...mapActions([
        'FETCH_CHATS',
      ])
    },
    mounted() {
      this.FETCH_CHATS()
    }
  }
</script>

<style lang="scss">
</style>
