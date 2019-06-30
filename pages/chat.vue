<template>
  <div class="c-wrap">
    <div class="c-chat">
      <Message
        v-for="(message, index) in messages"
        :key="index"
        :name="message.name"
        :text="message.text"
        :owner="message.id === user.id"
      />
    </div>
    <div class="c-form">
      <ChatForm />
    </div>
  </div>
</template>

<script>
  import {mapState} from 'vuex';

  import Message from '@/components/Message';
  import ChatForm from '@/components/ChatForm';

  export default {
    name: 'chat',

    components: {
      Message,
      ChatForm,
    },

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

<style scoped>
  .c-wrap {
    height: 100%;
    position: relative;
    overflow: hidden;
  }

  .c-form {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    padding: 1rem;
    height: 80px;
    background-color: #212121;
  }

  .c-chat {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 80px;
    padding: 1rem;
    overflow-y: auto;
  }
</style>
