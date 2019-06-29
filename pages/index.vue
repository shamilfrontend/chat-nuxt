<template>
  <v-layout
    column
    justify-center
    align-center
  >
    <v-btn
      @click="message"
    >New massega</v-btn>
  </v-layout>
</template>

<script>

  export default {
    sockets: {
      connect() {
        console.log('socket connected')
      }
    },
    methods: {
      message() {
        this.$socket.emit('createMessage', {
          text: 'FROM CLIENT'
        })
      }
    }
  }
</script>
