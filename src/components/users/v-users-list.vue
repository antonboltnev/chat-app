<template>
  <div class='users-list'>
    <v-user
        v-for="user in users"
        :key="user.id"
        :user_data="user"
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
        'users'
      ])
    },
    methods: {
      ...mapActions([
        'FETCH_USERS'
      ])
    },
    mounted() {
      this.FETCH_USERS()
    }
  }
</script>

<style lang="scss">
</style>
