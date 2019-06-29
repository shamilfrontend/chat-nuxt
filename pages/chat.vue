<template>
  <h1>Chat {{ user.name }}</h1>
</template>

<script>
  import {mapState} from 'vuex';

  export default {
    layout: 'empty',

    head() {
      return {
        title: `Комната ${this.user.room}`,
      };
    },

    middleware: ['chat'],

    computed: {
      ...mapState(['user']),
    }
  }
</script>
