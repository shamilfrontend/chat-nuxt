<template>
  <div class="">
    <ul>
      <li
        v-for="(message, index) in messages"
        :key="index"
      >
        {{ message.text }}
      </li>
    </ul>
  </div>
</template>

<script>
  import {mapState} from 'vuex';

  export default {
    head() {
      return {
        title: `Комната ${this.user.room}`,
      };
    },

    middleware: ['chat'],

    computed: {
      ...mapState(['user', 'messages']),
    }
  }
</script>
